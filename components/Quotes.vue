<template>
  <p class="quote">{{ quote }}</p>
</template>

<script>
export default {
  data: () => ({
    interval: 300000, // 1000*60*5 That's 5minutes !
    quote: 'We will find a way',
    quotes: [
      `Bon c'est une bonne addition à mon dossier "grossisant" ! - GuiltysparK`,
      `Oh ah pourquoi ya du sang partout ? ah bah il est mort le vendeur de suschi. - Eljam`,
      `Quest-ce qu'on est sérée , au fond de ce markus ! - Don`,
      `T'a cas coller 1 milliard de fromton sous ta baraque tu vera si l'odeur remonte pas !! - Don`,
      `Pour la peine j'ai coller mon coude dans ton mamie nova - Don`,
      `Ils ont un camouflage naturel, comme les noirs la nuit - GuiltysparK`,
      `Non t'est pas noir, tes juste gris avec un peu de marron - GuiltysparK`,
      `Tu veux un cornichon pour faire passer l'amertume ? - Lan Aout 2013`,
      `L'eau c'est impermeable - Mugetsu`,
      `Tu va te retrouver comme le culmasher, avec un serveur sur les bras et des trou du cul dessus - Skullmasher`,
      `Ça fait tellement longtemps qu'on part a volo que ça m'etonne qu'on soit pas deja arrivé ! - Guiltyspark`,
      `On va y jouer regulierement souvent. - Skullmasher`,
      `Ah mais on peut jouer a plusieurs en MMO ?? - Skullmasher`
    ]
  }),
  mounted() {
    this.getRandomQuote() // Set a random quote onload
    this.initQuoteInterval() // change the quote every X minutes
  },
  methods: {
    getRandomQuote() {
      this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)]
    },
    initQuoteInterval() {
      return setInterval(() => {
        this.getRandomQuote()
      }, this.interval)
    }
  }
}
</script>

<style>
.quote {
  display: none;
  margin-right: 10px;
  text-align: right;
  color: #666;
}

@media (min-width: 576px) {
  .quote {
    display: block;
  }
}
</style>
