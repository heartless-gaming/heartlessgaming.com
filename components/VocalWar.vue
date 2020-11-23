<template>
  <section class="max-w-4xl mx-auto mb-10 text-gray-200">
    <h2 class="mb-3 text-2xl">Discution vocal</h2>
    <p class="mb-5">
      Il y a dans cette communauté une fracture.
      <strong class="uppercase">Choisis ton camp</strong>
    </p>
    <div class="md:flex">
      <div class="flex mb-8">
        <a class="mr-5" href="mumble://www.heartlessgaming.com/">
          <svg-mumble class="w-24 voip-icons" />
        </a>
        <div>
          <p class="mb-5">
            <strong>L'expérience original Heartless</strong> ce trouve sur
            Mumble&nbsp;! On dors dans le channel AFK et on discute même quand
            on a pas envie de jouer.
          </p>
          <a
            class="px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200"
            href="mumble://www.heartlessgaming.com/"
          >
            <strong>Rejoindre le mumble</strong>
            <chevron-right class="w-2 inline align-middle fill-white" />
          </a>
        </div>
      </div>
      <div class="flex">
        <a class="mr-5" href="https://discord.gg/rWDzacA">
          <svg-discord class="w-24 voip-icons" />
        </a>
        <div>
          <p class="mb-5">
            <strong>Ici c'est la modernité !</strong> Alerte et information
            serveur automatique. Les joueurs ici sont sonvent un peu plus
            compétitif (CSGO, LOL).
          </p>
          <a
            class="px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200"
            href="mumble://www.heartlessgaming.com/"
          >
            <strong>Rejoindre le discord</strong>
            <chevron-right class="w-2 inline align-middle fill-white" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgMumble from '~/assets/mumble.svg?inline'
import SvgDiscord from '~/assets/discord.svg?inline'
import ChevronRight from '~/assets/chevron-right.svg?inline'

export default {
  components: {
    SvgMumble,
    SvgDiscord,
    ChevronRight,
  },
}
</script>
