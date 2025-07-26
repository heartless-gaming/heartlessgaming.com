<template>
  <section
    class="
      group mx-4 mb-16 max-w-screen-lg rounded-3xl bg-base-200 px-4 py-8
      shadow-xl ring-1 ring-transparent ring-offset-0 ring-offset-base-100
      transition
      hover:ring-4 hover:ring-accent hover:ring-offset-4
      sm:px-16
      lg:mx-auto
    "
  >
    <h2 class="mb-3 text-3xl">
      Faire une donation !
    </h2>
    <div
      class="
        grid-cols-3
        sm:grid
      "
    >
      <div
        class="
          flex items-center justify-center
          sm:justify-normal
        "
      >
        <Icon
          name="game-icons:take-my-money"
          size="16rem"
          class="
            -rotate-3 opacity-80 transition
            group-hover:scale-110 group-hover:rotate-6
          "
        />
      </div>
      <div class="col-span-2 text-lg">
        <p class="mb-4 text-2xl">
          Que faisons-nous avec l'argent ?
        </p>
        <ul
          class="
            mb-6 list-disc pl-8
            marker:text-accent
          "
        >
          <li>On paye un serveur pour jouer et communiquer <em>(~30€ par mois)</em></li>
          <li>On paye un nom de domaine parce qu'on retient jamais l'ip du serveur</li>
          <li>Rémunérer Markus pour le super logo qu'il nous a crée</li>
          <li>
            Enrichir <NuxtLink
              class="pretty-link"
              to="https://skullmasher.io"
            >
              l'administrateur
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink
          to="https://buy.stripe.com/dR6aG3fIr1zg2Qw7ss"
          class="btn mb-2 w-full uppercase btn-lg btn-accent"
        >
          <span
            class="
              hidden
              md:inline
            "
          >Tu le mérites,</span>
          <span>Prends mon argent !</span>
        </NuxtLink>
        <p class="text-center text-sm text-base-content/50 italic">
          (Nous n'acceptons pas les bitcoincoin)
        </p>
      </div>
    </div>
  </section>
</template>
