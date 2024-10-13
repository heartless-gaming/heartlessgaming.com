<script setup lang="ts">
const route = useRoute()
const { data: shirts } = await useFetch('/api/getShirt')

const colors = computed(() => shirts.value.reduce((acc, shirt) => {
  if (!acc.find(color => color.name === shirt.color)) {
    const { color, hex } = shirt
    acc.push({ name: color, hex })
  }

  return acc
}, []))

const activeColor: Ref<number> = ref(2)
const activeSize: Ref<number> = ref(2)
const activeSKU: Ref<string> = ref('669C1FAF72C24_Burgundy-L')

const price = ref(23.95)
const activeImagePath = computed(() => `/img/shirt/embroidered-heartlessgaming-t-shirt-${toKebab(colors.value[activeColor.value].name)}.jpg`)

const sizes = computed(() => shirts.value.reduce((acc, shirt) => {
  if (shirt.color === colors.value[activeColor.value].name && !acc.includes(shirt.size)) {
    acc.push(shirt.size)
  }

  return acc
}, []))

const activeShirt = computed(() => shirts.value.find(shirt => shirt.color === colors.value[activeColor.value].name && shirt.size === sizes.value[activeSize.value]))

const updatePrice = () => price.value = activeShirt.value.price
const updateSKU = () => activeSKU.value = activeShirt.value.sku

function changeColor(index: number) {
  activeColor.value = index
  // if the size is not avalable in this color defaults to L
  if (activeSize.value >= sizes.value.length) {
    activeSize.value = 2
  }
  updatePrice()
  updateSKU()
}

function changeSize(index: number) {
  activeSize.value = index
  updatePrice()
  updateSKU()
}
</script>

<template>
  <section class="mb-16 max-w-screen-lg mx-4 lg:mx-auto tracking-wide">
    <div class="mb-6">
      <div class="flex justify-center">
        <a
          :href="activeImagePath"
          class="skeleton hover:ring-4 ring-primary ring-offset-4 ring-offset-base-100 transition"
        >
          <NuxtImg
            format="avif"
            sizes="360px sm:500px"
            width="500"
            height="500"
            :src="activeImagePath"
            class="rounded-box"
          />
        </a>
      </div>
    </div>
    <p class="text-2xl font-bold mb-6">
      Sélectionner une Couleur
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-2 gap-y-4 place-content-between mb-6">
      <button
        v-for="(color, index) in colors"
        :key="index"
        class="group flex flex-col justify-center items-center gap-y-2"
        @click="changeColor(index)"
      >
        <div
          class="size-10 rounded-full group-hover:ring-4 transition ring-offset-0 ring-offset-base-100 group-hover:ring-offset-4"
          :class="[
            activeColor === index ? 'ring-success ring-6' : 'ring-base-content ring-2',
          ]"
          :style="`background-color: ${color.hex}`"
        />
        <span class="font-bold tracking-normal" :class="{ 'text-success': activeColor === index }">{{ color.name }}</span>
      </button>
    </div>
    <div class="sm:flex items-baseline gap-x-2 mb-6">
      <p class="text-2xl font-bold">
        Sélectionner une Taille
      </p>
      <span>
        <NuxtLink
          class="pretty-link"
          to="https://res.cloudinary.com/www-stanleystella-com/image/upload/v1633603833/Product%20Content/Product%20Sheets/fr_FR/STTU169.pdf"
        >
          Guide des tailles
        </NuxtLink>
      </span>
    </div>
    <div class="flex flex-wrap gap-4 mb-6">
      <button
        v-for="(size, index) in sizes"
        :key="index"
        class="btn w-28 text-2xl"
        :class="{ 'btn-success': activeSize === index, 'btn-outline': activeSize !== index }"
        @click="changeSize(index)"
      >
        {{ size }}
      </button>
    </div>
    <p class="text-7xl font-bold tracking-wide mb-8">
      {{ formatCurrency(price) }}
    </p>
    <div class="mb-16">
      <NuxtLink
        class="btn btn-accent uppercase btn-lg"
        :to="`/checkout/${activeSKU}`"
      >
        Acheter
      </NuxtLink>
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
