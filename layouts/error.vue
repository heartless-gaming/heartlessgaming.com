<template>
  <main class="bg-gray-900 flow-root">
    <div class="max-w-lg mx-auto my-24 sm:my-48 text-center text-gray-200">
      <h2 v-if="statusCode === 404" class="text-6xl font-bold mb-5">404</h2>
      <p v-else class="text-6xl font-bold mb-5">500</p>
      <NuxtLink
        to="/"
        class="inline-block bg-hlsred py-3 px-6 rounded hover:bg-hlsred-dark transition-all duration-200 uppercase shadow-lg"
      >
        Retour à la page d'accueil
      </NuxtLink>
    </div>
  </main>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: 'Erreur',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0',
        },
      ],
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
  },
}
</script>
