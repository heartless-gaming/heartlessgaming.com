<template>
  <div>
    <HeaderBlog />
    <Nuxt />
    <Footer />
  </div>
</template>
<style>
.nuxt-content a {
  position: relative;
  z-index: 0;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  transition: color 0.15s ease;
}

.nuxt-content a::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  transform: translateY(calc(100% - 2px));
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    60deg,
    theme('colors.hlsred.light') 0%,
    theme('colors.hlsred.dark') 100%
  );
  transition: transform 0.15s ease;
}

.nuxt-content a:hover::before {
  transform: translateY(0);
  transition: transform 0.15s ease;
}
</style>
