/**
 * Calculate shipping rate based on printful API
 *
 * https://developers.printful.com/docs/#tag/Shipping-Rate-API/operation/calculateShippingRates
 */
export default defineEventHandler(async (event) => {
  const { printfulToken } = useRuntimeConfig(event)
  const url = `https://api.printful.com/shipping/rates`
  const headers = { Authorization: `Bearer ${printfulToken}` }
  const body = await readBody(event)

  const shippingRates = await $fetch(url, { method: 'POST', body, headers }).catch(error => error.data)

  return { shippingRates }
})
