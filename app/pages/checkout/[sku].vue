<script setup lang="ts">
const route = useRoute()
const { data: shirts } = await useFetch('/api/getShirt')
const shirt = shirts.value.find(shirt => shirt.sku === route.params.sku)

// Redirect to shirt page if sku is not correct
if (!shirt) {
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

// implement step locking when goin backward or refresh next steps
function nextStep() {
  // if (contactformValid) {
  isShippingLocked.value = false
  isPaymentLocked.value = false
  // }
  stepper.value++
}

async function topkek() {
  const kek = await $fetch('/api/place-order')
}
</script>

<template>
  <div class="container mx-auto px-2">
    <header class="mb-4 sm:mb-6">
      <NavbarCheckout />
    </header>
    <main>
      <CheckoutTitle :product-name="shirt.name" :price="shirt.price" />
      <button class="btn btn-success mb-4" @click="topkek">
        test place printful order
      </button>
      <div class="join join-vertical mb-10 w-full">
        <div class="collapse join-item collapse-arrow border border-base-300">
          <input v-model="stepper" type="radio" value="0">
          <div class="collapse-title text-xl">
            Contact & Adresse
          </div>
          <div class="collapse-content">
            <CheckoutFormUser @submit="nextStep()" />
          </div>
        </div>
        <div class="collapse join-item collapse-arrow border border-base-300">
          <input v-model="stepper" type="radio" value="1" :disabled="isShippingLocked">
          <div class="collapse-title text-xl" :class="{ 'opacity-50': isShippingLocked }">
            Livraison
          </div>
          <div class="collapse-content">
            <CheckoutFormShipping />
          </div>
        </div>
        <div class="collapse join-item collapse-arrow border border-base-300">
          <input v-model="stepper" type="radio" value="2" :disabled="isPaymentLocked">
          <div class="collapse-title text-xl" :class="{ 'opacity-50': isShippingLocked }">
            Paiement
          </div>
          <div class="collapse-content">
            <CheckoutFormPayment />
          </div>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-base-200">
        <input type="checkbox" checked="true" class="peer">
        <div
          class="collapse-title bg-base-200"
        >
          Information suplémentaires
        </div>
        <div
          class="collapse-content bg-base-200"
        >
          <ul class="list-inside list-disc pl-4 leading-relaxed">
            <li>L'email saisi servira à assurer le suivi de la commande uniquement</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
