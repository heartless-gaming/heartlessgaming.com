module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - Heartless Gaming',
    title: 'Heartless Gaming',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Heartless Gaming la communauté qui propose multiples serveurs de jeux publics et privés en fonction de l'humeur des joueurs. Retrouvez, nos aventures sur Youtube et twitch."
      },
      { hid: 'og:url', name: 'og:url', content: 'https://heartlessgaming.com' },
      { hid: 'og:title', name: 'og:title', content: 'Heartless Gaming' },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "Heartless Gaming la communauté qui propose multiples serveurs de jeux publics et privés en fonction de l'humeur des joueurs. Retrouvez, nos aventures sur Youtube et twitch."
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://heartlessgaming.com/icon.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#e52f00' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const svgRule = config.module.rules.find((rule) => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader'
      })
    }
  }
}
