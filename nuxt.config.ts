import daisyui from "daisyui"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxtjs/tailwindcss", "nuxt-svgo", "@nuxt/icon"],

  svgo: {
    autoImportPath: './assets/svg/',
    componentPrefix: 'svg'
  },
  icon: {
    clientBundle: {
      icons: [
        'game-icons:take-my-money',
        'logos:youtube-icon',
        'logos:twitch',
        'simple-icons:mumble',
        'logos:discord-icon',
        'mdi:github',
      ],
    },
  },
})