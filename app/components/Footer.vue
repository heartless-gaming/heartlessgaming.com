<template>
  <footer class="bg-base-300 py-12 px-2">
    <div class="max-w-lg mx-auto">
      <FooterIconLinks />
      <p class="font-bold uppercase text-2xl text-center mb-6 tracking-wide">
        Play more, care less, be Heartless
      </p>
      <div class="mb-6 leading-loose">
        <p>Pas de cookie 🍪 sur ce site car il fait un régime kéto 🥑</p>
        <p>
          Logo réalisé par Markus - Site réalisé par <NuxtLink to="https://skullmasher.io" external class="pretty-link">
            Skullmasher
          </NuxtLink>
        </p>
        <p>
          <NuxtLink
            class="pretty-link"
            to="https://github.com/heartless-gaming/heartlessgaming.com"
          >
            code sauce
          </NuxtLink>
        </p>
      </div>
      <RandomQuote />
    </div>
  </footer>
</template>
