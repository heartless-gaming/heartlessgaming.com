<template>
  <div class="wrapper wrapper--small">
    <h2 class="mbm">Choisis ton camp !</h2>
    <div class="flex-around">
      <p>
        <a href="mumble://www.heartlessgaming.com/">
          <svg-mumble class="voip-icons" />
        </a>
      </p>
      <p>
        <a href="https://discord.gg/rWDzacA">
          <svg-discord class="voip-icons" />
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import SvgMumble from '~/assets/mumble.svg?inline'
import SvgDiscord from '~/assets/discord.svg?inline'

export default {
  components: {
    SvgMumble,
    SvgDiscord,
  },
}
</script>

<style lang="scss">
// .voip-icons {
//   width: 80px;
// }
</style>
