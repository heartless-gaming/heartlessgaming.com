<template>
  <section class="wrapper mbm">
    <h2 class="mbm">Les dernières vidéos Youtube</h2>
    <div class="mlm">
      <p v-for="(video, index) in videos" :key="index">
        <a :href="video.url">{{ video.title }}</a>
        <small>{{ video.duration }}</small>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    videos: [
      {
        title: 'Les conneries du peuple Heartless',
        url: 'https://youtu.be/OYXCsTerTv4',
        duration: '13:51',
      },
      {
        title: 'Une semaine dans la vie de Guiltyspark',
        url: 'https://youtu.be/ozb98rBbRi4',
        duration: '9:34',
      },
      {
        title: 'Timelapse course de bateau sur glace (Minecraft)',
        url: 'https://youtu.be/qNIH7V0BsWU',
        duration: '2:21',
      },
    ],
    error: null,
  }),
}
</script>
