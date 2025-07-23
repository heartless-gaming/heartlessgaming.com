import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const { stripeSecretKey } = useRuntimeConfig(event)
  const body = await readBody(event)
  const { cartItems, userData } = body
  const itemsSkus = cartItems.map(item => item.sku)
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

  /**
   * Takes skus from the client cart and calculate the total amount of the order
   *
   * This allows sku manipulation on the client side
   * I'll manually be placing every order myself anyway on printful website
   *
   * todo: fix this if manually checking every orders becomes tiresome
   *
   * Also recalculates shipping rate to make sure it's the right prices
   */
  const calculateTotalOrderPrice = async () => {
    const itemsPrice = itemsSkus.reduce((acc, sku) => {
      const shirt = shirts.find(shirt => shirt.sku === sku)

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

    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'eur',
      amount,
      receipt_email: userData.email,
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
