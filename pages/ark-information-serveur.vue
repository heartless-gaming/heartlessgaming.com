<template>
  <div class="main-grid">
    <header class="page-head flex-center">
      <main-nav />
      <div class="mtl">
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
      </div>
    </header>
    <main class="wrapper">
      <h1 class="txtcenter">Information serveur ARK</h1>
      <h2 id="server-access">Accéder au serveur</h2>
      <ol>
        <li>Afficher la liste des serveurs "non officiel" en bas à droite</li>
        <li>Chercher le terme "Heartless Gaming"</li>
        <li>
          <strong>Attendre longuement</strong> que le serveur s'affiche enfin.
        </li>
      </ol>
      <h2 id="server-goal">Objectifs du serveur</h2>
      <p>
        L'objectif principal du serveur est de pouvoir compléter le
        <a href="https://ark.gamepedia.com/Ascension">processus d'ascension</a>.
      </p>
      <p>
        Pour accomplir ce but nous avons décidé de modifier les paramètres par
        défaut, pour avoir une éxpérience de jeu plus agréable.
      </p>
      <h2>Configuration du serveur</h2>
      <p>Je vais faire mes courses et je vous dis après.</p>
    </main>
    <footer class="page-footer">
      <div class="footer-grid wrapper">
        <credits />
        <quotes />
      </div>
      <mentra />
    </footer>
  </div>
</template>

<script>
import MainNav from '~/components/MainNav.vue'
import Logo from '~/components/Logo.vue'
import Credits from '~/components/Credits.vue'
import Quotes from '~/components/Quotes.vue'
import Mentra from '~/components/Mentra.vue'

export default {
  components: {
    MainNav,
    Logo,
    Credits,
    Quotes,
    Mentra
  }
}
</script>

<style lang="scss"></style>
