<template>
  <div v-if="servers.length > 0" class="">
    <p v-for="(server, index) in servers" :key="index">
      {{ server.name }} {{ server.raw.numplayers }}/{{ server.maxplayers }}
    </p>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      servers: [],
    }
  },
  async fetch() {
    this.servers = await fetch(
      'http://localhost:3000/api/csgo1v1.json'
    ).then((res) => res.json())
  },
}
</script>
