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

  const shirtID = 353100084
  const url = `https://api.printful.com/store/products/${shirtID}`
  const headers = { Authorization: `Bearer ${printfulToken}` }

  const fetchShirt = await $fetch(url, { headers })

  const shirts = fetchShirt.result.sync_variants.map((variant) => {
    const { availability_status, name, size, retail_price: price, color, sku } = variant

    return {
      available: availability_status === 'active',
      name,
      size,
      price,
      color,
      hex: colors.find(color => color.name === variant.color).hex,
      sku,
    }
  })

  return shirts
})
