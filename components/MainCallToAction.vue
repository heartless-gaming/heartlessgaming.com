<template>
  <section class="wrapper wrapper--small flex-around mbl">
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
  </section>
</template>

<script>
import SvgYoutubeLogo from '~/assets/youtube.svg'
import SvgTwitchLogo from '~/assets/twitch.svg'

export default {
  components: {
    SvgYoutubeLogo,
    SvgTwitchLogo
  }
}
</script>

<style></style>
