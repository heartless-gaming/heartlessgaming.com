<template>
  <nav
    class="max-w-xs sm:max-w-lg mb-3 mx-auto flex justify-between items-center bounceInDown"
  >
    <a
      class="block p-2 cloud-drop-shadow"
      href="https://heartlessgaming.com/cloud"
    >
      <svg-cloud
        class="w-12 sm:w-16 fill-current text-hlsred-light hover:text-hlsred transition-all duration-150"
      />
    </a>
    <NuxtLink to="/donation" class="block p-2 cloud-drop-shadow">
      <svg-donation
        class="w-12 sm:w-16 fill-current text-hlsred-light hover:text-hlsred transition-all duration-150"
      />
    </NuxtLink>
    <a
      class="block p-2 cloud-drop-shadow"
      href="https://heartlessgaming.com/mcmap/#/-162/64/-602/-4/LookAround1005%20-%20overworld/LookAround1005day"
    >
      <svg-minecraft-map
        class="w-12 sm:w-16 fill-current text-hlsred-light hover:text-hlsred transition-all duration-150"
      />
    </a>
    <NuxtLink to="/soundboard" class="block p-2 cloud-drop-shadow">
      <svg-trumpet
        class="w-12 sm:w-16 transform -rotate-45 fill-current text-hlsred-light hover:text-hlsred transition-all duration-150"
      />
    </NuxtLink>
  </nav>
</template>

<script>
import SvgCloud from '~/assets/svg/cloud.svg?inline'
import SvgDonation from '~/assets/svg/donation.svg?inline'
import SvgMinecraftMap from '~/assets/svg/mcmap.svg?inline'
import SvgTrumpet from '~/assets/svg/trumpet.svg?inline'

export default {
  components: {
    SvgCloud,
    SvgDonation,
    SvgMinecraftMap,
    SvgTrumpet,
  },
}
</script>

<style>
.cloud-drop-shadow {
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.5));
}
</style>
