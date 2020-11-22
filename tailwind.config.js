module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        hlsred: {
          light: '#fa4000',
          default: '#cc1b00',
          dark: '#be0e00',
        },
        ytred: '#d42627',
        ttvpurple: '#663398',
      },
      borderWidth: {
        3: '3px',
      },
      transitionProperty: ['motion-reduce'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
