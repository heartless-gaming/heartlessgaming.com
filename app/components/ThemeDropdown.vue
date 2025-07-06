<script setup lang="ts">
// TODO : Still have not found a way to reference DaidyUI theme list in JS
const themes = ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte', 'abyss', 'silk']

const currentTheme = useLocalStorage('theme', '')
</script>

<template>
  <div class="dropdown dropdown-end dropdown-bottom contents">
    <button
      tabindex="0" role="button" class="
        btn h-auto min-h-fit border-none py-2 font-normal btn-ghost
      "
    >
      <Icon
        name="mdi:palette-swatch-variant"
        class="text-xl"
      />
      <span>Themes</span>
    </button>
    <ul
      tabindex="0"
      class="
        dropdown-content z-[1] mt-4 max-h-96 w-52 overflow-y-auto rounded-box
        bg-base-300 p-2 shadow-2xl
      "
    >
      <li v-for="(theme, index) in themes" :key="index">
        <input
          v-model="currentTheme"
          type="radio"
          name="theme-dropdown"
          class="
            theme-controller btn btn-block justify-start btn-ghost btn-sm
            btn-primary
          "
          :aria-label="capitalizeFirstLetter(theme)"
          :value="theme"
        >
        <button
          :data-theme="theme" class="absolute top-1.5 right-3 gap-1 bg-base-100" @click="currentTheme = theme"
        >
          <div class="size-2 rounded-full bg-base-content" />
          <div class="size-2 rounded-full bg-primary" />
          <div class="size-2 rounded-full bg-secondary" />
          <div class="size-2 rounded-full bg-accent" />
        </button>
      </li>
    </ul>
  </div>
</template>
