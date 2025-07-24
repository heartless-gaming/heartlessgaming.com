// todo: checkout states are to fragmented use this store instead
export const useCheckoutStore = defineStore('checkout', () => {
  const isContactFormValid = ref(false)

  return { isContactFormValid }
})
