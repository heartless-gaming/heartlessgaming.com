<template>
  <div>
    <Navbar />
    <header class="group relative mb-16 text-center">
      <HeroEffect />
      <div class="mx-auto max-w-xl px-2">
        <SvgLogoHeartlessgamingDark2020
          class="
            mx-auto box-content max-w-xs px-8 pb-5 drop-shadow-xl/80
            transition-transform duration-1000
            group-hover:scale-105 group-hover:-rotate-2
          "
          :font-controlled="false"
        />
        <h1 class="text-3xl font-bold uppercase text-shadow-lg/80">
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
