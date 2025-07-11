<script setup lang="ts">
const { shirt } = defineProps(['shirt'])
console.log(shirt.name)

const formattedProductName = shirt.name.split(' /')[0]
</script>

<template>
  <div
    class="
      sticky top-0 z-10 mb-6 flex gap-x-8 bg-neutral/20 p-4 shadow
      shadow-neutral/60 backdrop-blur-lg
    "
  >
    <div class="grid grid-cols-2 gap-y-4">
      <h2 class="col-span-full text-xl">
        {{ formattedProductName }}
      </h2>
      <div class="flex items-center gap-x-4 text-lg">
        <span>{{ shirt.color }}</span>
        <span
          class="size-7 rounded-full ring-2 ring-white"
          :style="`background-color:${shirt.hex}`"
        />
      </div>
      <p class="flex items-center justify-end gap-x-4 text-lg">
        <span>Taille</span>
        <span class="text-4xl leading-7 font-extrabold">{{ shirt.size }}</span>
      </p>
    </div>
    <div class="flex grow items-center justify-center">
      <span class="text-center text-5xl font-bold">{{ toCurrency(shirt.price) }}</span>
    </div>
  </div>
</template>
