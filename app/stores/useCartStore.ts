export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  const isCartEmpty = computed(() => !items.value.length)

  function addToCart(shirt) {
    items.value.push(shirt)
  }

  function removeFromCart(index) {
    items.value.splice(index, 1)
  }

  console.log(items.value)

  return { items, isCartEmpty, addToCart, removeFromCart }
})
