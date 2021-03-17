<template>
  <main class="flow-root pt-10 bg-gray-900">
    <main-server-info />
    <main-last-youtube-videos />
    <main-vocal-war />
    <section
      class="relative max-w-2xl mx-auto mb-24 md:mb-48 text-gray-200 lady-trumpet-homepage"
    >
      <div class="relative z-10 px-2">
        <h2
          class="mb-3 text-3xl md:text-5xl font-grandstander page-title-text-shadow js-animateEntrence"
        >
          Soundboard
        </h2>
        <p class="max-w-sm mb-5 js-animateEntrence">
          Retrouver les plus grands tubes comme <em>baserape</em> et
          <em>learn to play bitch</em>.
        </p>
        <nuxt-link
          to="soundboard"
          class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200 md-shadow js-animateEntrence"
        >
          <strong>Découvrir l'enfer du Soundboard</strong>
          <svg-trumpet
            class="w-10 relative -top-0.5 inline align-middle fill-white"
          />
        </nuxt-link>
      </div>
    </section>
    <section
      class="relative max-w-2xl mx-auto mb-24 text-gray-200 money-man-homepage"
    >
      <div class="relative z-10 px-2">
        <h2
          class="mb-3 text-3xl md:text-5xl font-grandstander page-title-text-shadow js-animateEntrence"
        >
          L'argent des abonnés
        </h2>
        <p class="mb-5 js-animateEntrence">
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
        <p class="mb-3 js-animateEntrence">
          Une donation nous permet de faire plus d'events, de réaliser plus de
          vidéos et d'avoir plus de serveurs de jeux.
        </p>
        <nuxt-link
          to="donation"
          class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200 md-shadow js-animateEntrence"
        >
          <strong>Faire une donation</strong>
          <chevron-right class="w-2 inline align-middle fill-white" />
        </nuxt-link>
      </div>
    </section>
  </main>
</template>

<script>
import ChevronRight from '~/assets/svg/chevron-right.svg?inline'
import SvgTrumpet from '~/assets/svg/trumpet.svg?inline'

export default {
  components: {
    ChevronRight,
    SvgTrumpet,
  },
  layout: 'homepage',
  mounted() {
    const elems = document.querySelectorAll('.js-animateEntrence')
    const observerOptions = {
      // rootMargin: "0px 0px -100px 0px"
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('animate-entrence')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    elems.forEach((elem) => {
      observer.observe(elem)
    })
  },
}
</script>

<style>
.lady-trumpet-homepage::after {
  content: '';
  position: absolute;
  width: 110px;
  height: 150%;
  left: 55%;
  top: -20%;
  opacity: 0.2;
  background-position: 100%;
  background-image: url('~@/assets/svg/lady-trumpet.svg');
  background-repeat: no-repeat;
  animation: ladytrumpet 3s ease infinite;

  @screen sm {
    opacity: 1;
    width: 110px;
    left: 55%;
    top: -20%;
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

.money-man-homepage::after {
  content: '';
  position: absolute;
  width: 150px;
  height: 100%;
  left: 50%;
  top: 20%;
  opacity: 0.04;
  background-image: url('~@/assets/svg/donation-man.svg');
  background-repeat: no-repeat;
  animation: moneyman 1s ease infinite;

  @screen md {
    opacity: 1;
    width: 100px;
    left: -15%;
    top: 30%;
  }

  @screen lg {
    opacity: 1;
    width: 150px;
    left: -25%;
    top: 15%;
  }

  @screen xl {
    opacity: 1;
    width: 200px;
    left: -35%;
    top: 5%;
  }
}

@keyframes moneyman {
  0%,
  100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(1deg);
  }
}
</style>
