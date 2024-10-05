<script setup lang="ts">
const { public: publicKeys } = useRuntimeConfig()

const sizes = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL']

const colors = [
  { name: 'French Navy', hex: '#112537' },
  { name: 'Dark Heather Grey', hex: '#2b2928' },
  { name: 'Burgundy', hex: '#801f24' },
  { name: 'Anthracite', hex: '#3e383e' },
  { name: 'Red', hex: '#ed0739' },
  { name: 'Stargazer', hex: '#3d737d' },
  { name: 'Khaki', hex: '#6e6b4d' },
  { name: 'Dark Heather Blue', hex: '#7a8ca8' },
  { name: 'Heather Grey', hex: '#cfcbc8' },
  { name: 'Desert Dust', hex: '#dcccb4' },
  { name: 'Fraiche Peche', hex: '#ffd2be' },
  { name: 'Cotton Pink', hex: '#ffe9eb' },
  { name: 'Lavender', hex: '#f7ecff' },
  { name: 'White', hex: '#ffffff' },
]

const activeColor = ref(2)
const activeSize: Ref<null | number> = ref(2)

const activeImagePath = computed(() => `/img/shirt/embroidered-heartlessgaming-t-shirt-${toKebab(colors[activeColor.value].name)}.jpg`)

const paymentEl = ref(null)
const { onLoaded } = useScriptStripe({
  // advancedFraudSignals: false,
})

const ringClasses = computed(() => [

])

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
  <section class="mb-16 max-w-screen-lg mx-4 lg:mx-auto tracking-wide">
    <h2 class="text-3xl mb-6 font-bold text-center">
      T-shirt Heartless Gaming logo brodé 100% coton
    </h2>
    <div class="mb-6">
      <div class="flex justify-center">
        <NuxtLink
          :to="activeImagePath"
          external
          class="skeleton"
        >
          <NuxtPicture
            sizes="360px sm:500px"
            width="500"
            height="500"
            :src="activeImagePath"
            :img-attrs="{ class: 'rounded-box' }"
          />
        </NuxtLink>
      </div>
    </div>
    <h3 class="text-2xl font-bold mb-6">
      Sélectionner une Couleur
    </h3>
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-2 gap-y-4 place-content-between mb-6">
      <button
        v-for="(color, index) in colors"
        :key="index"
        class="group flex flex-col justify-center items-center gap-y-2"
        @click="activeColor = index"
      >
        <div
          class="size-10 rounded-full group-hover:ring-4 transition-all ring-offset-0 group-hover:ring-offset-4 ring-offset-base-100"
          :class="[activeColor === index ? 'ring-success ring-6' : 'ring-base-content ring-2']"
          :style="`background-color: ${color.hex}`"
        />
        <span class="font-bold tracking-normal" :class="{ 'text-success': activeColor === index }">{{ color.name }}</span>
      </button>
    </div>
    <div class="flex items-baseline gap-x-2">
      <h3 class="text-2xl font-bold mb-6">
        Sélectionner une Taille
      </h3>
      <span>
        <NuxtLink
          class="pretty-link"
          to="https://res.cloudinary.com/www-stanleystella-com/image/upload/v1633603833/Product%20Content/Product%20Sheets/fr_FR/STTU169.pdf"
        >
          Guide des tailles
        </NuxtLink>
      </span>
    </div>
    <div class="flex flex-wrap md:grid grid-flow-col gap-4 mb-6">
      <button
        v-for="(size, index) in sizes"
        :key="index"
        class="btn text-2xl"
        :class="{ 'btn-success': activeSize === index, 'btn-outline': activeSize !== index }"
        @click="activeSize = index"
      >
        {{ size }}
      </button>
    </div>
    <h3 class="text-9xl font-bold flex items-end gap-x-2">
      <span class="tracking-wide">27 €</span>
    </h3>
    <p class="text-xl mb-6">
      TTC & frais de livraison inclut
    </p>
    <div class="mb-16">
      <button
        class="btn btn-accent uppercase btn-lg"
        @click="buy"
      >
        Acheter
      </button>
    </div>
    <div ref="paymentEl" />
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
          <li>
            Broderie sur un
            <NuxtLink
              class="pretty-link"
              to="https://stanleystella.com/fr-fr/creator-2-0-sttu169"
              external
            >
              T-shirt Stanley/Stella 100% coton biologique vegan
            </NuxtLink>
          </li>
          <li>
            Imprimé à la demande (dropshiping) par
            <NuxtLink
              to="https://www.printful.com"
              class="pretty-link"
              external
            >
              Printful
            </NuxtLink>
          </li>
          <li>
            Gestion des paiment par
            <NuxtLink
              to="https://dashboard.stripe.com/"
              class="pretty-link"
              external
            >
              Stripe
            </NuxtLink>
          </li>
          <li>Cout de fabrication du tee shirt 13,95€ & 19,15€ pour les tailles à partir de 3XL</li>
          <li>Prix d'expédition entre 3.99€ & 10.59€, ~5€ vers la France depuis la warehouse Printful de Barcelone</li>
          <li>1.5% + 0.25€ prélevé par Stripe sur chaque transaction</li>
          <li>Marge maximal sur chaque vente: 6€</li>
          <li>L'email saisi servira à assurer le suivi de la commande uniquement</li>
        </ul>
      </div>
    </div>
  </section>
</template>
