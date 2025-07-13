export const useCartStore = defineStore('cart', () => {
  const items = ref([
    { available: true, variant_id: 14946, name: 'T-shirt Heartless Gaming logo brodé 100% coton', variantName: 'T-shirt Heartless Gaming logo brodé 100% coton / Burgundy / L', size: 'L', price: '25.50', color: 'Burgundy', hex: '#801f24', sku: '686E635939BA0_Burgundy-L' },
    { available: true, variant_id: 14946, name: 'T-shirt Heartless Gaming logo brodé 100% coton', variantName: 'T-shirt Heartless Gaming logo brodé 100% coton / Burgundy / L', size: 'L', price: '25.50', color: 'Burgundy', hex: '#801f24', sku: '686E635939BA0_Burgundy-L' },
  ])

  const isCartEmpty = computed(() => !items.value.length)
  const itemCount = computed(() => items.value.length)
  const total = computed(() => items.value.reduce((acc, item) => acc += Number(item.price), 0))

  function addToCart(shirt) {
    items.value.push(shirt)
  }

  function removeFromCart(index) {
    items.value.splice(index, 1)
  }

  return { items, isCartEmpty, addToCart, removeFromCart, itemCount, total }
})
