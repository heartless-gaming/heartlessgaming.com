<template>
  <div class="main-grid">
    <header class="page-head--masthead flex-center">
      <div class="wrapper txtcenter">
        <svg-heartless-logo class="logo mbl" />
        <h1 class="subtitle">
          La communautée multigaming avec 0 skill
        </h1>
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

export default {
  components: {
    SvgHeartlessLogo
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
  height: 60vh;
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
  padding-bottom: 15px;
}
</style>
