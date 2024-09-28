<script setup lang="ts">
// Test auto deploy
</script>

<template>
  <div>
    <Navbar />
    <header class="text-center group mb-16">
      <div class="max-w-xl mx-auto px-2">
        <SvgLogoHeartlessgamingDark2020
          class="box-content max-w-xs mx-auto px-8 pb-5 drop-shadow-logo group-hover:-rotate-2 group-hover:scale-105 transition-transform duration-1000"
          :font-controlled="false"
        />
        <h1 class="text-3xl uppercase font-bold">
          Communauté <abbr title="Groupe de joueur partageant plusieurs jeux en ligne.">multigaming</abbr>
        </h1>
      </div>
    </header>
    <main>
      <ShopPromotion />
      <Donation />
    </main>
    <Footer />
  </div>
</template>
