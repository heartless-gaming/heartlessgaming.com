import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const { stripeSecretKey } = useRuntimeConfig(event)

  const stripe = new Stripe(stripeSecretKey)

  const orderAmount = 2700
  let paymentIntent

  try {
    paymentIntent = await stripe.paymentIntents.create({
      currency: 'eur',
      amount: orderAmount,
    })

    // Send publishable key and PaymentIntent details to client
    return {
      clientSecret: paymentIntent.client_secret,
    }
  }
  catch (e) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    })
  }
})
