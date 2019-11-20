<template>
  <div class="wrapper txtcenter mbl">
    <svg-heartless-logo class="logo mbl bounceInDown" />
    <h1 class="main-title zoomIn">
      La communautée multigaming qui manque de skill&nbsp;!
    </h1>
  </div>
</template>

<script>
import SvgHeartlessLogo from '~/assets/heartlessgaming-logo-white.svg'

export default {
  components: {
    SvgHeartlessLogo
  }
}
</script>

<style>
.logo {
  max-width: 420px;
  filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.7));
}

.main-title {
  font-weight: 300;
  word-spacing: 5px;
  text-shadow: #000 0px 0px 10px, #000 0px 0px 10px;
}
</style>
