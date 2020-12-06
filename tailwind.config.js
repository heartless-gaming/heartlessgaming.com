module.exports = {
  theme: {
    extend: {
      colors: {
        hlsred: {
          light: '#fa4000',
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
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      ringWidth: ['hover'],
      ringColor: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
