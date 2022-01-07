<template>
  <div
    class="min-h-screen bg-counter grid items-center relative overflow-hidden"
  >
    <div class="px-3">
      <p
        class="counter-text-shadow mb-6 text-9xl text-center font-bold text-gray-200"
      >
        {{ counter }}
      </p>
      <div class="grid justify-center">
        <button
          class="block w-56 mb-6 px-5 py-3 counter-shadow bg-hlsred-light hover:bg-hlsred text-3xl text-gray-200 font-bold transition-all duration-200 rounded"
          @click="addOne()"
        >
          + 1
        </button>
        <button
          class="block w-56 mb-20 px-5 py-3 counter-shadow bg-hlsred-light hover:bg-hlsred text-3xl text-gray-200 font-bold transition-all duration-200 rounded"
          @click="substractOne()"
        >
          - 1
        </button>
        <button
          class="block w-56 px-5 py-3 counter-shadow bg-gray-200 ring-gray-800 hover:ring-4 text-2xl text-gray-800 font-bold transition-all duration-200 rounded"
          @click="reset()"
        >
          RESET
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'bare',
  data: () => ({
    title: 'Counter',
    counter: 0,
  }),
  head() {
    return {
      title: this.title,
      titleTemplate: '%s - Heartless Gaming',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A page that allows you to add 1, remove 1 or reset. Ideal if you want to count points for a game or something.',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://heartlessgaming.com/counter',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.title} - Heartless Gaming`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'A page that allows you to add 1, remove 1 or reset. Ideal if you want to count points for a game or something.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://heartlessgaming.com/icon.png',
        },
      ],
    }
  },
  methods: {
    addOne() {
      this.counter++
    },
    substractOne() {
      this.counter--
    },
    reset() {
      this.counter = 0
    },
  },
}
</script>

<style>
.bg-counter::before {
  content: '';
  position: absolute;
  width: 250%;
  height: 250%;
  top: -75%;
  left: -75%;
  z-index: -1;
  /*transform-origin: bottom left;*/
  background: linear-gradient(
    142deg,
    theme('colors.purple.600'),
    theme('colors.emerald.600'),
    theme('colors.indigo.600'),
    theme('colors.yellow.600') 97%
  );
  background-size: 400% 400%;
  animation: bgcounter 60s ease-in-out alternate infinite;
}

.counter-shadow {
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.75);
}

.counter-text-shadow {
  text-shadow: rgba(0, 0, 0, 0.6) 0 0 50px, rgba(0, 0, 0, 0.5) 0 0 15px,
    rgba(0, 0, 0, 0.6) 0 0 5px;
}

@keyframes bgcounter {
  0% {
    transform: rotate(0deg);
    background-position: 10% 0%;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    transform: rotate(360deg);
    background-position: 10% 0%;
  }
}
</style>
