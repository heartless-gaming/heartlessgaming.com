<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

// const return_url = 'http://localhost:3000/order-complete'
const return_url = 'https://heartlessgaming.com/order-complete'

const paymentEl = ref(null)
const { onLoaded } = useScriptStripe()

const isMounted = useMounted()
const isFetching = shallowRef(false)
const showPaymentForm = shallowRef(false)
const paymentInProcess = shallowRef(false)
const paymentHasError = shallowRef(false)

// Stripe Elements appearance & options
const appearance = {
  // theme: 'night'
}

const options = {
  layout: {
    type: 'tabs',
    defaultCollapsed: false,
  },
}

const clientSecret = ref({ clientSecret: '' })
let elements
let stripe

async function generatePaymentForm() {
  if (!isMounted.value)
    return

  showPaymentForm.value = false
  isFetching.value = true
  paymentHasError.value = false

  clientSecret.value = await $fetch('/api/createPaymentIntent')

  onLoaded(async ({ Stripe }) => {
    stripe = Stripe(runtimeConfig.public.stripePublicKey)
    elements = stripe.elements(clientSecret.value, appearance)

    const paymentElement = elements.create('payment', options)
    paymentElement.mount(paymentEl.value)
  })

  showPaymentForm.value = true
  isFetching.value = false
}

async function submitOrder() {
  paymentInProcess.value = true
  paymentHasError.value = false

  const { error: submitError } = await elements.submit()
  if (submitError) {
    paymentInProcess.value = false
    paymentHasError.value = true

    return
  }

  // Use the clientSecret and Elements instance to confirm the setup
  const { error } = await stripe.confirmPayment({
    elements,
    clientSecret: clientSecret.value.clientSecret,
    confirmParams: { return_url },
    // Uncomment below if you only want redirect for redirect-based payments
    // redirect: "if_required",
  })

  if (error) {
    paymentHasError.value = true
  }

  paymentInProcess.value = false
}
</script>

<template>
  <CheckoutSubtitle>
    Paiement
  </CheckoutSubtitle>
  <button class="btn btn-info" @click="generatePaymentForm">
    DEV BUTTON: CREATE PAYMENT INTENT
  </button>
  <CoolLoader v-show="isFetching" class="min-h-72">
    Génération du formulaire de paiement en cours...
  </CoolLoader>
  <div v-show="paymentHasError" class="alert alert-warning">
    <Icon name="famicons:warning-outline" size="1.8em" />
    <span>Le paiement a échoué. Veuillez vérifier vos informations bancaire.</span>
  </div>
  <div
    v-show="showPaymentForm"
    data-theme="nord"
    class="mb-6 min-h-72 rounded-box p-2"
  >
    <div ref="paymentEl" />
  </div>
  <button
    v-show="showPaymentForm"
    class="btn btn-block btn-xl btn-primary"
    :class="{ 'btn-disabled': paymentInProcess }"
    @click="submitOrder"
  >
    Commander
  </button>
</template>
