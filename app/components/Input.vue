<script setup lang="ts">
const { label, placeholder, errors } = defineProps({
  label: String,
  placeholder: String,
  errors: { type: Array, default: [] },
})

watch(() => errors, () => {
  console.log(errors)
})

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
      type="text"
      class="input input-lg w-full"
      :placeholder="placeholder"
      :class="{ 'input-error': errors.length }"
    >
    <ul v-if="errors" class="text-error">
      <li v-for="error of errors" :key="error">
        {{ error }}
      </li>
    </ul>
  </fieldset>
</template>
