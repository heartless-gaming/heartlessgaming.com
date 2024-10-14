export default defineEventHandler(async (event) => {
  const { printfulToken } = useRuntimeConfig(event)

  const url = `https://api.printful.com/orders`
  const headers = { Authorization: `Bearer ${printfulToken}` }

  const fetchNewOrder = await $fetch(url, {
    method: 'POST',
    headers,
    body: { hello: 'world ' },
  })

  console.log(fetchNewOrder)

  return fetchNewOrder
})
