<script setup lang="ts">
</script>

<template>
  <section class="hero mb-16">
    <div
      class="
        hero-content max-w-screen-lg flex-col
        md:flex-row-reverse
        lg:p-0
      "
    >
      <div
        class="
          text-center
          lg:text-left
        "
      >
        <h2 class="text-5xl font-bold">
          Nouveau T-shirt disponible&nbsp;!
        </h2>
        <p class="py-6 text-lg">
          Distribué en imprésion à la demande par Printful le T-shirt Heartless Gaming unisex est disponible. Paiement en ligne sécurisé par stripe.
        </p>
      </div>
      <NuxtLink
        to="t-shirt-logo-brode-coton"
        class="
          card w-full max-w-sm shrink-0 bg-base-200 shadow-xl ring-1
          ring-transparent ring-offset-0 ring-offset-base-100 transition
          hover:ring-4 hover:ring-accent hover:ring-offset-4
        "
      >
        <figure class="skeleton rounded-b-none">
          <NuxtPicture
            sizes="360px sm:500px"
            width="384"
            height="384"
            src="/img/shirt/embroidered-heartlessgaming-t-shirt-burgundy.jpg"
            alt="Homme portant un tee shirt bordeaux sur fond abstrait"
          />
        </figure>
        <div class="card-body gap-y-6">
          <h3 class="card-title">
            T-shirt Heartless Gaming logo brodé 100% coton
          </h3>
          <button class="btn uppercase btn-primary">
            Acheter maintenant
          </button>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
