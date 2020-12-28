<template>
  <div class="bg-gray-900 flow-root">
    <div
      class="max-w-prose mx-auto mb-20 px-2 sm:px-6 prose prose-lg md:prose-xl"
    >
      <p>
        <small>
          Dernière mise à jour : {{ formatDate(article.updatedAt) }}
        </small>
      </p>
      <nav class="border-3 border-gray-200 px-10 max-w-xs hidden">
        <p v-for="link of article.toc" :key="link.id">
          <NuxtLink :to="`#${link.id}`" class="underline">
            {{ link.text }}
          </NuxtLink>
        </p>
      </nav>
      <article>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('fr', options)
    },
  },
}
</script>
