<template>
  <div class="bg-gray-900 flow-root">
    <div
      class="max-w-prose mx-auto mb-20 px-2 sm:px-6 prose prose-lg md:prose-xl"
    >
      <h1 class="font-grandstander text-center page-title-text-shadow appear">
        {{ article.title }}
      </h1>
      <img
        :src="require(`~/static/img/articles/${article.img}`)"
        :alt="article.alt"
        class="rounded-lg thicc-shadow"
      />
      <p class="mb-2">
        <small class="flex items-center">
          {{ formatDate(article.createdAt) }}
          <svg-stopwatch class="w-6 mx-1 inline" />
          {{ article.readTime }}
        </small>
      </p>
      <article>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>
<script>
import SvgStopwatch from '~/assets/svg/stopwatch.svg?inline'

export default {
  components: {
    SvgStopwatch,
  },
  layout: 'blog',
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
