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

const isContactFormValid = ref(false)

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
    <header
      class="
        mb-4
        sm:mb-6
      "
    >
      <NavbarCheckout />
    </header>
    <main>
      <CheckoutTitle />
      <div class="">
        <div class="">
          <div class="text-xl">
            Calcul des frais de livraison
          </div>
          <div class="">
            <CheckoutUserForm v-show="isContactFormValid" @submit="contactFormValidated()" />
            <CheckoutUserFormPreview v-show="!isContactFormValid" @update-user-form="isContactFormValid = false" />
          </div>
        </div>
        <div class="">
          <div class="text-xl" :class="{ 'opacity-50': isShippingLocked }">
            Livraison
          </div>
          <div class="">
            <CheckoutFormShipping />
          </div>
        </div>
        <div class="">
          <div class="text-xl" :class="{ 'opacity-50': isShippingLocked }">
            Paiement
          </div>
          <div>
            <CheckoutFormPayment />
          </div>
        </div>
      </div>
      <div class="collapse-arrow collapse bg-base-300">
        <input type="checkbox" checked="true" class="peer">
        <div
          class="collapse-title bg-base-200"
        >
          Information suplémentaires
        </div>
        <div
          class="collapse-content bg-base-200"
        >
          <ul
            class="
              list-inside list-disc pl-4 leading-relaxed
              marker:text-primary
            "
          >
            <li>L'email saisi servira à assurer le suivi de la commande uniquement</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
