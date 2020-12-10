<template>
  <section v-if="videos.length > 0" class="relative mb-20 -skewed">
    <div class="px-2 md:px-6">
      <h2
        class="relative max-w-2xl lg:max-w-5xl mx-auto mb-5 text-2xl text-gray-200 fadeInDown font-grandstander"
      >
        Les dernières vidéos Youtube
      </h2>
      <magic-grid
        wrapper="max-w-6xl mx-auto"
        :max-cols="3"
        :max-col-width="320"
      >
        <a
          v-for="(video, index) in videos"
          :key="index"
          class="p-2 bg-white shadow-lg inline-block rounded-xl transform hover:scale-105 transition-youtubecard backface-hidden"
          :href="video.url"
        >
          <img
            class="rounded-xl"
            :src="video.thumbnail.url"
            :width="video.thumbnail.width"
            :height="video.thumbnail.height"
            loading="lazy"
          />
          <h3 class="text-lg text-gray-900">
            <strong>{{ video.title }}</strong>
          </h3>
          <p class="text-sm text-gray-700">{{ video.duration }}</p>
        </a>
      </magic-grid>
    </div>
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
    const fetchYTvidURL = `${baseURL}/api/getYT`
    this.videos = await fetch(fetchYTvidURL).then((res) => res.json())
  },
}
</script>

<style>
.-skewed::before {
  content: '';
  position: absolute;
  background: theme('colors.gray.800');
  width: 100%;
  height: 90%;
  transform: skewY(-8deg);
}

.transition-youtubecard {
  transition: all 0.15s ease !important;
}

.backface-hidden {
  backface-visibility: hidden;
}
</style>
