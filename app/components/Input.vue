<script setup lang="ts">
const { label, placeholder, errors, size } = defineProps({
  type: { type: String, default: 'text' },
  label: String,
  size: {
    type: String,
    validator(value) {
      return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
  },
  placeholder: String,
  errors: { type: Array, default: [] },
})

const inputClass = computed(() => [
  { 'input-error': errors.length },
  size ? `input-${size}` : '',
])

const model = defineModel()
</script>

<template>
  <fieldset
    class="fieldset"
  >
    <legend class="fieldset-legend">
      {{ label }}
    </legend>
    <input
      v-model="model"
      :type
      class="input w-full"
      :placeholder="placeholder"
      :class="inputClass"
    >
    <ul v-if="errors" class="text-error">
      <li v-for="error of errors" :key="error">
        {{ error }}
      </li>
    </ul>
  </fieldset>
</template>
