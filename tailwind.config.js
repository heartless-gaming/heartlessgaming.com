module.exports = {
  theme: {
    extend: {
      colors: {
        hlsred: {
          light: '#f53b00',
          DEFAULT: '#cc1b00',
          dark: '#be0e00',
        },
        ytred: '#d42627',
        ttvpurple: '#663398',
      },
      borderWidth: {
        3: '3px',
      },
      padding: {
        11: '2.75rem',
      },
      inset: {
        0.5: '0.125rem',
        1: '0.25rem',
        3: '0.75rem',
        4: '1rem',
      },
      transitionProperty: ['motion-reduce'],
    },
    fontFamily: {
      sans: [
        'Rubik',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      grandstander: [
        'Grandstander',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      ringWidth: ['hover'],
      ringColor: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
}
