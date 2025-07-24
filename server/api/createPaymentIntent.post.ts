import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const { stripeSecretKey } = useRuntimeConfig(event)
  const body = await readBody(event)
  const { cartItems, userData } = body
  const shirtSku = '687588552F037'
  const stripe = new Stripe(stripeSecretKey)
  const shirts = await $fetch('/api/getShirt')

  const getRatePrice = async () => {
    const recipient = {
      address1: userData.address,
      city: userData,
      country_code: 'FR',
      zip: userData.postalCode,
      phone: userData.phone,
    }

    const items = cartItems.map(cartItem => ({
      variant_id: cartItem.variant_id,
      quantity: 1,
      value: cartItem.price,
    }))

    const response = await $fetch('/api/calculateShippingRates', {
      method: 'POST',
      body: {
        recipient,
        items,
        currency: 'EUR',
        locale: 'fr_FR',
      },
    })

    if (response.shippingRates.code !== 200) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Total price for your order could not be calculated',
      })
    }

    const shippingRate = response.shippingRates.result.find((shippingRate) => {
      return shippingRate.id === body.shippingRate
    })

    return shippingRate.rate * 100
  }

  // Check SKU & Shipping rates from Printful to avoid client side manipulation
  const calculateTotalOrderPrice = async () => {
    const itemsPrice = cartItems.reduce((acc, item) => {
      const shirt = shirts.find(shirt => shirt.sku === item.sku && item.sku.includes(shirtSku))

      // Throw if the sku is not found in our shirts query
      if (shirt === undefined) {
        throw createError({
          statusCode: 400,
          statusMessage: 'Total price for your order could not be calculated',
        })
      }

      return acc += Number(shirt.price) * 100
    }, 0)

    return itemsPrice + await getRatePrice()
  }

  try {
    const amount = await calculateTotalOrderPrice()
    const description = cartItems.map(i => `${i.variantName} ${toCurrency(i.price)}`).join('\n')

    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'eur',
      amount,
      receipt_email: userData.email,
      description,
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
