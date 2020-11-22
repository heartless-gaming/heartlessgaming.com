<template>
  <section>
    <div
      v-if="servers.length > 0"
      class="max-w-lg mx-auto mb-10 border-3 border-solid border-hlsred bg-gray-200 rounded shadow-server-info"
    >
      <div class="flex bg-hlsred mb-1 pt-1 pb-2 text-white">
        <h3 class="flex-1 pl-3 text-xl">Les serveurs de jeux</h3>
        <button
          class="px-3 border-2 bg-hlsred-dark border-solid border-whit text-white uppercase rounded"
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
            {{ server.raw.numplayers }}/{{ server.maxplayers }}
          </p>
          <p class="hidden sm:block">
            <a
              class="ml-2 py-2 px-3 rounded bg-hlsred hover:bg-red transition-all duration-200 text-white uppercase"
              href="https://heartlessgaming.com"
            >
              Rejoindre
            </a>
          </p>
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
    this.servers = await fetch(
      'http://localhost:3000/api/csgo1v1.json'
    ).then((res) => res.json())
  },
}
</script>

<style>
.shadow-server-info {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5),
    0 4px 6px -2px rgba(0, 0, 0, 0.8);
}
</style>
