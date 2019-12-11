<template>
  <div class="main-grid">
    <header class="page-head flex-center">
      <main-nav />
      <div class="wrapper mtl">
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
      </div>
    </header>
    <main class="flex-center">
      <div class="wrapper">
        <h1 class="txtcenter">{{ title }}</h1>
        <p>
          (Içi il devrait y avoir un moyen de filtrer les sons par catégorie)
        </p>
        <div class="flex-around">
          <div v-for="audio in audios" :key="audio.id" class="pas">
            <button class="btn--soundboard" @click="playAudio($event)">
              {{ audio.name }}
            </button>
            <audio :src="audio.file"></audio>
          </div>
        </div>
      </div>
    </main>
    <footer class="page-footer">
      <div class="footer-grid wrapper">
        <credits />
        <quotes />
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
    Mentra
  },
  data: () => ({
    title: 'Soundboard',
    audios: [
      {
        id: 1,
        file: '/soundboard/lodr-c-skul.ogg',
        name: 'lodr c skull'
      },
      {
        id: 2,
        file: '/soundboard/learn-to-play-bitcheu.ogg',
        name: 'learn to play bitcheu'
      },
      {
        id: 3,
        file: '/soundboard/baserape.ogg',
        name: 'baserape'
      },
      {
        id: 4,
        file: '/soundboard/ceci-est-impossible.ogg',
        name: 'ceci est impossible'
      },
      {
        id: 5,
        file: '/soundboard/cornemuse.ogg',
        name: 'cornemuse'
      },
      {
        id: 6,
        file: '/soundboard/harmonica.ogg',
        name: 'harmonica'
      },
      {
        id: 6,
        file: '/soundboard/mouche-obese.ogg',
        name: 'mouche obèse'
      },
      {
        id: 7,
        file: '/soundboard/rire-demoniaque.ogg',
        name: 'rire démoniaque'
      },
      {
        id: 7,
        file: '/soundboard/sortez-de-chez-moi.ogg',
        name: 'sortez de chez moi'
      },
      {
        id: 8,
        file: '/soundboard/sortez-vous-les-doigt-du-cul.ogg',
        name: 'sortez vous les doigt du cul'
      }
    ]
  }),
  methods: {
    playAudio(event) {
      event.target.nextElementSibling.play()
    }
  },
  head: {
    title: 'Soundboard',
    titleTemplate: '%s - Heartless Gaming',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          "Collections des tubes populaires Heartless Gaming, comme 'lodr c skul', 'learn to play bitcheu' ou 'baserape'."
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://heartlessgaming.com/soundboard'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: `Soundboard - Heartless Gaming`
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "Collections des tubes populaires Heartless Gaming, comme 'lodr c skul', 'learn to play bitcheu' ou 'baserape'."
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://heartlessgaming.com/icon.png'
      }
    ]
  }
}
</script>

<style lang="scss">
.btn--soundboard {
  &:hover {
    background-color: #126c99;
  }
}
</style>
