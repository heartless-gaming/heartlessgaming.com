<template>
  <main class="bg-gray-900 flow-root">
    <div
      class="relative md:mt-6 mb-12 md:mb-20 flex justify-between flex-wrap max-w-2xl mx-auto"
    >
      <div v-for="audio in audios" :key="audio.id" class="p-4 inline-block">
        <button
          class="px-4 py-3 rounded-full text-gray-200 font-bold bg-hlsred hover:bg-hlsred-dark transition-all duration-200 md-shadow"
          @click="playAudio($event)"
        >
          {{ audio.name }}
        </button>
        <audio :src="audio.file"></audio>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    title: 'Soundboard',
    audios: [
      {
        id: 1,
        file: '/soundboard/lodr-c-skul.ogg',
        name: 'lodr c skull',
      },
      {
        id: 2,
        file: '/soundboard/learn-to-play-bitcheu.ogg',
        name: 'learn to play bitcheu',
      },
      {
        id: 3,
        file: '/soundboard/baserape.ogg',
        name: 'baserape',
      },
      {
        id: 4,
        file: '/soundboard/ceci-est-impossible.ogg',
        name: 'ceci est impossible',
      },
      {
        id: 5,
        file: '/soundboard/cornemuse.ogg',
        name: 'cornemuse',
      },
      {
        id: 6,
        file: '/soundboard/harmonica.ogg',
        name: 'harmonica',
      },
      {
        id: 7,
        file: '/soundboard/mouche-obese.ogg',
        name: 'mouche obèse',
      },
      {
        id: 8,
        file: '/soundboard/rire-demoniaque.ogg',
        name: 'rire démoniaque',
      },
      {
        id: 9,
        file: '/soundboard/sortez-de-chez-moi.ogg',
        name: 'sortez de chez moi',
      },
      {
        id: 10,
        file: '/soundboard/sortez-vous-les-doigt-du-cul.ogg',
        name: 'sortez vous les doigt du cul',
      },
    ],
  }),
  head() {
    return {
      title: 'Soundboard',
      titleTemplate: '%s - Heartless Gaming',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Collections des tubes populaires Heartless Gaming comme : 'learn to play bitcheu' ou 'baserape'.",
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://heartlessgaming.com/soundboard',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Soundboard - Heartless Gaming`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            "Collections des tubes populaires Heartless Gaming comme : 'learn to play bitcheu' ou 'baserape'.",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://heartlessgaming.com/icon.png',
        },
      ],
    }
  },
  methods: {
    playAudio(event) {
      event.target.nextElementSibling.play()
    },
  },
}
</script>
