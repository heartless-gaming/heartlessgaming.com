<template>
  <svg-heartless-logo class="mx-w-sm logo-drop-shadow bounceInDown" />
</template>

<script>
import SvgHeartlessLogo from '~/assets/heartlessgaming-logo-white.svg?inline'

export default {
  components: {
    SvgHeartlessLogo,
  },
}
</script>

<style lang="scss">
.logo-drop-shadow {
  filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.7));
}

// .logo {
//   max-width: 420px;
//   filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.7));
// }
</style>
