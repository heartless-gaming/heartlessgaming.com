<script setup lang="ts">
const checkoutStore = useCheckoutStore()
const { isContactFormValid } = storeToRefs(checkoutStore)
const cartStore = useCartStore()
const { items: cartItems } = storeToRefs(cartStore)

const userData = useStateCheckoutShippingInfoFormData()
const pickedShippingRate = useStatePickedShippingRates()
const shippingRatePrice = useStateShippingRatesPrice()
const { address, city, postalCode, phone } = toValue(userData.value)

const isFetching = ref(false)
const isError = ref(false)
const shippingRates = ref([])

async function calculateShippingRates() {
  isFetching.value = true
  isError.value = false
  shippingRates.value = []

  const recipient = {
    address1: address,
    city,
    country_code: 'FR',
    zip: postalCode,
    phone,
  }

  const items = cartItems.value.map(cartItem => ({
    variant_id: cartItem.variant_id,
    quantity: 1,
    value: cartItem.price,
  }))

  const response = await $fetch('/api/calculateShippingRates', {
    method: 'POST',
    body: { recipient, items, currency: 'EUR', locale: 'fr_FR' },
  })

  if (response.shippingRates.code !== 200) {
    isError.value = true
    isFetching.value = false
    return
  }

  shippingRates.value = response.shippingRates.result
  pickedShippingRate.value = shippingRates.value[0].id
  shippingRatePrice.value = Number(shippingRates.value[0].rate)

  isFetching.value = false
}

watchEffect(() => {
  if (isContactFormValid.value)
    calculateShippingRates()
})
</script>

<template>
  <section>
    <CheckoutSubtitle :class="{ 'text-base-content/50': !isContactFormValid }">
      Frais de livraison
    </CheckoutSubtitle>
    <CoolLoader v-show="isFetching">
      Calcul des frais de livraison en cours...
    </CoolLoader>
    <CheckoutShippingRatesError v-if="isError" />
    <CheckoutShippingRatesDetails v-show="isContactFormValid" :shipping-rates />
  </section>
</template>
