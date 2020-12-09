<template>
  <nav>
    <a
      class="absolute top-0 right-0 p-2 cloud-drop-shadow"
      href="https://www.heartlessgaming.com/cloud"
    >
      <svg-cloud class="w-16" />
    </a>
  </nav>
</template>

<script>
import SvgCloud from '~/assets/cloud.svg?inline'

export default {
  components: {
    SvgCloud,
  },
}
</script>

<style lang="scss">
.cloud-drop-shadow {
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.5));
}
</style>
