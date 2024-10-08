export default defineEventHandler(async (event) => {
  // this file should be rename to call the cached data of the shirt request
  const { printfulToken } = useRuntimeConfig(event)

  const shirtID = 353100084
  const url = `https://api.printful.com/store/products/${shirtID}`
  const headers = {
    Authorization: `Bearer ${printfulToken}`,
  }
  const topkek = await $fetch(url, { headers })

  await useStorage('redis').setItem('shirt', topkek)

  return 'topkek'
})
