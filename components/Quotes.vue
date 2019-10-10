<template>
  <section class="quote">
    <blockquote>{{ quote }}</blockquote>
  </section>
</template>

<script>
export default {
  data: () => ({
    interval: 60000, // 1000*60*5 That's 5minutes !
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
      `Ah mais on peut jouer a plusieurs en MMO ?? - Skullmasher`,
      `D'ailleurs guilty tout a l'heure je me suis mouché sa a fait la tete a coppé - Don`,
      `Je vait pas aller me perdre sans un pays ou ya pas de saucisson ! j'ai deja fait trois mois en angleterre - Eljam`,
      `Tu voit je t'avait dit que c'est toi qui allez me le payez arma 3 - Don`,
      `Bah quoi tu me demande entre la peste et le cholera moi je te proposes le cancer - Don`,
      `Enfin don toi entre macron et lepen tu voterais christine boutin - Guilty`,
      `Tiens j'ai envie de boire du jus d'orange, il est ou mon couteau ? - Eljam`,
      `C'est les russes qui ont crée jupiter a partir des pets d'hitler - Don`,
      `JE VAIS ME LAVER !! - Markus`,
      `En même temps le "ta mere elle se fait prendre par des poney dans les buissons" il a peut etre pas kiffer - Markus`,
      `La c'est la défaillance de nationalité et la déchéance du skill - Guilty`,
      `Si on l'avait pas trouvé on l'aurait pas inventé - Killdaddy`,
      `Pedo bear euh bear euh bear traverse tout les continent, a la recherche d'enfaaaaannt - chants traditionel`,
      `Tu parles Espagnole ? Oui je fais des éfforts. Je ne savais pas que tu savais en faire, je ne parle pas de l'éspagnole.`
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
  text-align: right;
  color: #8a8a8a;
  max-width: 480px;
  justify-self: end;
  font-style: italic;
}
</style>
