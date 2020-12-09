<template>
  <div class="bg-gray-900">
    <header
      class="mb-20 pt-16 sm:pt-12 pb-12 pr-2 pl-2 gray-gradient border-b-3 border-solid border-hlsred header-box-shadow"
    >
      <main-nav />
      <div class="">
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
        <h1
          class="mt-12 text-center text-4xl text-gray-200 zoomIn main-title-text-shadow soundboard-letter-spacing uppercase"
        >
          {{ title }}
        </h1>
      </div>
    </header>
    <main>
      <div
        class="relative mb-12 md:mb-20 flex justify-around flex-wrap max-w-2xl mx-auto"
      >
        <div v-for="audio in audios" :key="audio.id" class="p-4 inline-block">
          <button
            class="px-4 py-3 rounded-full text-gray-200 font-bold bg-hlsred hover:bg-hlsred-dark transition-all duration-200"
            @click="playAudio($event)"
          >
            {{ audio.name }}
          </button>
          <audio :src="audio.file"></audio>
        </div>
      </div>
    </main>
    <footer class="bg-gray-800 flow-root">
      <social-networks />
      <div class="max-w-2xl mx-auto px-2 mb-10 sm:flex">
        <quotes />
        <credits />
      </div>
      <mentra />
    </footer>
  </div>
</template>

<script>
import MainNav from '~/components/MainNav.vue'
import Logo from '~/components/Logo.vue'
import Credits from '~/components/Credits.vue'
import Quotes from '~/components/Quotes.vue'
import Mentra from '~/components/Mentra.vue'

export default {
  components: {
    MainNav,
    Logo,
    Credits,
    Quotes,
    Mentra,
  },
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
        id: 6,
        file: '/soundboard/mouche-obese.ogg',
        name: 'mouche obèse',
      },
      {
        id: 7,
        file: '/soundboard/rire-demoniaque.ogg',
        name: 'rire démoniaque',
      },
      {
        id: 7,
        file: '/soundboard/sortez-de-chez-moi.ogg',
        name: 'sortez de chez moi',
      },
      {
        id: 8,
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
            "Collections des tubes populaires Heartless Gaming, comme 'lodr c skul', 'learn to play bitcheu' ou 'baserape'.",
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
            "Collections des tubes populaires Heartless Gaming, comme 'lodr c skul', 'learn to play bitcheu' ou 'baserape'.",
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

<style>
.gray-gradient {
  background-image: radial-gradient(
    circle farthest-corner at 0% -40%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 65, 1) 75%
  );
}

.header-box-shadow {
  box-shadow: 0 17px 15px -8px rgba(0, 0, 0, 0.4);
}

.lady-trumpet-alt::before {
  @screen sm {
    content: '';
    position: absolute;
    width: 110px;
    height: 150%;
    left: 0;
    top: 0;
    transform: scaleX(-1);
    background-position: 100%;
    background-image: url('~@/assets/lady-trumpet.svg');
    background-repeat: no-repeat;
    animation: ladytrumpet 3s ease infinite;
  }
}

@-webkit-keyframes ladytrumpet {
  0%,
  100% {
    transform: scale(1), rotate(-2deg);
  }
  50% {
    transform: scale(1.2), rotate(1deg);
  }
}

.soundboard-letter-spacing {
  letter-spacing: 0.5rem;
}
</style>
