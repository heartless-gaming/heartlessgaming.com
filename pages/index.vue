<template>
  <div class="main-grid">
    <header class="page-head--masthead flex-center">
      <div>
        <div class="wrapper txtcenter">
          <svg-heartless-logo class="logo mbl bounceInDown" />
          <h1 class="subtitle mbl zoomIn">
            La communautée multigaming avec 0 skill&nbsp;!
          </h1>
        </div>
        <div class="wrapper wrapper--small flex-around">
          <a
            class="btn btn--big btn--youtube"
            href="https://www.youtube.com/channel/UCvItaPYGwf5bI7HelUiu14w"
          >
            <svg-youtube-logo />
          </a>
          <a
            class="btn btn--big btn--twitch"
            href="https://www.twitch.tv/heartlessgaming_live"
          >
            <svg-twitch-logo />
          </a>
        </div>
      </div>
    </header>
    <main></main>
    <footer>
      <div>
        <p>Logo by Markus</p>
        <p>
          <a href="https://github.com/heartless-gaming/heartlessgaming.com">
            Code source
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import SvgHeartlessLogo from '~/assets/heartlessgaming-logo-white.svg'
import SvgYoutubeLogo from '~/assets/youtube.svg'
import SvgTwitchLogo from '~/assets/twitch.svg'

export default {
  components: {
    SvgHeartlessLogo,
    SvgYoutubeLogo,
    SvgTwitchLogo
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
  height: 70vh;
  background: #0f2027;
  background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
  border-bottom: 3px #e52f00 solid;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
}
.logo {
  max-width: 420px;
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

.subtitle {
  font-weight: 300;
  word-spacing: 5px;
  text-shadow: #000 0px 0px 10px;
}
</style>
