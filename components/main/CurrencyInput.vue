<template>
  <input ref="inputRef" type="text" class="pt-2 amount-custom" />
</template>

<script>
import { useCurrencyInput } from 'vue-currency-input'

export default {
  name: 'CurrencyInput',
  props: {
    value: Number,
    options: Object
  },
  setup (props) {
    const { inputRef } = useCurrencyInput(props.options)

    return { inputRef }
  }
}
</script>

<style>
.amount-custom {
  @apply w-24 pr-4 pb-1 text-center bg-transparent border-b-2 border-solid border-hlsred text-xl text-gray-200;
}
</style>
