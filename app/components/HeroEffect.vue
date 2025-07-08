<script setup lang="ts">
const path: Ref = ref(null)
let interval: NodeJS.Timeout

const max = 110
const points = 16
const duration = 10000
const rand = () => Math.floor(Math.random() * max)

// Generate a random clip path for the effect
function clipPath() {
  // Create an array of points with x and y coordinates in percent
  const p = Array.from({ length: points }, () => (`${rand()}% ${rand()}%`))
  path.value.style['clip-path'] = `polygon(${p.join(', ')})`
}

onMounted(() => {
  console.log('mounted');
  clipPath()
  interval = setInterval(clipPath, duration)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="absolute inset-0 -z-10 transform-gpu blur-3xl">
    <div
      ref="path"
      class="size-full bg-primary transition-[clip-path] ease-in-out duration-(--hg-hero-effect-animation-duration)"
      :style="`--hg-hero-effect-animation-duration: ${duration}ms;`"
      style="clip-path: polygon(99.401% 23.7078%, 35.7645% 92.5042%, 56.7894% 30.1775%, 21.3293% 9.14554%, 85.9612% 55.7237%, 91.7772% 28.9103%, 68.0925% 83.52%, 80.452% 82.1599%, 40.6311% 70.1134%, 74.8706% 37.9842%, 59.4388% 31.0837%, 19.5192% 72.8712%, 52.9892% 58.0796%, 64.8176% 97.7889%, 101.755% 95.5604%, 95.0635% 4.17111%);"
    />
  </div>
</template>
