import daisyui from 'daisyui'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/scripts',
  ],

  routeRules: {
    '/api/getShirt': { cache: { maxAge: 5, base: 'redis' } },
  },

  runtimeConfig: {
    redisHost: '',
    redisPort: 0,
    stripeSecretKey: '',
    printfulToken: '',
    public: {
      stripePublicKey: '',
    },
  },

  image: {
    quality: 80,
    format: ['avif', 'webp'],
  },

  svgo: {
    autoImportPath: './assets/svg/',
    componentPrefix: 'svg',
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
        'mdi:tshirt-crew',
        'mdi:palette-swatch-variants',
      ],
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },
})
