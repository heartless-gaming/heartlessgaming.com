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
    <main class="pt-10 pl-2 pr-2">
      <server-info />
      <last-youtube-videos />
      <vocal-war />
      <section class="max-w-2xl mx-auto mb-10 text-gray-200">
        <h2 class="mb-3 text-2xl">Soundboard Heartless Gaming</h2>
        <p class="mb-5">
          Retrouver les plus grands tubes comme <em>baserape</em> et
          <em>learn to play bitch</em>.
        </p>
        <nuxt-link
          to="soundboard"
          class="px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200"
        >
          <strong>Accéder au Soundboard</strong>
          <chevron-right class="w-2 inline align-middle fill-white" />
        </nuxt-link>
      </section>
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
import MainTitle from '~/components/MainTitle.vue'
import MainCallToAction from '~/components/MainCallToAction.vue'
import LastYoutubeVideos from '~/components/LastYoutubeVideos.vue'
import VocalWar from '~/components/VocalWar.vue'
import SocialNetworks from '~/components/SocialNetworks.vue'
import Credits from '~/components/Credits.vue'
import Quotes from '~/components/Quotes.vue'
import Mentra from '~/components/Mentra.vue'
import ChevronRight from '~/assets/chevron-right.svg?inline'

export default {
  components: {
    MainNav,
    Logo,
    MainTitle,
    MainCallToAction,
    LastYoutubeVideos,
    VocalWar,
    SocialNetworks,
    Credits,
    Quotes,
    Mentra,
    ChevronRight,
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
</style>
