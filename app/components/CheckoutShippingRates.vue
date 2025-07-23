<script setup lang="ts">
const cartStore = useCartStore()
const { items: cartItems } = storeToRefs(cartStore)

const userData = useStateCheckoutShippingInfoFormData()
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

  isFetching.value = false
}
</script>

<template>
  <CheckoutSubtitle>Calcul des frais de livraison</CheckoutSubtitle>
  <button class="btn btn-info" @click="calculateShippingRates">
    DEV BUTTON: CALCULATE THE SHIPPING RATE
  </button>
  <CoolLoader v-show="isFetching">
    Calcul des frais de livraison en cours...
  </CoolLoader>
  <CheckoutShippingRatesError v-if="isError" />
  <CheckoutShippingRatesDetails v-show="shippingRates.length" :shipping-rates />
</template>
