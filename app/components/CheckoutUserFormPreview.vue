<script setup lang="ts">
defineEmits(['updateUserForm'])
</script>

<template>
  <button class="btn btn-outline" @click="console.log('topkek')">
    <div>
      <div class="float-right flex items-center gap-x-2">
        <span>modifier</span>
        <Icon size="1.3em" name="mdi:account-edit-outline" />
      </div>
      <h1>Checkout User Form Preview Component ! YAAAAAY</h1>
      <p>get form state & show</p>
    </div>
  </button>
  <button
    class="
      rounded-box border-2 border-base-300 p-4 text-left
      hover:bg-base-100
    "
    @click="$emit('updateUserForm') && console.log('topkek')"
  >
    <div>
      <div class="float-right flex items-center gap-x-2">
        <span>modifier</span>
        <Icon size="1.3em" name="mdi:account-edit-outline" />
      </div>
      <h1>Checkout User Form Preview Component ! YAAAAAY</h1>
      <p>get form state & show</p>
    </div>
  </button>
</template>
