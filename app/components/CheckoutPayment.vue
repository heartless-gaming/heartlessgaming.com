<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const userData = useStateCheckoutShippingInfoFormData()
const pickedShippingRate = useStatePickedShippingRates()
const shippingRatePrice = useStateShippingRatesPrice()

const cartStore = useCartStore()
const { items: cartItems, total: cartTotal } = storeToRefs(cartStore)
const checkoutStore = useCheckoutStore()
const { isContactFormValid } = storeToRefs(checkoutStore)
const thankYouPage = '/order-complete'

const paymentEl = ref(null)
const { onLoaded } = useScriptStripe()

const isMounted = useMounted()
const isFetching = shallowRef(false)
const showPaymentForm = shallowRef(false)
const paymentInProcess = shallowRef(false)
const paymentHasError = shallowRef(false)
const totalPrice = computed(() => (cartTotal.value * 100 + shippingRatePrice.value * 100) / 100)

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

// Your stripe implementation can always be refactored
const clientSecret = ref({ clientSecret: '' })
let elements
let stripe

async function generatePaymentForm() {
  if (!isMounted.value)
    return

  showPaymentForm.value = false
  isFetching.value = true
  paymentHasError.value = false

  clientSecret.value = await $fetch('/api/createPaymentIntent', {
    method: 'POST',
    body: {
      cartItems: cartItems.value,
      userData: userData.value,
      shippingRate: pickedShippingRate.value,
    },
  }).catch(error => paymentHasError.value = true)

  onLoaded(async ({ Stripe }) => {
    stripe = Stripe(runtimeConfig.public.stripePublicKey)
    elements = stripe.elements(clientSecret.value, appearance)

    const paymentElement = elements.create('payment', options)
    paymentElement.mount(paymentEl.value)

    showPaymentForm.value = true
  })

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
    confirmParams: { return_url: document.location.origin + thankYouPage },
    // Uncomment below if you only want redirect for redirect-based payments
    // redirect: "if_required",
  })

  if (error) {
    paymentHasError.value = true
  }

  paymentInProcess.value = false
}

watch([isContactFormValid, pickedShippingRate], () => {
  if (isContactFormValid.value && pickedShippingRate.value) {
    generatePaymentForm()
    return
  }

  showPaymentForm.value = false
})
</script>

<template>
  <section>
    <CheckoutSubtitle
      :class="{ 'text-base-content/50': !isContactFormValid }"
      class="flex gap-x-2"
    >
      <span>Paiement</span>
      <span v-show="shippingRatePrice" class="font-bold">{{ toCurrency(totalPrice) }}</span>
    </CheckoutSubtitle>
    <CoolLoader v-show="isFetching" class="min-h-72">
      Génération du formulaire de paiement en cours...
    </CoolLoader>
    <div v-show="paymentHasError" class="mb-6 alert alert-warning">
      <Icon name="famicons:warning-outline" size="1.8em" />
      <span>Le paiement a échoué. Veuillez vérifier vos informations bancaire.</span>
    </div>
    <div
      v-show="showPaymentForm"
      data-theme="nord"
      class="min-h-72 rounded-box p-2"
    >
      <div ref="paymentEl" />
    </div>
    <button
      :disabled="!showPaymentForm"
      class="btn mt-6 btn-block btn-xl btn-primary"
      :class="{ 'btn-disabled': paymentInProcess }"
      @click="submitOrder"
    >
      <span>Commander</span>
    </button>
  </section>
</template>
