<template>
  <main class="flow-root pt-10 bg-gray-900">
    <server-info />
    <last-youtube-videos />
    <vocal-war />
    <section
      class="relative max-w-2xl mx-auto mb-24 md:mb-48 text-gray-200 lady-trumpet"
    >
      <div class="px-2">
        <h2
          class="mb-3 text-3xl md:text-5xl font-grandstander page-title-text-shadow"
        >
          Soundboard
        </h2>
        <p class="max-w-sm mb-5">
          Retrouver les plus grands tubes comme <em>baserape</em> et
          <em>learn to play bitch</em>.
        </p>
        <nuxt-link
          to="soundboard"
          class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200 md-shadow"
        >
          <strong>Découvrir l'enfer du Soundboard</strong>
          <svg-trumpet class="w-10 inline align-middle fill-white" />
        </nuxt-link>
      </div>
    </section>
    <section class="max-w-2xl mx-auto mb-24 text-gray-200">
      <div class="px-2">
        <h2
          class="mb-3 text-3xl md:text-5xl font-grandstander page-title-text-shadow"
        >
          L'argent des abonnés
        </h2>
        <p class="mb-5">
          Les frais de fonctionnement (47.99 € par mois) sont pris en charge par
          <a class="underline" href="https://skullmasher.io">
            Florian "Skullmasher" Ledru
          </a>
          ainsi que par le reste des membres de la communauté. Un choix
          confortable qui nous permet de garder notre indépendance
          <strong>depuis plus de 10 ans</strong> et de ne pas avoir recours à
          des sponsors comme
          <strong class="uppercase">Raid Diarrhe Legends</strong> (
          <a class="underline" href="https://youtu.be/5aCzYb_cVWc">Big Up JB</a>
          ).
        </p>
        <p class="mb-3">
          Une donation nous permet de faire plus d'events, de réaliser plus de
          vidéos et d'avoir plus de serveurs de jeux.
        </p>
        <nuxt-link
          to="donation"
          class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200 md-shadow"
        >
          <strong>Faire une donation</strong>
          <chevron-right class="w-2 inline align-middle fill-white" />
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
import ChevronRight from '~/assets/chevron-right.svg?inline'
import SvgTrumpet from '~/assets/trumpet.svg?inline'

export default {
  components: {
    ChevronRight,
    SvgTrumpet,
  },
  layout: 'homepage',
}
</script>

<style lang="scss">
.lady-trumpet::after {
  @screen sm {
    content: '';
    position: absolute;
    width: 110px;
    height: 150%;
    left: 55%;
    top: -20%;
    background-position: 100%;
    background-image: url('~@/assets/lady-trumpet.svg');
    background-repeat: no-repeat;
    animation: ladytrumpet 3s ease infinite;
  }
}

@keyframes ladytrumpet {
  0%,
  100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(1deg);
  }
}
</style>
