<template>
  <div class="main-grid">
    <header class="page-head--masthead flex-center">
      <main-nav />
      <div class="mtl">
        <logo-and-title />
        <main-call-to-action />
      </div>
    </header>
    <main class="flex-around">
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
import LogoAndTitle from '~/components/LogoAndTitle.vue'
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
    LogoAndTitle,
    MainCallToAction,
    LastYoutubeVideos,
    VocalWar,
    ActiveServers,
    Credits,
    Quotes,
    Mentra
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
            "Heartless Gaming est une communauté qui s'anime autour de différant jeux vidéos. Retrouvez, nos aventures sur Youtube et twitch. Créer en 2010 sur Minecraft, elle propose multiple serveurs de jeux public et privé en fonction de l'humeur des joueurs."
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
  box-shadow: 0 17px 15px -8px rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    height: 50vh;
  }
}

.page-footer {
  position: relative;
  background-color: #222327;
  padding-top: 40px;
  padding-bottom: 20px;
  clip-path: polygon(0 calc(0% + 4vw), 100% 0, 100% 100%, 0 100%);

  @media (min-width: 576px) {
    padding-top: 70px;
  }

  @media (min-width: 992px) {
    padding-top: 120px;
  }
}
</style>
