import express from 'express'
import bodyParser from 'body-parser'
import Redis from 'ioredis'
import Stripe from 'stripe'

const app = express()
app.use(bodyParser.json())
const redis = new Redis()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (amount) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return amount * 100
}

const createPaymentIntent = async (req, res) => {
  const amount = req.body.amount
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(amount),
    currency: 'eur',
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
}

const stripePayouts = async (req, res) => {
  const payouts = await stripe.payouts.list({
    // limit: 3,
  })

  const response = payouts.data.reduce((acc, payout) => {
    const obj = {
      date: payout.created,
      description: 'Donation',
      amount: payout.amount,
    }

    acc.push(obj)

    return acc
  }, [])

  // Send the data to redis with an expiration value of 6 hours
  redis.setex('heartlesspayoutstripe', 21600, JSON.stringify(response))

  res.json(response)
}

// Stripe payout cache middleware with redis key 'heartlesspayoutstripe'
const stripePayoutsCache = async (req, res, next) => {
  const heartlesspayoutstripe = await redis.get('heartlesspayoutstripe')

  if (heartlesspayoutstripe === null) {
    next()
  } else {
    res.json(JSON.parse(heartlesspayoutstripe))
  }
}

app.post('/create-payment-intent', createPaymentIntent)
app.get('/stripePayouts', stripePayoutsCache, stripePayouts)

module.exports = app
