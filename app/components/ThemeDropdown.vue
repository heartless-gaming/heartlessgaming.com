<script setup lang="ts">
/**
 * loading the theme list from the tailwind config is a pain that would require
 * pre evaluation
 *
 * https://tailwindcss.com/docs/configuration#referencing-in-java-script
 */
const themes = ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset']

const currentTheme = useLocalStorage('theme', '')
</script>

<template>
  <div class="dropdown dropdown-end dropdown-bottom contents">
    <button tabindex="0" role="button" class="btn py-2 h-auto min-h-fit font-normal btn-ghost border-none">
      <Icon
        name="mdi:palette-swatch-variant"
        class="text-xl"
      />
      <span>Themes</span>
    </button>
    <ul
      tabindex="0"
      class="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl max-h-96 overflow-y-auto mt-4"
    >
      <li v-for="(theme, index) in themes" :key="index">
        <input
          v-model="currentTheme"
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          :aria-label="capitalizeFirstLetter(theme)"
          :value="theme"
        >
      </li>
    </ul>
  </div>
</template>
