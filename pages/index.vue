<template>
  <div class="main-grid">
    <header class="page-head--masthead flex-center">
      <div class="mtl">
        <logo-and-title />
        <main-call-to-action />
      </div>
    </header>
    <main>
      <div class="autogrid wrapper mtl mbl">
        <last-youtube-videos />
        <vocal-war />
      </div>
    </main>
    <footer>
      <div class="footer-grid">
        <credits />
        <quotes />
      </div>
    </footer>
  </div>
</template>

<script>
import LogoAndTitle from '~/components/LogoAndTitle.vue'
import MainCallToAction from '~/components/MainCallToAction.vue'
import LastYoutubeVideos from '~/components/LastYoutubeVideos.vue'
import VocalWar from '~/components/VocalWar.vue'
import Credits from '~/components/Credits.vue'
import Quotes from '~/components/Quotes.vue'

export default {
  components: {
    LogoAndTitle,
    MainCallToAction,
    LastYoutubeVideos,
    VocalWar,
    Credits,
    Quotes
  },
  head() {
    return {
      title: 'Heartless Gaming',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content:
            "Heartless Gaming est une communauté qui s'anime autour de différant jeux vidéos. Créer en 2010 sur Minecraft, elle propose multiple serveurs de jeux public et privé en fonction de l'humeur des joueurs. Retrouvez, nos aventures sur Youtube et twitch."
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-head--masthead {
  background: #0f2027;
  background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
  border-bottom: 3px #e52f00 solid;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);

  @media (min-width: 768px) {
    height: 50vh;
  }
}
</style>
