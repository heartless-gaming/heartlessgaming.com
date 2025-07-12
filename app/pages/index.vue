<template>
  <div class="flow-root">
    <CartDrawer>
      <Navbar />
      <header
        class="
          group relative mb-8 text-center
          sm:mb-16
        "
      >
        <HeroEffect />
        <div class="mx-auto max-w-xl px-2">
          <SvgLogoHeartlessgamingDark2020
            class="
              mx-auto mb-4 box-content max-w-40 drop-shadow-xl/80
              transition-transform duration-1000
              group-hover:scale-105 group-hover:-rotate-2
              sm:max-w-3xs
            "
            :font-controlled="false"
          />
          <h1
            class="text-3xl font-bold uppercase text-shadow-lg"
          >
            Communauté <abbr title="Groupe de joueur partageant plusieurs jeux en ligne.">Multigaming</abbr>
          </h1>
        </div>
      </header>
      <main>
        <ShopPromotion />
        <Donation />
      </main>
      <Footer />
    </CartDrawer>
  </div>
</template>
