<template>
  <main class="bg-gray-900 flow-root">
    <section
      class="max-w-prose mx-auto mb-20 px-3 sm:px-10 prose prose-lg md:prose-xl"
    >
      <div>
        <p>
          Nous avons décidé de rendre les comptes publics le 16 novembre 2020,
          date de la mise en place de la page de donation. La première dépense
          Heartless Gaming remonte à 2011.
        </p>
      </div>
      <div class="mb-24">
        <h2 class="font-bold">2021</h2>
        <h3>Janvier</h3>
        <div class="flex justify-between">
          <div>Serveur</div>
          <div class="text-hlsred">-47.99&nbsp;€</div>
        </div>
        <div class="flex justify-between">
          <div>Nom de domaine heartlessgaming.com</div>
          <div class="text-hlsred">-10,00&nbsp;€</div>
        </div>
        <h2 class="font-bold">2020</h2>
        <h3>Décembre</h3>
        <div class="flex justify-between">
          <div>Serveur</div>
          <div class="text-hlsred">-47.99&nbsp;€</div>
        </div>
        <h3>Novembre</h3>
        <div class="flex justify-between">
          <div>Donation</div>
          <div class="text-green-500">49.05&nbsp;€</div>
        </div>
        <div class="flex justify-between">
          <div>Donation</div>
          <div class="text-green-500">44.12&nbsp;€</div>
        </div>
        <div class="flex justify-between">
          <div>Donation</div>
          <div class="text-green-500">9.61&nbsp;€</div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data: () => ({
    title: 'Comptabilité',
  }),
  head() {
    return {
      title: this.title,
      titleTemplate: '%s - Heartless Gaming',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Objectifs, informations et variables de configuration du serveur de jeu ARK: Survival Evolved Heartless Gaming.',
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://heartlessgaming.com/ark-information-serveur',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.title} - Heartless Gaming`,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Objectifs, informations et variables de configuration du serveur de jeu ARK: Survival Evolved Heartless Gaming.',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://heartlessgaming.com/icon.png',
        },
      ],
    }
  },
}
</script>
