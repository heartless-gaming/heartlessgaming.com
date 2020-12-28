<template>
  <main class="bg-gray-900 flow-root">
    <div class="max-w-xl mx-auto px-2 mb-14">
      <div
        v-for="article of articles"
        :key="article.slug"
        class="py-3 px-6 bg-gray-200 text-gray-900 rounded"
      >
        <h2 class="mb-1 text-2xl">{{ article.title }}</h2>
        <p class="mb-3">{{ article.description }}</p>
        <NuxtLink
          class="inline-block px-4 py-2 rounded text-gray-200 bg-hlsred hover:bg-hlsred-dark transition-all duration-200 md-shadow"
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        >
          <strong>Lire</strong>
          <chevron-right class="w-2 inline align-middle fill-white" />
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script>
import ChevronRight from '~/assets/chevron-right.svg?inline'

export default {
  components: {
    ChevronRight,
  },
  layout: 'blog',
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return { articles }
  },
  data: () => ({
    title: 'Blog',
  }),
  head() {
    return {
      title: 'Blog',
      titleTemplate: '%s - Heartless Gaming',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Retrouver toutes les dernières informations sur la communauté Heartless Gaming.',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://heartlessgaming.com/blog',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.title} - Heartless Gaming`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Retrouver toutes les dernières informations sur la communauté Heartless Gaming.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://heartlessgaming.com/icon.png',
        },
      ],
    }
  },
}
</script>
