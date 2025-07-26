export const useCartStore = defineStore('cart', () => {
  const items = ref([
    // { available: true, variant_id: 15114, name: 'Original Skull', variantName: 'Original Skull / Black / S', size: 'S', price: '29.95', color: 'Black', hex: '#282828', sku: '687588552F037_Black-S' },
    // { available: true, variant_id: 15123, name: 'Original Skull', variantName: 'Original Skull / Red / XL', size: 'XL', price: '27.75', color: 'Red', hex: '#ba2142', sku: '687588552F037_Red-XL' },
    // { available: true, variant_id: 15123, name: 'Original Skull', variantName: 'Original Skull / Red / XL', size: 'XL', price: '27.75', color: 'Red', hex: '#ba2142', sku: '687588552F037_Red-XL' },
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
