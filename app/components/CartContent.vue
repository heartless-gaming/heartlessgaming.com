<script setup lang="ts">
const store = useCartStore()
const { items, isCartEmpty, total } = storeToRefs(store)
const { removeFromCart } = store
</script>

<template>
  <div v-show="!isCartEmpty" class="flex h-full flex-col justify-between">
    <div class="grow divide-y divide-primary">
      <div v-for="(item, index) in items" :key="index" class="px-2 py-4">
        <button
          class="
            float-right ml-2 grid size-8 place-content-center rounded-full
            transition-colors
            hover:bg-primary
          "
          @click="removeFromCart(index)"
        >
          <Icon
            name="material-symbols:close-rounded"
            size="1.8em"
          />
        </button>
        <p class="mb-2 text-lg">
          {{ item.name }}
        </p>
        <div class="flex gap-x-6">
          <span class="grow">{{ item.color }}</span>
          <span class="font-extrabold">{{ item.size }}</span>
          <span>{{ toCurrency(item.price) }}</span>
        </div>
      </div>
    </div>
    <div class="mb-6 flex items-center justify-between gap-x-2 text-xl">
      <span class="uppercase">Sous-total :</span><span class="font-bold">{{ toCurrency(total) }}</span>
    </div>
    <NuxtLink
      class="btn btn-block uppercase btn-lg btn-primary"
      to="/checkout"
    >
      Paiement
    </NuxtLink>
  </div>
  <CartContentEmpty v-show="isCartEmpty" />
</template>
