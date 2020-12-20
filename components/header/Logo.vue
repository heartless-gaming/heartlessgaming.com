<template>
  <svg-heartless-logo class="logo-drop-shadow bounceInDown" />
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
  filter: drop-shadow(0 16px 10px rgba(0, 0, 0, 0.8));
}
</style>
