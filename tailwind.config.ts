import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default <Partial<Config>>{
  safelist: ['duration-10000'],
  theme: {
    extend: {
      dropShadow: {
        logo: '0 10px 10px rgba(0, 0, 0, 1)',
      },
      ringWidth: {
        6: '6px',
      },
      transitionDuration: {
        10000: '10000ms',
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
    ],
  },
}
