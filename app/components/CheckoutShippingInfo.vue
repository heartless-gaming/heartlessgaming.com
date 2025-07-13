<script setup lang="ts">
const checkoutStore = useCheckoutStore()
const { isContactFormValid } = storeToRefs(checkoutStore)
</script>

<template>
  <div>
    <CheckoutSubtitle>
      Information de livraison
    </CheckoutSubtitle>
    <div>
      <CheckoutUserForm v-show="!isContactFormValid" />
      <CheckoutUserFormPreview v-show="isContactFormValid" />
    </div>
  </div>
</template>
