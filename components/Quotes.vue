<template>
  <p class="quote">{{ quote }}</p>
</template>

<script>
export default {
  data: () => ({
    interval: 300000, // 1000*60*5 That's 5minutes !
    quote: 'We will find a way',
    quotes: [
      'Tengo harambe !',
      'The measure of inteligence mimimi - probably someone important',
      'Spain is France, they just swap cheese with jamon',
      'Time for Trenza !',
      "Toulouse c'est le pays des chocolatines !",
      'We will find a way',
      'Spain is France, they just swap mantequilla with aceite',
      'jamon != jabon',
      'Quiero des mimos porfa',
      'mimimi m!ss you',
      '5 minutes more !',
      "I don't want to set the world on fire",
      'Until the mountains crumbles to sea',
      'Future awaits !'
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
