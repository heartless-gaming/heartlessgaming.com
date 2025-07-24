<script setup lang="ts">
const { shippingRates } = defineProps(['shippingRates'])
const pickedShippingRate = useStatePickedShippingRates()
const shippingRatePrice = useStateShippingRatesPrice()

function formatShippingRateName(shippingRateName: string = '') {
  let str = shippingRateName.split('(')[1]
  str = str.slice(0, -2) // trim the last last 2 characters of the string

  return str
}

function formatRateType(rateType: string = '') {
  switch (rateType) {
    case 'STANDARD':
      break
    case 'PRINTFUL_FAST':
      rateType = 'EXPRESS'
      break
    case 'STANDARD_CARBON_OFFSET':
      rateType = 'CARBON OFFSET'
      break
  }

  return rateType
}

function updateShippingRate(shippingRate) {
  console.log(`topkek : ${shippingRate}`)
  pickedShippingRate.value = shippingRate.id
  shippingRatePrice.value = Number(shippingRate.rate)
}
</script>

<template>
  <div class="grid gap-y-4">
    <button
      v-for="shippingRate in shippingRates"
      :key="shippingRate.id"
      class="
        group btn btn-block px-2 py-2 text-left text-base btn-ghost btn-outline
        btn-xl btn-primary
        sm:hidden
      "
      :class="{ 'btn-active': pickedShippingRate === shippingRate.id }"
      @click="updateShippingRate(shippingRate)"
    >
      <div class="w-full">
        <div class="flex justify-between">
          <span>{{ formatRateType(shippingRate.id) }}</span>
          <span class="text-right font-bold">{{ toCurrency(shippingRate.rate) }}</span>
        </div>
        <div class="col-span-8">
          {{ formatShippingRateName(shippingRate.name) }}
        </div>
      </div>
    </button>
    <button
      v-for="shippingRate in shippingRates"
      :key="shippingRate.id"
      class="
        group btn hidden btn-block grid-cols-12 justify-between py-2 text-left
        text-base btn-ghost btn-outline btn-xl btn-primary
        sm:grid
      "
      :class="{ 'btn-active': pickedShippingRate === shippingRate.id }"
      @click="updateShippingRate(shippingRate)"
    >
      <span class="col-span-3">{{ formatRateType(shippingRate.id) }}</span>
      <span class="col-span-7">{{ formatShippingRateName(shippingRate.name) }}</span>
      <span class="col-span-2 text-right text-2xl font-bold">{{ toCurrency(shippingRate.rate) }}</span>
    </button>
  </div>
</template>
