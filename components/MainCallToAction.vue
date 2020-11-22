<template>
  <section class="max-w-xl mx-auto flex justify-around appear">
    <a
      class="px-5 py-3 sm:px-8 sm:py-4 border-3 border-solid border-ytred bg-ytred rounded transition-all duration-200 hover:bg-transparent motion-reduce:transition-none"
      href="https://www.youtube.com/channel/UCvItaPYGwf5bI7HelUiu14w"
    >
      <svg-youtube-logo class="w-24 sm:w-32" />
    </a>
    <a
      class="px-5 py-3 sm:px-8 sm:py-4 border-3 border-solid border-ttvpurple bg-ttvpurple rounded transition-all duration-200 hover:bg-transparent motion-reduce:transition-none"
      href="https://www.twitch.tv/heartlessgaming_live"
    >
      <svg-twitch-logo class="w-24 sm:w-32" />
    </a>
  </section>
</template>

<script>
import SvgYoutubeLogo from '~/assets/youtube.svg?inline'
import SvgTwitchLogo from '~/assets/twitch.svg?inline'

export default {
  components: {
    SvgYoutubeLogo,
    SvgTwitchLogo,
  },
}
</script>
