import express from 'express'
import bodyParser from 'body-parser'
import Redis from 'ioredis'
import Stripe from 'stripe'

const app = express()
app.use(bodyParser.json())
const redis = new Redis()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Return date has year/month/day eg: 1970/12/24 or
const formatDate = (date, isEpoch) => {
  // * 1000 cuz dates needs epoch in miliseconds to be parsed ¯\_(ツ)_/¯
  date = new Date(date * 1000)

  if (isEpoch) {
    return date.valueOf()
  }

  return date.toJSON().substr(0, 10).replaceAll('-', '/')
}

const createPaymentIntent = async (req, res) => {
  const amount = req.body.amount
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'eur',
    description: 'Donation',
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
}

const donation = async (req, res) => {
  const paymentIntents = await stripe.paymentIntents.list({
    limit: 100, // It's the max ! One day we'll have to implement pagination...
  })

  const response = paymentIntents.data.reduce((acc, paymentIntent, index) => {
    if (index === 0) {
      acc.total = 0
      acc.data = []
    }

    if (paymentIntent.status === 'succeeded') {
      acc.total += paymentIntent.amount

      // Donation data
      acc.data.push({
        type: 'donation',
        rawdate: formatDate(paymentIntent.created, true),
        date: formatDate(paymentIntent.created),
        description: 'Donation !',
        amount: paymentIntent.amount / 100,
      })
    }

    return acc
  }, {})

  // Send the data to redis with an expiration value of 6 hours
  redis.setex('hg:donation:total', 21600, JSON.stringify(response.total))
  redis.setex('hg:donation', 21600, JSON.stringify(response.data))

  if (req.path === '/donations/total') {
    res.json(response.total)
  } else {
    res.json(response.data)
  }
}

// Donations cache middlewares
const donationCache = async (req, res, next) => {
  const redisDonation = await redis.get('hg:donation')
  redisDonation ? res.json(JSON.parse(redisDonation)) : next()
}

const donationTotalCache = async (req, res, next) => {
  const redisDonationTotal = await redis.get('hg:donation:total')
  redisDonationTotal ? res.json(JSON.parse(redisDonationTotal)) : next()
}

app.post('/create-payment-intent', createPaymentIntent)
app.get('/donations', donationCache, donation)
app.get('/donations/total', donationTotalCache, donation)
// app.get('/donations/total', donation)
// app.get('/donations', donation)

module.exports = app
