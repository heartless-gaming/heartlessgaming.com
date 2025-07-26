/**
 * TODO : Cache this call in redis it's already setup it's free real estate !
 * https://nuxt.com/docs/4.x/guide/directory-structure/server#server-storage
 */
export default defineEventHandler(async (event) => {
  const { printfulToken } = useRuntimeConfig(event)

  const colors = [
    { name: 'Black', hex: '#282828' },
    { name: 'Red', hex: '#ba2142' },
    { name: 'True Navy', hex: '#314661' },
    { name: 'Hemp', hex: '#5c5f45' },
    { name: 'Berry', hex: '#8f607e' },
    { name: 'Crimson', hex: '#b95d5d' },
    { name: 'Espresso', hex: '#8a6e5a' },
    { name: 'Flo Blue', hex: '#5f70bc' },
    { name: 'Paprika', hex: '#f75454' },
    { name: 'Blue Jean', hex: '#76828f' },
    { name: 'Burnt orange', hex: '#f77e4e' },
    { name: 'Grey', hex: '#949494' },
    { name: 'Violet', hex: '#9c8dce' },
    { name: 'Seafoam', hex: '#72ab9d' },
  ]

  const shirtID = 386937543
  const url = `https://api.printful.com/store/products/${shirtID}`
  const headers = { Authorization: `Bearer ${printfulToken}` }

  // Helper to find the shirt ID in the store
  // const topkek = await $fetch('https://api.printful.com/store/products', { headers })
  // console.log(topkek)

  const fetchedShirts = await $fetch(url, { headers })
  // console.log(fetchedShirts.result.sync_variants.filter(shirt => shirt.availlable))

  const productName = fetchedShirts.result.sync_product.name

  const shirts = fetchedShirts.result.sync_variants.map((variant) => {
    const { availability_status, variant_id, name: variantName, size, retail_price: price, color, sku } = variant

    return {
      available: availability_status === 'active',
      variant_id,
      name: productName,
      variantName,
      size,
      price,
      color,
      hex: colors.find(color => color.name === variant.color).hex,
      sku,
    }
  })

  return shirts
})
