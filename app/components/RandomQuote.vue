<script setup lang="ts">
const interval = 60000 // It's in ms so 1000*60*1 that's 1minutes YAY for math

const quote = ref('We will find a way')

const quotes = [
    `Bon c'est une bonne addition à mon dossier "grossisant" ! - GuiltysparK`,
    `Oh ah pourquoi ya du sang partout ? ah bah il est mort le vendeur de sushi. - Eljam`,
    `Quest-ce qu'on est sérée, au fond de ce markus ! - Don`,
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
    `Je vait pas aller me perdre dans un pays ou ya pas de saucisson ! J'ai deja fait trois mois en angleterre - Eljam`,
    `Bah quoi tu me demande entre la peste et le cholera moi je te proposes le cancer - Don`,
    `Enfin don toi entre macron et lepen tu voterais christine boutin - Guilty`,
    `Tiens j'ai envie de boire du jus d'orange, il est ou mon couteau ? - Eljam`,
    `C'est les russes qui ont crée jupiter a partir des pets d'hitler - Don`,
    `JE VAIS ME LAVER !! - Markus`,
    `En même temps le "ta mere elle se fait prendre par des poney dans les buissons" il a peut etre pas kiffer - Markus`,
    `La c'est la défaillance de nationalité et la déchéance du skill - Guilty`,
    `Si on l'avait pas trouvé on l'aurait pas inventé - Killdaddy`,
    `Pedo bear euh bear euh bear traverse tout les continent, a la recherche d'enfaaaaannt - chants traditionel`,
    `Tu parles Espagnole ? Oui je fais des éfforts. Je ne savais pas que tu savais en faire, je ne parle pas de l'éspagnole.`,
    `Je ne suis pas une personne de haine, mais parfois tu arrives dans ma vie et je pense à l'holocauste - Skullmasher à Markus`,
    `kinder bueno dans tes nachos a toi aussi mon jeune ami semi-ibérique ! - Guiltyspark`,
    `J'ai entendu de la lumière, je suis rentré - Skullmasher`,
    `Le mec il overclock son proco pour jouer à rocket league - Eljam à Zenix`,
    `Il me faudrai un mugay pour gratter mon nez, il est long et fin. - Don`,
    `Guilstyspark c'est un guilty overclokable parce il a un K - Don`,
    `Dans le prochain rpg, j'appelle mon perso judanus - Eljam`,
    `Si ta pas d'attestation tu respecte pas le pare-feu (couvre-feu) Eljam - Zenix`,
    `Pourquoi y a une pizza 4 fromages sur ma cg ? - Eljam`,
    `We will find a way - Skullmasher`,
  // `Eljam :"c'est la force centripete" Don : "Comme le human" Eljam & Don : "le human centripete !"`,
  // `Quand c'est une merde que tu es obligé d'utiliser, c'est toujours mieu si elle est un peu poli - Eljam`
]

const setRandomQuote = () => quote.value = quotes[Math.floor(Math.random() * quotes.length)]

onMounted(() => {
  setRandomQuote()

  setInterval(() => {
    setRandomQuote()
  }, interval)
})
</script>

<template>
  <blockquote class="">
    {{ quote }}
  </blockquote>
</template>
