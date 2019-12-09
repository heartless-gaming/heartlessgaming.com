<template>
  <div class="main-grid">
    <header class="page-head page-head--masthead flex-center">
      <main-nav />
      <div class="mtl">
        <div class="wrapper mtl txtcenter">
          <logo />
          <main-title />
        </div>
        <main-call-to-action />
      </div>
    </header>
    <main class="flex-center mtl">
      <div class="mtl mbl">
        <div class="flex-center mbl">
          <div class="card pyl">
            <h2 class="mt0">Le soundboard est (presque) arrivé !</h2>
            <nuxt-link to="soundboard" class="btn">
              <strong>Accéder au Soundboard</strong><svg-arrow class="pls" />
            </nuxt-link>
          </div>
        </div>
        <div class="autogrid wrapper mbl">
          <last-youtube-videos />
          <vocal-war />
        </div>
        <active-servers />
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
import MainTitle from '~/components/MainTitle.vue'
import MainCallToAction from '~/components/MainCallToAction.vue'
import LastYoutubeVideos from '~/components/LastYoutubeVideos.vue'
import VocalWar from '~/components/VocalWar.vue'
import ActiveServers from '~/components/ActiveServers.vue'
import Credits from '~/components/Credits.vue'
import Quotes from '~/components/Quotes.vue'
import Mentra from '~/components/Mentra.vue'
import SvgArrow from '~/assets/arrow.svg'

export default {
  components: {
    MainNav,
    Logo,
    MainTitle,
    MainCallToAction,
    LastYoutubeVideos,
    VocalWar,
    ActiveServers,
    Credits,
    Quotes,
    Mentra,
    SvgArrow
  }
}
</script>

<style lang="scss"></style>
