<script setup lang="ts">
const links = [
  { app: 'Youtube', href: 'https://www.youtube.com/@heartless.gaming/videos', icon: 'logos:youtube-icon' },
  { app: 'Twitch', href: 'https://www.twitch.tv/heartlessgaming_live', icon: 'logos:twitch' },
  { app: 'Mumble', href: 'mumble://heartlessgaming.com', icon: 'simple-icons:mumble' },
  { app: 'Discord', href: 'https://discord.gg/rWDzacA', icon: 'logos:discord-icon' },
  { app: 'Github', href: 'https://github.com/heartless-gaming/heartlessgaming.com', icon: 'mdi-github' },
]
</script>

<template>
  <div
    class="
      mb-8 grid grid-cols-3 gap-x-2 gap-y-6
      sm:grid-cols-5
    "
  >
    <div
      v-for="(link, index) in links" :key="index"
      class="tooltip flex place-content-center"
      :data-tip="link.app"
    >
      <NuxtLink
        :to="link.href"
        :aria-label="`Aller vers ${link.app}`"
      >
        <Icon
          :name="link.icon"
          class="text-4xl"
        />
      </NuxtLink>
    </div>
  </div>
</template>
