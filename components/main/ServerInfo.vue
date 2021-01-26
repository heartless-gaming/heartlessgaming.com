<template>
  <section class="-skewed-110 relative">
    <div class="px-2" :class="{ 'animate-pulse': loading }">
      <div
        v-if="servers.length > 0"
        class="max-w-2xl mx-auto relative z-10 mb-20 border-3 border-solid border-hlsred bg-gray-200 rounded thicc-shadow"
      >
        <div class="flex bg-hlsred mb-1 pt-1 pb-2 text-gray-200">
          <h3 class="flex-1 pl-3 text-xl">Les serveurs de jeux</h3>
          <button
            class="uppercase border-2 border-gray-200 rounded px-2 py-0.5 mr-2 text-xs font-bold"
            @click="refresh"
          >
            Rafraîchir
          </button>
        </div>
        <div class="mb-1 text-gray-800">
          <div
            v-for="(server, index) in servers"
            :key="index"
            class="flex px-2 py-2 sm:py-3 items-center"
          >
            <!-- eslint-disable vue/no-v-html -->
            <p
              class="w-10 pr-2 fill-current text-gray-800"
              v-html="server.gamelogo"
            ></p>
            <svg-lock
              v-if="server.private"
              class="block w-8 pr-2 fill-current text-gray-800"
            />
            <p class="flex-1 sm:text-lg truncate">{{ server.name }}</p>
            <p v-if="server.connect" class="hidden sm:block">
              <a
                class="ml-2 py-1.5 px-3 rounded bg-hlsred hover:bg-red transition-all duration-200 text-gray-200 uppercase"
                :href="server.connect"
              >
                Rejoindre
              </a>
            </p>
            <p class="w-16 text-right text-gray-700 font-bold">
              {{ server.players }} / {{ server.maxplayers }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgCsgo from '~/assets/svg/csgo.svg?raw'
import SvgMc from '~/assets/svg/mc.svg?raw'
import SvgKf2 from '~/assets/svg/kf2.svg?raw'
import SvgSandstorm from '~/assets/svg/sandstorm.svg?raw'
import SvgArk from '~/assets/svg/ark.svg?raw'
import SvgLock from '~/assets/svg/lock.svg?inline'

export default {
  components: { SvgLock },
  data() {
    return {
      servers: [],
      loading: true,
    }
  },
  async fetch() {
    const baseURL = this.$nuxt.context.$config.baseURL
    const fetchGSinfoURL = `${baseURL}/api/getGS`
    this.servers = await fetch(fetchGSinfoURL).then((res) => res.json())
    this.assignGameIcon()
    this.loading = false
  },
  methods: {
    assignGameIcon() {
      this.servers.map((gs, index) => {
        switch (gs.game) {
          case 'csgo':
            gs.gamelogo = SvgCsgo
            break
          case 'mc':
            gs.gamelogo = SvgMc
            break
          case 'kf2':
            gs.gamelogo = SvgKf2
            break
          case 'sandstorm':
            gs.gamelogo = SvgSandstorm
            break
          case 'ark_survival_evolved':
            gs.gamelogo = SvgArk
            break
          default:
            gs.gamelogo =
              '<p class="text-xs"><small>Au boulot Markus!<small></p>'
        }

        return gs
      })
    },
    refresh() {
      this.loading = true
      this.$nuxt.refresh()
      this.loading = false
    },
  },
}
</script>

<style>
.-skewed-110::before {
  content: '';
  position: absolute;
  background: theme('colors.gray.800');
  width: 100%;
  height: 130%;
  top: 10px;
  transform: skewY(-8deg);
}
</style>
