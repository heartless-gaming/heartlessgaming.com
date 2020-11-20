<template>
  <div class="main-grid bg-gray-900">
    <header
      class="pt-16 sm:pt-12 pb-12 pr-2 pl-2 gray-gradient border-b-3 border-solid border-hlsred header-box-shadow"
    >
      <main-nav />
      <div class="text-center">
        <div class="">
          <logo class="mb-10" />
          <main-title />
        </div>
        <main-call-to-action />
      </div>
    </header>
    <main class="pt-10 flex-center mtl">
      <div class="mtl mbl">
        <server-info />
        <div class="flex-center mbl">
          <div class="card pyl">
            <h2 class="">Le soundboard est (presque) arrivé !</h2>
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
    SvgArrow,
  },
}
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

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

/*
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
*/
</style>
