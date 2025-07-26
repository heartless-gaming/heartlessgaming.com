export default defineEventHandler(async (event) => {
  const { printfulToken } = useRuntimeConfig(event)

  const shirtID = 353100084
  const url = `https://api.printful.com/store/products/${shirtID}`
  const headers = { Authorization: `Bearer ${printfulToken}` }

  const fetch = await $fetch(url, { headers })
})
