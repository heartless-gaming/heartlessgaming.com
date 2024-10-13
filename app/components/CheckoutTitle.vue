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
    <div class="flex flex-col text-lg sm:flex-row">
      <span>{{ productName }} - {{ toCurrency(price) }}</span>
    </div>
  </div>
</template>
