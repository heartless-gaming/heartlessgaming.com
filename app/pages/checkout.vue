<script setup lang="ts">
const cartStore = useCartStore()
const { items, itemCount } = storeToRefs(cartStore)

const checkoutStore = useCheckoutStore()
const { isContactFormValid } = storeToRefs(checkoutStore)

// Redirect to shirt page if sku is not correct
if (!itemCount.value) {
  navigateTo('/t-shirt-logo-brode-coton')
}

const { public: publicKeys } = useRuntimeConfig()
const paymentEl = ref(null)
const { onLoaded } = useScriptStripe({
  // advancedFraudSignals: false,
})

async function buy() {
  const { clientSecret } = await $fetch('/api/create-payment-intent')

  onLoaded(({ Stripe }) => {
    // console.log(clientSecret)
    const stripe = Stripe(publicKeys.stripePublicKey)
    const elements = stripe.elements({ clientSecret })
    const paymentElement = elements.create('payment', clientSecret)
    // console.log(paymentElement)

    paymentElement.mount(paymentEl.value)
  })
}

const isShippingLocked = ref(true)
const isPaymentLocked = ref(true)
const stepper = ref(0)

// implement step locking when going backward or refresh next steps
function contactFormValidated() {
  isContactFormValid.value = true
  // calculateShippingRates()
  isShippingLocked.value = false
  stepper.value++
  // isPaymentLocked.value = false
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
        <p class="animate-bounce text-center text-2xl">
          Page en construction
        </p>
        <div class="grid gap-y-4">
          <CheckoutSummary />
          <CheckoutShippingInfo />
          <CheckoutShippingRates />
          <CheckoutPayment />
        </div>
      </div>
    </main>
  </div>
</template>
