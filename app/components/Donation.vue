<template>
  <section class="mb-16 max-w-screen-lg mx-4 lg:mx-auto bg-base-200 shadow-xl rounded-3xl py-8 px-4 sm:px-16 ring-1 ring-transparent hover:ring-4 ring-offset-0 hover:ring-offset-4 ring-offset-base-100 hover:ring-accent transition group">
    <h2 class="text-3xl mb-3">
      Faire une donation !
    </h2>
    <div class="sm:grid grid-cols-3">
      <div class="flex items-center justify-center sm:justify-normal">
        <Icon
          name="game-icons:take-my-money"
          size="13rem"
          class="opacity-80 -rotate-3 group-hover:rotate-6 group-hover:scale-110 transition"
        />
      </div>
      <div class="text-lg col-span-2">
        <p class="text-2xl mb-4">
          Que faisons-nous avec l'argent ?
        </p>
        <ul class="mb-6 list-disc pl-8">
          <li>On paye un serveur pour jouer et communiquer <em>(~30€ par mois)</em>.</li>
          <li>On paye un nom de domaine parce qu'on retient jamais l'ip du serveur.</li>
          <li>Rémunérer Markus pour le super logo qu'il nous a crée.</li>
          <li>
            Enrichir <NuxtLink
              class="pretty-link"
              to="https://skullmasher.io"
            >
              l'administrateur
            </NuxtLink>.
          </li>
        </ul>
        <NuxtLink
          to="https://buy.stripe.com/dR6aG3fIr1zg2Qw7ss"
          class="btn btn-accent uppercase btn-lg mb-1"
        >
          Take my money !
        </NuxtLink>
        <p class="text-sm">
          (Nous n'acceptons pas les bitcoicoin)
        </p>
      </div>
    </div>
  </section>
</template>
