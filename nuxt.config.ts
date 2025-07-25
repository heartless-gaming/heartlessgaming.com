import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@vueuse/nuxt',
    'nuxt-svgo',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@pinia/nuxt',
    'nuxt-security',
    '@regle/nuxt',
  ],

  vite: { plugins: [tailwindcss()] },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/api/getShirt': { cache: { maxAge: 5, base: 'redis' } },
    '/checkout': {
      security: {
        headers: {
          crossOriginEmbedderPolicy: 'unsafe-none',
          crossOriginResourcePolicy: 'cross-origin',
        },
      },
    },
  },

  runtimeConfig: {
    redisHost: '127.0.0.1',
    redisPort: 6379,
    redisUser: '',
    redisPass: '',
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
        'mdi:palette-swatch-variant',
        'mdi:account-edit-outline',
        'solar:bag-heart-bold',
        'material-symbols:close-rounded',
        'famicons:warning-outline',
        'hugeicons:checkmark-circle-03',
      ],
    },
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  // https://nuxt-security.vercel.app/advanced/faq#paypal
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': [
          '\'self\'',
          'data:',
          'https://stripe.com',
          'https://js.stripe.com',
        ],
      },
      strictTransportSecurity: { magAge: 0 },
    },
  },

})
