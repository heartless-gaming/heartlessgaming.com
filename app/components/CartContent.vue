<script setup lang="ts">
const store = useCartStore()
const { items, isCartEmpty } = storeToRefs(store)
const { removeFromCart } = store
</script>

<template>
  <div v-show="!isCartEmpty">
    <div v-for="(item, index) in items" :key="index" class="p-2">
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
      <p>{{ item.name }}</p>
      <p>{{ item.size }}</p>
      <p>{{ item.color }}</p>
    </div>
  </div>
  <CartContentEmpty v-show="isCartEmpty" />
</template>
