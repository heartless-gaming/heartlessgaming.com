<script setup lang="ts">
const { public: publicKeys } = useRuntimeConfig()
const paymentEl = ref(null)
const { onLoaded } = useScriptStripe({
  // advancedFraudSignals: false,
})

async function buy() {
  const { clientSecret } = await $fetch('/api/create-payment-intent')

  onLoaded(({ Stripe }) => {
    console.log(clientSecret)
    const stripe = Stripe(publicKeys.stripePublicKey)
    const elements = stripe.elements({ clientSecret })
    const paymentElement = elements.create('payment', clientSecret)
    console.log(paymentElement)

    paymentElement.mount(paymentEl.value)
  })
}
</script>

<template>
  <div class=" container px-2 mx-auto">
    <header>
      <SvgLogoHeartlessgamingSkull2020
        class="size-5 group-hover:-rotate-12 transition-transform"
        :font-controlled="false"
      />
    </header>
    <main>
      <div>
        <h1>Passer commande</h1>
        <p>Product name - prix</p>
      </div>
    </main>
  </div>
</template>
