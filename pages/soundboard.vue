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
      <button class="btn">lodr c skul</button>
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
            'Objectifs, informations et varialbles de configuration du serveur de jeu ARK: Survival Evolved Heartless Gaming.'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://heartlessgaming.com/ark-information-serveur'
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
            'Objectifs, informations et varialbles de configuration du serveur de jeu ARK: Survival Evolved Heartless Gaming.'
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

<style lang="scss"></style>
