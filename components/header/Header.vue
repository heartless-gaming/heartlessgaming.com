<template>
  <header class="pt-3 pb-12 pr-2 pl-2 bg-gray-900 halo-azul">
    <header-nav />
    <nuxt-link to="/" class="max-w-xs sm:max-w-lg mx-auto block">
      <HeaderLogo />
    </nuxt-link>
    <h1
      class="mt-12 text-center text-4xl sm:text-5xl text-gray-200 zoomIn main-title-text-shadow letter-05 uppercase font-grandstander page-title-text-shadow"
    >
      {{ $route.name }}
    </h1>
  </header>
</template>
