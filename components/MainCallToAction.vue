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
import SvgYoutubeLogo from '~/assets/youtube.svg?inline'
import SvgTwitchLogo from '~/assets/twitch.svg?inline'

export default {
  components: {
    SvgYoutubeLogo,
    SvgTwitchLogo,
  },
}
</script>

<style lang="scss">
// .btn {
//   &--youtube {
//     border-color: #d42627;
//     background-color: #d42627;

//     > svg {
//       height: 25px;
//     }
//   }

//   &--twitch {
//     border-color: #663398;
//     background-color: #663398;

//     > svg {
//       height: 26px;
//     }
//   }

//   &--youtube,
//   &--twitch {
//     border-width: 3px;
//     border-style: solid;
//     box-shadow: 0 7px 14px rgba(50, 50, 93, 0.7), 0 3px 6px rgba(0, 0, 0, 0.2);
//     transition: background-color 250ms linear;
//     padding: 10px 20px;

//     @media (min-width: 575px) {
//       padding: 15px 35px;
//     }

//     > svg {
//       width: initial;
//       max-width: 100%;

//       @media (min-width: 575px) {
//         height: 40px;
//       }
//     }

//     &:hover {
//       background-color: transparent;
//     }
//   }
// }
</style>
