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
      <ul>
        <li>PVE activé</li>
        <li>
          Pas d'attente de 24h pour changer ses statistiques après consomation
          d'un mind wipe tonic
        </li>
        <li>Vitesse d'éclosion des oeufs x10</li>
        <li>Maturation des bébé dino x20</li>
        <li>
          Qualité des loots dans les rayons 2 (valeur original 1, valeur maximal
          5)
        </li>
        <li>
          Les dinos capturer ont deux fois moins faim que la normal
        </li>
        <li>
          Les dinos volants sont autorisé à transporter les joueur du serveur
        </li>
        <li>La caméra 3ème personnes est autorisé</li>
        <li>Notifications lorsqu'un joueur ce connecte ou ce déconnecte</li>
        <li>Sauvegarde du monde toute les 15 minutes</li>
        <li>Niveau des dinos entre 1 et 150</li>
        <li>Crosshair et hitmarker pour les armes à feu</li>
        <li>
          Commande gamma autorisé dans la console, utile pour les nuits sombres
        </li>
        <li>Affichage des autres joueurs sur la carte</li>
        <li>La nuit est deux fois plus rapide que le jour.</li>
        <li>Recolte des ressources 5x plus éfficace</li>
        <li>
          Votre personnage a faim moins rapidement (valeur acutel 0.6 valeur
          original 1)
        </li>
        <li>
          Votre personnage se désydrate plus lentement (valeur actuel 0.75,
          valeur original 1)
        </li>
        <li>Capture des dinos 6x plus rapide</li>
        <li>XP gagné 7x plus rapidement</li>
        <li>
          Toute les commandes éxécuté par une administrateur sont affiché dans
          le chat
        </li>
        <li>N'importe quel joueur est autorisé à s'occupé d'un bébé dino</li>
        <li>Les dommages effectué sous forme de texte n'ai pas affiché</li>
      </ul>
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
