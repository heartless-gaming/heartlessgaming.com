<template>
  <div>
    <Navbar />
    <header class="group relative mb-16 text-center">
      <HeroEffect />
      <div class="mx-auto max-w-xl px-2">
        <SvgLogoHeartlessgamingDark2020
          class="mx-auto box-content max-w-xs px-8 pb-5 drop-shadow-logo transition-transform duration-1000 group-hover:-rotate-2 group-hover:scale-105"
          :font-controlled="false"
        />
        <h1 class="text-3xl font-bold uppercase" style="text-shadow:rgba(0, 0, 0, 0.5) 0px 5px 10px, #000 0px 5px 20px;">
          Communauté <abbr title="Groupe de joueur partageant plusieurs jeux en ligne.">Multigaming</abbr>
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
