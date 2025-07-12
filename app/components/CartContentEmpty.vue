<script setup lang="ts">
const route = useRoute()

const shirtPage = '/t-shirt-logo-brode-coton'
</script>

<template>
  <div>
    <div class="grid gap-y-10 text-center">
      <span class="text-2xl">Votre panier est vide</span>
      <div>
        <label
          v-if="route.path === shirtPage"
          for="cart-drawer"
          aria-label="Fermer le panier"
          class="btn btn-wide uppercase btn-primary"
        >
          Voir le t-shirt
        </label>
        <NuxtLink
          v-else
          :to="shirtPage"
          class="btn btn-wide uppercase btn-primary"
        >
          Voir le T-shirt
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
