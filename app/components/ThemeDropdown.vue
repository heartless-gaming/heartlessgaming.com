<script setup lang="ts">
import tailwindConfig from './tailwind.config.ts'

const themes = tailwindConfig.daisyui.themes
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
