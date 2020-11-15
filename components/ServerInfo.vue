<template>
  <div>
    <div>
      <p v-if="$fetchState.pending">Loading....</p>
      <p v-else-if="$fetchState.error">Error while fetching game server</p>
      <div v-else>
        <p v-for="(server, index) in servers" :key="index">
          {{ server.name }} {{ server.raw.numplayers }}/{{ server.maxplayers }}
        </p>
        <button @click="$fetch">Refresh</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async fetch() {
    this.servers = await fetch(
      'http://localhost:3000/api/csgo1v1.json'
    ).then((res) => res.json())
  },
  data() {
    return {
      servers: [],
    }
  },
}
</script>
