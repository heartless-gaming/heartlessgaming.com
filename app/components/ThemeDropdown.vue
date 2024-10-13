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
    <button tabindex="0" role="button" class="btn btn-ghost h-auto min-h-fit border-none py-2 font-normal">
      <Icon
        name="mdi:palette-swatch-variant"
        class="text-xl"
      />
      <span>Themes</span>
    </button>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] mt-4 max-h-96 w-52 overflow-y-auto rounded-box bg-base-300 p-2 shadow-2xl"
    >
      <li v-for="(theme, index) in themes" :key="index">
        <input
          v-model="currentTheme"
          type="radio"
          name="theme-dropdown"
          class="theme-controller btn btn-ghost btn-sm btn-block justify-start"
          :aria-label="capitalizeFirstLetter(theme)"
          :value="theme"
        >
      </li>
    </ul>
  </div>
</template>
