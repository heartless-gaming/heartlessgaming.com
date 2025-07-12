export const useCartStore = defineStore('cart', () => {
  const items = ref([])

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
