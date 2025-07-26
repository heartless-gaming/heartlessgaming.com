<script setup lang="ts">
const checkoutStore = useCheckoutStore()
const { isContactFormValid } = storeToRefs(checkoutStore)

const pickedShippingRates = useStatePickedShippingRates()
const shippingRatesPrice = useStateShippingRatesPrice()
const formData = useStateCheckoutShippingInfoFormData()
const { firstName, lastName, address, postalCode, city, country, email, phone } = toRefs(formData.value)

function updateForm() {
  isContactFormValid.value = false
  pickedShippingRates.value = ''
  shippingRatesPrice.value = 0
  console.log(shippingRatesPrice.value)
}
</script>

<template>
  <button
    class="
      group btn flex h-auto max-w-sm items-start justify-start py-2 text-left
      text-base btn-outline
    "
    @click="updateForm"
  >
    <div class="w-full">
      <div class="grid w-full gap-y-1">
        <div class="grid grid-cols-6 gap-x-4">
          <div class="col-span-4">
            {{ firstName }} {{ lastName }}
          </div>
          <div class="col-span-2 flex items-center justify-end gap-x-2">
            <span
              class="group-hover:underline"
            >modifier</span>
            <Icon size="1.3em" name="mdi:account-edit-outline" />
          </div>
        </div>
        <div>{{ address }}</div>
        <div class="grid grid-cols-6 gap-x-2">
          <span>{{ postalCode }}</span>
          <span class="col-span-3">{{ city }}</span>
          <span class="col-span-2">{{ country }}</span>
        </div>
        <div
          class="
            grid gap-x-2
            sm:grid-cols-6
          "
        >
          <span class="col-span-4">{{ email }}</span>
          <span class="col-span-2">{{ phone }}</span>
        </div>
      </div>
    </div>
  </button>
</template>
