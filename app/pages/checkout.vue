<script setup lang="ts">
definePageMeta({ middleware: ['external-route'] })
const route = useRoute()
const cartId = route.query?.cartId
const cartStore = useCartStore()
const { items } = storeToRefs(cartStore)

if (!cartId)
  navigateTo('/original-skull')

const cartKey = `cart:${cartId}`
const cartExist = await $fetch('/api/cartExist', { method: 'POST', body: { cartKey } })

if (!cartExist)
  navigateTo('/original-skull')

const foundCart = await $fetch('/api/getCart', { method: 'POST', body: { cartKey } })
items.value = foundCart.items

const { public: publicKeys } = useRuntimeConfig()
const paymentEl = ref(null)
const { onLoaded } = useScriptStripe({
  // advancedFraudSignals: false,
})

async function buy() {
  const { clientSecret } = await $fetch('/api/create-payment-intent')

  onLoaded(({ Stripe }) => {
    const stripe = Stripe(publicKeys.stripePublicKey)
    const elements = stripe.elements({ clientSecret })
    const paymentElement = elements.create('payment', clientSecret)

    paymentElement.mount(paymentEl.value)
  })
}

const currentTheme = ref('')
onMounted(() => {
  currentTheme.value = localStorage.getItem('theme')
})
</script>

<template>
  <div class="mx-auto mb-12 max-w-3xl px-2">
    <input
      type="radio"
      class="theme-controller hidden"
      :value="currentTheme"
      checked
    >
    <main>
      <div>
        <CheckoutTitle />
        <div class="grid gap-y-4">
          <CheckoutSummary />
          <CheckoutShippingInfo />
          <div class="divider" />
          <CheckoutShippingRates />
          <CheckoutPayment />
        </div>
      </div>
    </main>
  </div>
</template>
