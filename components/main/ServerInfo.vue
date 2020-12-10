<template>
  <section class="-skewed-110 relative">
    <div class="px-2">
      <div
        v-if="servers.length > 0"
        class="max-w-2xl mx-auto relative z-10 mb-20 border-3 border-solid border-hlsred bg-gray-200 rounded thicc-shadow"
      >
        <div class="flex bg-hlsred mb-1 pt-1 pb-2 text-gray-200">
          <h3 class="flex-1 pl-3 text-xl">Les serveurs de jeux</h3>
          <button
            class="px-3 border-2 bg-hlsred-dark border-solid border-white text-gray-200 uppercase rounded"
            @click="$fetch"
          >
            Rafraichir
          </button>
        </div>
        <div class="mb-1">
          <div
            v-for="(server, index) in servers"
            :key="index"
            class="flex px-2 py-2 sm:py-4"
          >
            <p class="flex-1 sm:text-lg">{{ server.name }}</p>
            <p class="pl-3 font-bold text-gray-700">
              {{ server.players }}/{{ server.maxplayers }}
            </p>
            <p class="hidden sm:block">
              <a
                class="ml-2 py-2 px-3 rounded bg-hlsred hover:bg-red transition-all duration-200 text-gray-200 uppercase"
                href="https://heartlessgaming.com"
              >
                Rejoindre
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      servers: [],
    }
  },
  async fetch() {
    const baseURL = this.$nuxt.context.$config.baseURL
    const fetchGSinfoURL = `${baseURL}/api/getGS`
    this.servers = await fetch(fetchGSinfoURL).then((res) => res.json())
  },
}
</script>

<style>
.-skewed-110::before {
  content: '';
  position: absolute;
  background: theme('colors.gray.800');
  width: 100%;
  height: 125%;
  top: 10px;
  transform: skewY(-8deg);
}
</style>
