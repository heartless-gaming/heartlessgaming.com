<script setup lang="ts">
const checkoutStore = useCheckoutStore()
const { isContactFormValid } = storeToRefs(checkoutStore)
</script>

<template>
  <section>
    <CheckoutSubtitle>
      Information de livraison
    </CheckoutSubtitle>
    <div>
      <CheckoutShippingInfoForm v-show="!isContactFormValid" />
      <CheckoutShippingInfoFormPreview v-show="isContactFormValid" />
    </div>
  </section>
</template>
