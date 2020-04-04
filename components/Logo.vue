<template>
  <svg-heartless-logo class="logo mbl bounceInDown" />
</template>

<script>
import SvgHeartlessLogo from '~/assets/heartlessgaming-logo-white.svg'

export default {
  components: {
    SvgHeartlessLogo,
  },
}
</script>

<style>
.logo {
  max-width: 420px;
  filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.7));
}
</style>
