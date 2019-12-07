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
    <main class="flex-center">
      <div class="mtl mbl">
        <div class="autogrid wrapper mtl mbl">
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
    Mentra
  }
}
</script>

<style lang="scss"></style>
