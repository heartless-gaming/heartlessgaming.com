export const useCheckoutStore = defineStore('checkout', () => {
  const isContactFormValid = ref(true)

  return { isContactFormValid }
})
