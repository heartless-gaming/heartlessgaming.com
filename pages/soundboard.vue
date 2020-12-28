<template>
  <main class="bg-gray-900 flow-root">
    <section
      class="relative md:mt-6 mb-24 md:mb-28 flex justify-between flex-wrap max-w-2xl mx-auto"
    >
      <div
        v-for="audio in audios"
        :key="audio.id"
        class="px-2 py-4 md:px-0 inline-block"
      >
        <button
          class="px-4 py-3 rounded-full text-gray-200 font-bold bg-hlsred hover:bg-hlsred-dark transition-all duration-200 md-shadow"
          @click="playAudio($event)"
        >
          {{ audio.name }}
        </button>
        <audio :src="audio.file"></audio>
      </div>
    </section>
    <section
      class="relative max-w-2xl mx-auto mb-24 md:mb-48 px-2 text-gray-200 lady-trumpet-soundboard"
    >
      <h2
        class="mb-3 text-3xl sm:text-4xl md:text-5xl font-grandstander page-title-text-shadow js-animateEntrence"
      >
        Installer l'application
      </h2>
      <div class="max-w-lg">
        <p class="mb-3 js-animateEntrence">
          Cliquer sur le menu de votre navigateur et choisissez l'option
          "ajouter à l'écran d'accueil".
        </p>
        <p class="mb-3 js-animateEntrence">
          Félicitations ! Le site Heartless est installé sur votre écran
          d'accueil et disponible sur votre smartphone
          <strong>même en mode hors ligne</strong>.
        </p>
        <p class="js-animateEntrence">
          Un grand pouvoir implique de grande responsabilité utilisez le
          soundboard avec modération
          <small class="text-gray-400">(ou pas)</small>.
        </p>
      </div>
    </section>
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
  mounted() {
    const elems = document.querySelectorAll('.js-animateEntrence')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('animate-entrence')
          observer.unobserve(entry.target)
        }
      })
    })

    elems.forEach((elem) => {
      observer.observe(elem)
    })
  },
  methods: {
    playAudio(event) {
      event.target.nextElementSibling.play()
    },
  },
}
</script>

<style>
.lady-trumpet-soundboard::after {
  @screen sm {
    content: '';
    position: absolute;
    width: 110px;
    height: 150%;
    right: 2%;
    top: -20%;
    background-position: 100%;
    background-image: url('~@/assets/svg/lady-trumpet.svg');
    background-repeat: no-repeat;
    animation: ladytrumpet 3s ease infinite;
  }
}

@keyframes ladytrumpet {
  0%,
  100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(1deg);
  }
}

.lady-trumpet::after {
  @screen sm {
    left: initial;
    right: 3%;
  }
}
</style>
