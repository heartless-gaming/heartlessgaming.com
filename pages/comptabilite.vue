<template>
  <main class="bg-gray-900 flow-root text-gray-200 text-lg md:text-xl">
    <section class="mb-20 px-3 sm:px-10">
      <p class="max-w-prose mx-auto mb-12 leading-relaxed">
        Comptabilité complète depuis la première dépense en 2011. Les donations
        sont journalisées depuis le 16 novembre, date de la mise en place de la
        page de donation et également du nouveau site dopé au javascript
        "moderne".
      </p>
      <div class="mb-20">
        <div
          v-for="(bill, index) in billsData"
          :key="index"
          class="sm:flex px-2 py-3 items-center justify-between max-w-7xl mx-auto hover:bg-gray-800"
        >
          <p>{{ bill.date }}</p>
          <p class="flex-1 sm:px-5">{{ bill.description }}</p>
          <p
            :class="{
              'text-hlsred': bill.type === 'bill',
              'text-emerald-500': bill.type === 'donation',
            }"
          >
            {{ bill.amount }}&nbsp;€
          </p>
        </div>
      </div>
      <p class="text-center">
        Jenkins à proposer de mettre une loli sur cette page ¯\_(ツ)_/¯
      </p>
    </section>
    <img
      src="~/assets/img/lolita-png-sweet-lolita-anime-princess-peachie.png"
      alt="Sweet lolita Princess Peachie"
      class="max-w-xs sm:max-w-sm mx-auto"
    />
  </main>
</template>

<script>
export default {
  data: () => ({
    title: 'Comptabilité',
    stripePayouts: [],
    billsData: [],
  }),
  async fetch() {
    const baseURL = `${this.$nuxt.context.$config.baseURL}/api`
    const billsURL = [
      `${baseURL}/bills/ovh`,
      `${baseURL}/bills/sys`,
      `${baseURL}/donations`,
    ]

    // Run ALL queries at the same time and returns whatever the outcome
    const fetchData = await Promise.allSettled(
      billsURL.map(async (url) => {
        return await fetch(url).then((res) => res.json())
      })
    )

    // Format, reduce and sort the data from the API
    const response = fetchData.reduce((acc, bills) => {
      if (bills.status === 'fulfilled') {
        bills.value.forEach((bill) => acc.push(bill))
      }

      return acc
    }, [])
    // Sort by by oldest date first
    response.sort((a, b) => b.rawdate - a.rawdate)
    this.billsData = response
  },
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
