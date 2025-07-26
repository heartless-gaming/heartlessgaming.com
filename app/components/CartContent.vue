<script setup lang="ts">
const store = useCartStore()
const { items, isCartEmpty, total } = storeToRefs(store)
const { removeFromCart } = store

const isFetching = ref(false)

// errors are not handle here ¯\_(ツ)_/¯ LET ME SHIP
async function saveCart() {
  isFetching.value = true
  const response = await $fetch('/api/saveCart', { method: 'POST', body: {
    items: items.value,
    total: total.value,
  } })

  await navigateTo({ path: '/checkout', query: { cartId: response.id } })
}
</script>

<template>
  <div v-show="!isCartEmpty" class="flex h-full flex-col justify-between">
    <div class="grow divide-y divide-primary">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="flex gap-x-4 px-2 py-4"
      >
        <div class="grow">
          <p class="mb-2 text-lg">
            {{ item.name }}
          </p>
          <div class="flex gap-x-6">
            <span class="grow">{{ item.color }}</span>
            <span class="font-extrabold">{{ item.size }}</span>
            <span>{{ toCurrency(item.price) }}</span>
          </div>
        </div>
        <button
          class="
            grid size-8 place-content-center rounded-full transition-colors
            hover:bg-primary
          "
          @click="removeFromCart(index)"
        >
          <Icon
            name="material-symbols:close-rounded"
            size="1.8em"
          />
        </button>
      </div>
    </div>
    <div class="mb-6 flex items-center justify-between gap-x-2 text-xl">
      <span class="uppercase">Sous-total :</span><span class="font-bold">{{ toCurrency(total) }}</span>
    </div>
    <button
      class="btn btn-block uppercase btn-lg btn-primary"
      :disabled="isFetching"
      @click="saveCart"
    >
      <span>Paiement</span>
      <span v-show="isFetching" class="loading loading-xl loading-infinity" />
    </button>
  </div>
  <CartContentEmpty v-show="isCartEmpty" />
</template>
