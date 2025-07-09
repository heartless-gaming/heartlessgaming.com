<script setup lang="ts">
interface Props {
  productName: string
  price: string | number
}

const { productName, price } = defineProps<Props>()
</script>

<template>
  <div class="mb-6 text-center">
    <h1 class="mb-2 text-3xl font-bold">
      Passer commande
    </h1>
    <h2 class="text-xl">
      {{ productName }} - {{ toCurrency(price) }}
    </h2>
  </div>
</template>
