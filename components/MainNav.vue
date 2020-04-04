<template>
  <nav>
    <a class="cloud-access" href="https://www.heartlessgaming.com/cloud">
      <svg-cloud />
    </a>
  </nav>
</template>

<script>
import SvgCloud from '~/assets/cloud.svg'

export default {
  components: {
    SvgCloud,
  },
}
</script>

<style lang="scss">
.cloud-access {
  display: none;
  position: absolute;
  top: 15px;
  right: 15px;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.5));

  > svg {
    width: 60px;
  }

  @media (min-width: 576px) {
    display: block;
  }
}
</style>
