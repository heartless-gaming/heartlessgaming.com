<template>
  <div class="main-grid">
    <header class="page-head flex-center">
      <main-nav />
      <div class="mtl">
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
      </div>
    </header>
    <main class="wrapper">
      <h1 class="txtcenter">{{ title }}</h1>
      <p>Içi un moyen de filtrer les sons par catégorie</p>
      <button class="btn--soundboard">lodr c skul</button>
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
  data() {
    return {
      title: 'Soundboard'
    }
  },
  head() {
    return {
      title: `${this.title} - Heartless Gaming`,
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
          content: `${this.title} - Heartless Gaming`
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
}
</script>

<style lang="scss">
.btn--soundboard {
  &:hover {
    background-color: #126c99;
  }
}
</style>
