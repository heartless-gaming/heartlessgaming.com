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

<style lang="scss">
.btn {
  &--youtube,
  &--twitch {
    border-width: 3px;
    border-style: solid;
    transition: background-color 250ms linear;
    padding: 10px 20px;

    @media (min-width: 575px) {
      padding: 15px 35px;
    }

    > svg {
      width: initial;
      max-width: 100%;

      @media (min-width: 575px) {
        height: 40px;
      }
    }

    &:hover {
      background-color: transparent;
    }
  }

  &--youtube {
    border-color: #d42627;
    background-color: #d42627;

    > svg {
      height: 25px;
    }
  }

  &--twitch {
    border-color: #663398;
    background-color: #663398;

    > svg {
      height: 26px;
    }
  }
}
</style>
