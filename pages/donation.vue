<template>
  <div class="bg-gray-900">
    <header
      class="mb-12 pt-16 sm:pt-12 pb-12 pr-2 pl-2 gray-gradient border-b-3 border-solid border-hlsred header-box-shadow"
    >
      <main-nav />
      <div class="">
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
        <h1
          class="mt-12 text-center text-4xl text-gray-200 zoomIn main-title-text-shadow soundboard-letter-spacing uppercase"
        >
          {{ title }}
        </h1>
      </div>
    </header>
    <main>
      <div
        class="mb-12 flex justify-around flex-wrap max-w-lg mx-auto text-white"
      >
        <form>
          <input class="block mb-5 py-2 px-3" type="text" />
          <input class="block mb-5 py-2 px-3" type="number" />
          <button
            class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200"
          >
            5 €
          </button>
          <button
            class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200"
          >
            10 €
          </button>
          <button
            class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200"
          >
            15 €
          </button>
          <button
            class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200"
          >
            20 €
          </button>
          <button
            class="inline-block px-4 py-2 rounded-full bg-hlsred hover:bg-hlsred-dark transition-all duration-200"
          >
            50 €
          </button>
          <button
            class="block py-2 px-3 rounded bg-hlsred hover:bg-red transition-all duration-200 text-gray-200 uppercase"
            type="submit"
          >
            Valider
          </button>
        </form>
      </div>
    </main>
    <footer class="bg-gray-800 flow-root">
      <social-networks />
      <div class="max-w-2xl mx-auto px-2 mb-10 sm:flex">
        <quotes />
        <credits />
      </div>
      <mentra />
    </footer>
  </div>
</template>

<script>
import MainNav from '~/components/MainNav.vue'
import Logo from '~/components/Logo.vue'
import Credits from '~/components/Credits.vue'
import Quotes from '~/components/Quotes.vue'
import Mentra from '~/components/Mentra.vue'

export default {
  components: {
    MainNav,
    Logo,
    Credits,
    Quotes,
    Mentra,
  },
  data: () => ({
    title: 'Donation',
  }),
  head() {
    return {
      title: 'Donation',
      titleTemplate: '%s - Heartless Gaming',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Aider les Heartless en faisant une donation pontuel.',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://heartlessgaming.com/donation',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `Donation - Heartless Gaming`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Aider les Heartless en faisant une donation pontuel.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://heartlessgaming.com/icon.png',
        },
      ],
    }
  },
  mounted() {
    // const elements = this.$stripe.elements();
    // const card = elements.create('card', {});
    // // Add an instance of the card Element into the `card-element` <div>
    // card.mount('#card-element');
  },
}
</script>

<style>
.gray-gradient {
  background-image: radial-gradient(
    circle farthest-corner at 0% -40%,
    rgba(90, 92, 106, 1) 0%,
    rgba(32, 45, 65, 1) 75%
  );
}

.header-box-shadow {
  box-shadow: 0 17px 15px -8px rgba(0, 0, 0, 0.4);
}

.soundboard-letter-spacing {
  letter-spacing: 0.5rem;
}
</style>
