import express from 'express'
import Stripe from 'stripe'

const app = express()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 66600
}

app.post('/create-payment-intent', async (req, res) => {
  // const { items } = req.body
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: 'eur',
  })

  res.send({
    clientSecret: paymentIntent.client_secret,
  })
})

/**
 * Routes of the api prefixed with /api in nuxt.config.js
 */
// app.get('/stripe', topkek)

module.exports = app
