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
    <main class="wrapper">
      <h1 class="txtcenter">{{ title }}</h1>
      <p>(Içi il devrait y avoir un moyen de filtrer les sons par catégorie)</p>
      <div class="flex-around">
        <div v-for="audio in audios" :key="audio.id" class="pys">
          <button class="btn--soundboard" @click="playAudio($event)">
            {{ audio.name }}
          </button>
          <audio :src="audio.file"></audio>
        </div>
      </div>
      <p>Partager moi les fichiers audio sur le cloud plz</p>
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
