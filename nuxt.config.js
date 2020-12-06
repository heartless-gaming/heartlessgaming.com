export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Heartless Gaming',
    titleTemplate: '%s - Heartless Gaming',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Heartless Gaming la communauté qui propose multiples serveurs de jeux publics et privés en fonction de l'humeur des joueurs. Retrouvez, nos aventures sur Youtube et twitch.",
      },
      { hid: 'og:url', name: 'og:url', content: 'https://heartlessgaming.com' },
      { hid: 'og:title', name: 'og:title', content: 'Heartless Gaming' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "Heartless Gaming la communauté qui propose multiples serveurs de jeux publics et privés en fonction de l'humeur des joueurs. Retrouvez, nos aventures sur Youtube et twitch.",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://heartlessgaming.com/icon.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Customize the progress-bar color
  loading: { color: '#e52f00' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/magicgrid.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-magic-grid'],
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-server
  server: {
    timing: {
      total: true, // tracks the whole time spent on server-side rendering
    },
  },

  // https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  },
  privateRuntimeConfig: {
    ytApiKey: process.env.YT_API_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware
  serverMiddleware: [
    // Will register file from project api directory to handle /api/* requires
    { path: '/api', handler: '~/api/getYT.js' },
    { path: '/api', handler: '~/api/getGS.js' },
    { path: '/api', handler: '~/api/stripe.js' },
  ],
}
