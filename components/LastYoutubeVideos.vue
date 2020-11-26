<template>
  <section v-if="videos.length > 0" class="mb-10">
    <h2 class="max-w-5xl mx-auto mb-3 text-2xl text-gray-200">
      Les dernières vidéos Youtube
    </h2>
    <magic-grid wrapper="max-w-6xl mx-auto" :maxCols="3" :max-col-width="320">
      <a
        v-for="(video, index) in videos"
        :key="index"
        class="p-2 bg-white shadow-lg rounded-xl block transform hover:scale-110 transition-youtubecard"
        :href="video.url"
      >
        <img
          class="rounded-xl"
          :src="video.thumbnail.url"
          :width="video.thumbnail.width"
          :height="video.thumbnail.height"
          loading="lazy"
        />
        <p class="text-lg text-gray-900">
          <strong>{{ video.title }}</strong>
        </p>
        <p class="text-sm text-gray-700">{{ video.duration }}</p>
      </a>
    </magic-grid>
  </section>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        // {
        //   url: 'https://www.youtube.com/watch?v=cy4YUYAopcQ',
        //   title: "Pour l'amour de l'entertainment (CORONA LAN)",
        //   thumbnail: {
        //     url: 'https://i.ytimg.com/vi/cy4YUYAopcQ/mqdefault.jpg',
        //     width: 320,
        //     height: 180
        //   },
        //   duration: '14 minutes'
        // }
      ],
    }
  },
  async fetch() {
    const baseURL = this.$nuxt.context.$config.baseURL
    const fetchYTvidURL = `${baseURL}/api/getlastYTvid`
    this.videos = await fetch(fetchYTvidURL).then((res) => res.json())
  },
}
</script>

<style>
.transition-youtubecard {
  transition: all 0.2s ease !important;
}
</style>
