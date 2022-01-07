<template>
  <div
    class="min-h-screen bg-counter grid items-center relative overflow-hidden"
  >
    <div class="px-3">
      <p
        class="counter-text-shadow mb-6 text-9xl text-center font-bold text-hlsred beat"
      >
        ♥
      </p>
      <p
        class="counter-text-shadow mb-6 text-7xl sm:text-9xl text-center font-bold text-gray-200"
      >
        Animo
      </p>
      <p
        class="counter-text-shadow mb-6 text-7xl sm:text-9xl text-center font-bold text-gray-200"
      >
        Gatita&nbsp;!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'bare',
  data: () => ({
    title: 'Animo !',
  }),
  head() {
    return {
      title: this.title,
      titleTemplate: '%s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Animo !',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://heartlessgaming.com/animo',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.title}`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Animo !',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://heartlessgaming.com/icon.png',
        },
      ],
    }
  },
}
</script>

<style>
.beat {
  animation: beat 0.25s infinite alternate;
}

@keyframes beat {
  to {
    transform: scale(1.6);
  }
}

.bg-counter::before {
  content: "";
  position: absolute;
  width: 250%;
  height: 250%;
  top: -75%;
  left: -75%;
  z-index: -1;

  /* transform-origin: bottom left; */
  background:
    linear-gradient(
      142deg,
      theme("colors.emerald.600"),
      theme("colors.pink.500"),
      theme("colors.purple.600"),
      theme("colors.yellow.600") 97%
    );
  background-size: 400% 400%;
  animation: bgcounter 10s ease-in-out alternate infinite;
}

.counter-shadow {
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 75%);
}

.counter-text-shadow {
  text-shadow:
    rgb(0 0 0 / 60%) 0 0 50px,
    rgb(0 0 0 / 50%) 0 0 15px,
    rgb(0 0 0 / 60%) 0 0 5px;
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
