<script setup lang="ts">
const store = useCartStore()
const { items, itemCount, total } = storeToRefs(store)
</script>

<template>
  <section>
    <CheckoutSubtitle>
      Résumé de la commande
    </CheckoutSubtitle>
    <div class="collapse-arrow collapse bg-base-300">
      <input type="checkbox" class="peer">
      <div
        class="collapse-title bg-base-200"
      >
        {{ itemCount }} articles - {{ toCurrency(total) }}
      </div>
      <div
        class="collapse-content bg-base-200"
      >
        <div class="divide-y divide-primary">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="
              flex gap-x-2 py-4
              sm:gap-x-6
            "
          >
            <NuxtPicture
              :src="`/img/shirt/embroidered-heartlessgaming-t-shirt-${toKebab(item.color)}.jpg`"
              sizes="100px"
              class="aspect-square size-25"
              width="100"
              height="100"
            />
            <div>
              <p class="mb-2 text-lg">
                {{ item.name }}
              </p>
              <div class="flex gap-x-6">
                <span>{{ item.color }}</span>
                <span class="font-extrabold">{{ item.size }}</span>
                <span>{{ toCurrency(item.price) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
