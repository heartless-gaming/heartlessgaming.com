<script setup lang="ts">
const store = useCartStore()
const { items, itemCount } = storeToRefs(store)
console.log(items.value)

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

const isContactFormValid = ref(true)

// implement step locking when going backward or refresh next steps
function contactFormValidated() {
  isContactFormValid.value = true
  // calculateShippingRates()
  isShippingLocked.value = false
  stepper.value++
  // isPaymentLocked.value = false
}

const currentTheme = useLocalStorage('theme', '')
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
          <div class="hidden">
            <h2 class="text-2xl">
              Calcul des frais de livraison
            </h2>
            <div>
              <CheckoutUserForm v-show="!isContactFormValid" @submit="contactFormValidated()" />
              <CheckoutUserFormPreview v-show="isContactFormValid" @update-user-form="isContactFormValid = false" />
            </div>
          </div>
          <CheckoutFormShipping />
          <CheckoutFormPayment />
        </div>
      </div>
    </main>
  </div>
</template>
