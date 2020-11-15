<template>
  <svg-heartless-logo class="logo mbl mx-auto bounceInDown" />
</template>

<script>
import SvgHeartlessLogo from '~/assets/heartlessgaming-logo-white.svg?inline'

export default {
  components: {
    SvgHeartlessLogo,
  },
}
</script>

<style>
.logo {
  max-width: 420px;
  filter: drop-shadow(0 8px 10px rgba(0, 0, 0, 0.7));
}
</style>
