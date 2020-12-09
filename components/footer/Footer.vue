<template>
  <footer
    class="bg-gray-800 flow-root border-t-3 border-solid border-hlsred footer-box-shadow"
  >
    <social-networks />
    <div class="max-w-2xl mx-auto px-2 mb-10 sm:flex">
      <quotes />
      <credits />
    </div>
    <mentra />
  </footer>
</template>

<script>
import SocialNetworks from '~/components/footer/SocialNetworks.vue'
import Credits from '~/components/footer/Credits.vue'
import Quotes from '~/components/footer/Quotes.vue'
import Mentra from '~/components/footer/Mentra.vue'

export default {
  components: {
    SocialNetworks,
    Credits,
    Quotes,
    Mentra,
  },
}
</script>

<style>
.footer-box-shadow {
  box-shadow: inset 0 17px 15px -8px rgba(0, 0, 0, 0.65);
}
</style>
