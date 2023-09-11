<script setup>
  defineProps({
    url: String
  })
</script>

<template>
  <a class="text-blue-500 hover:text-blue-700 transition" :href="url"><slot>fallback link Text</slot></a>
</template>
