<template>
  <section class="relative max-w-4xl mx-auto mb-24 md:mb-48 text-gray-200">
    <div class="px-2 md:px-6">
      <h2
        class="mb-3 text-3xl md:text-5xl font-grandstander page-title-text-shadow js-animateEntrence"
      >
        Discussion vocal
      </h2>
      <p class="mb-5 js-animateEntrence">
        Il y a dans cette communauté une fracture.
        <strong class="uppercase">Choisis ton camp</strong>
      </p>
      <div class="md:grid gap-4 grid-cols-2">
        <div class="flex mb-8 md:mb-0">
          <a class="mr-2 lg:mr-5" href="mumble://www.heartlessgaming.com/">
            <svg-mumble class="w-20 lg:w-22 voip-icons js-animateEntrence" />
          </a>
          <div>
            <p class="mb-5 js-animateEntrence">
              <strong>L'expérience original Heartless</strong> ce trouve sur
              Mumble&nbsp;! On dors dans le channel AFK et on discute même quand
              on a pas envie de jouer.
            </p>
            <a
              class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200 md-shadow js-animateEntrence"
              href="mumble://www.heartlessgaming.com/"
            >
              <strong>Rejoindre le mumble</strong>
              <chevron-right class="w-2 inline align-middle fill-white" />
            </a>
          </div>
        </div>
        <div class="flex">
          <a class="mr-2 lg:mr-5" href="https://discord.gg/rWDzacA">
            <svg-discord class="w-20 lg:w-22 voip-icons js-animateEntrence" />
          </a>
          <div>
            <p class="mb-5 js-animateEntrence">
              <strong>Ici c'est la modernité !</strong> Alerte et information
              serveur automatique. Les joueurs ici sont sonvent un peu plus
              compétitif (CSGO, LOL).
            </p>
            <a
              class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200 md-shadow js-animateEntrence"
              href="mumble://www.heartlessgaming.com/"
            >
              <strong>Rejoindre le discord</strong>
              <chevron-right class="w-2 inline align-middle fill-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgMumble from '~/assets/svg/mumble.svg?inline'
import SvgDiscord from '~/assets/svg/discord.svg?inline'
import ChevronRight from '~/assets/svg/chevron-right.svg?inline'

export default {
  components: {
    SvgMumble,
    SvgDiscord,
    ChevronRight,
  },
}
</script>
