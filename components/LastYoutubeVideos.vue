<template>
  <section class="wrapper">
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
        title: 'Heartless Gaming | 2017 - 2018',
        url: 'https://www.youtube.com/watch?v=8mBQLjkws0E',
        duration: '10:59'
      },
      {
        title: 'Pipoune: La Revanche du Sel - CS:GO',
        url: 'https://www.youtube.com/watch?v=w5hxjXyh2Do',
        duration: '14:49'
      },
      {
        title: 'Counter Sel #9',
        url: 'https://www.youtube.com/watch?v=wUDSdj-IxBE',
        duration: '13:51'
      }
    ],
    kek: '',
    error: null
  })
}
</script>

<style></style>
