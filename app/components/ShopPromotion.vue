<script setup lang="ts">
</script>

<template>
  <section class="hero mb-16">
    <div class="hero-content flex-col md:flex-row-reverse max-w-screen-lg lg:p-0">
      <div class="text-center lg:text-left">
        <h2 class="text-5xl font-bold">
          Nouveau T-shirt disponible&nbsp;!
        </h2>
        <p class="py-6">
          Distribué en imprésion à la demande par Printful le T-shirt Heartless Gaming unisex est disponible. Paiement en ligne sécurisé par stripe.
        </p>
      </div>
      <NuxtLink
        to="t-shirt-logo-brode-coton"
        class="card shadow-xl bg-base-200 w-full max-w-sm shrink-0 ring-1 ring-transparent hover:ring-4 ring-offset-0 hover:ring-offset-4 ring-offset-base-100 hover:ring-accent transition"
      >
        <figure class="skeleton rounded-b-none">
          <NuxtPicture
            sizes="360px sm:500px"
            width="500"
            height="500"
            src="/img/shirt/embroidered-heartlessgaming-t-shirt-burgundy.jpg"
          />
        </figure>
        <div class="card-body gap-y-6">
          <h3 class="card-title">
            T-shirt Heartless Gaming logo brodé 100% coton
          </h3>
          <button class="btn btn-primary uppercase">
            Acheter maintenant
          </button>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
