// @ts-check
import antfu from '@antfu/eslint-config'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      // "better-tailwindcss/enforce-consistent-line-wrapping": ["warn", { printWidth: 100 }]
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/assets/css/main.css',
      },
    },
  },
  antfu({
    // ...@antfu/eslint-config options
  }),
)
