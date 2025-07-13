/**
 * TODO : Cache this call in redis it's already setup it's free real estate !
 * https://nuxt.com/docs/4.x/guide/directory-structure/server#server-storage
 */
export default defineEventHandler(async (event) => {
  const { printfulToken } = useRuntimeConfig(event)

  const colors = [
    { name: 'French Navy', hex: '#112537' },
    { name: 'Dark Heather Grey', hex: '#2b2928' },
    { name: 'Burgundy', hex: '#801f24' },
    { name: 'Anthracite', hex: '#3e383e' },
    { name: 'Red', hex: '#ed0739' },
    { name: 'Stargazer', hex: '#3d737d' },
    { name: 'Khaki', hex: '#6e6b4d' },
    { name: 'Dark Heather Blue', hex: '#7a8ca8' },
    { name: 'Heather Grey', hex: '#cfcbc8' },
    { name: 'Desert Dust', hex: '#dcccb4' },
    { name: 'Fraiche Peche', hex: '#ffd2be' },
    { name: 'Cotton Pink', hex: '#ffe9eb' },
    { name: 'Lavender', hex: '#f7ecff' },
    { name: 'White', hex: '#ffffff' },
  ]

  // Helper to find the shirt ID in the store
  // const topkek = await $fetch('https://api.printful.com/store/products', { headers })
  // console.log(topkek);

  const shirtID = 386501101
  const url = `https://api.printful.com/store/products/${shirtID}`
  const headers = { Authorization: `Bearer ${printfulToken}` }

  const fetchedShirts = await $fetch(url, { headers })
  // console.log(fetchedShirts.result.sync_variants)

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
