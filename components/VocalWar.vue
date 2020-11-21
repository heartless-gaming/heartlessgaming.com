<template>
  <section class="mb-10 text-gray-200">
    <h2 class="mb-3 text-xl">Discution vocal</h2>
    <p class="mb-5">
      Il y a dans cette communauté une fracture. Choisis ton camp.
    </p>
    <div class="">
      <div class="flex items-center mb-5">
        <a class="mr-5" href="mumble://www.heartlessgaming.com/">
          <svg-mumble class="w-24 voip-icons" />
        </a>
        <div>
          <p class="mb-2">
            L'expérience original Heartless ce trouve sur Mumble ! On dors dans
            le channel AFK et on discute même quand on a pas envie de jouer.
          </p>
          <a class="underline" href="mumble://www.heartlessgaming.com/">
            <strong>Rejoindre le mumble</strong>
          </a>
        </div>
      </div>
      <div class="flex items-center">
        <a class="mr-5" href="https://discord.gg/rWDzacA">
          <svg-discord class="w-24 voip-icons" />
        </a>
        <div>
          <p class="mb-2">
            Ici c'est la modernité ! Alerte et information serveur automatique.
            Les joueurs ici sont sonvent un peu plus compétitif (CSGO, LOL..).
          </p>
          <a class="underline" href="mumble://www.heartlessgaming.com/">
            <strong>Rejoindre le discord</strong>
          </a>
        </div>
      </div>
    </div>
  </section>
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
