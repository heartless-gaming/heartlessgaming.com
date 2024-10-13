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
      <NuxtLink to="/" class="group">
        <SvgLogoHeartlessgamingSkull2020
          class="size-12 group-hover:-rotate-12 transition-transform p-6 box-content"
          :font-controlled="false"
        />
      </NuxtLink>
    </header>
    <main>
      <div>
        <h1>Passer commande</h1>
        <p>Product name - prix</p>
      </div>
      <div class="bg-base-200 collapse collapse-arrow">
        <input type="checkbox" checked="true" class="peer">
        <div
          class="collapse-title bg-base-200"
        >
          Information suplémentaires
        </div>
        <div
          class="collapse-content bg-base-200"
        >
          <ul class="list-inside pl-4 list-disc leading-relaxed">
            <li>L'email saisi servira à assurer le suivi de la commande uniquement</li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
