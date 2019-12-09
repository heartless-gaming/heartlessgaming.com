<template>
  <div class="main-grid">
    <header class="page-head flex-center">
      <main-nav />
      <div class="wrapper mtl">
        <nuxt-link to="/">
          <logo />
        </nuxt-link>
      </div>
    </header>
    <main class="flex-center">
      <div class="wrapper">
        <h1 class="txtcenter">{{ title }}</h1>
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
          <a href="https://ark.gamepedia.com/Ascension">processus d'ascension</a
          >.
        </p>
        <p>
          Pour accomplir ce but nous avons décidé de modifier les paramètres par
          défaut, pour avoir une expérience de jeu plus agréable.
        </p>
        <h2>Configuration du serveur</h2>
        <ul>
          <li>PVE activé</li>
          <li>
            Pas d'attente de 24h pour changer ses statistiques après
            consommation d'un mind wipe tonic
          </li>
          <li>Vitesse d'éclosion des oeufs x10</li>
          <li>Maturation des bébés dino x20</li>
          <li>
            Qualité des loots dans les rayons 2 (valeur originale 1, valeur
            maximale 5)
          </li>
          <li>Les dinos capturés ont deux fois moins faim</li>
          <li>
            Les dinos volants sont autorisés à transporter les joueurs du
            serveur
          </li>
          <li>La caméra 3ème personnes est autorisé</li>
          <li>Notifications lorsqu'un joueur se connecte ou se déconnecte</li>
          <li>Sauvegarde du monde toutes les 15 minutes</li>
          <li>
            Niveaux des dinos entre 1 et 150 (sauf les wyvern et les dinos des
            cavernes parce qu'ils sont méchants comme sa)
          </li>
          <li>Crosshair et hitmarker activer</li>
          <li>
            Commande gamma autorisé dans la console, utile pour les nuits
            sombres
          </li>
          <li>Affichage des autres joueurs sur la carte</li>
          <li>La nuit est deux fois plus rapide que le jour.</li>
          <li>Récolte des ressources 5x plus efficaces</li>
          <li>
            Votre personnage a moins rapidement faim (valeur actuelle 0.6 valeur
            originale 1)
          </li>
          <li>
            Votre personnage se déshydrate plus lentement (valeur actuelle 0.75,
            valeur originale 1)
          </li>
          <li>Capture des dinos 6x plus rapides</li>
          <li>XP gagné 7x plus rapidement</li>
          <li>
            Toutes les commandes exécutées par un admin sont affichées dans le
            chat à la vue de tous.
          </li>
          <li>N'importe quel joueur est autorisé à s'occuper d'un bébé dino</li>
          <li>Les dommages effectués ne sont pas affichés</li>
        </ul>
      </div>
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
  },
  data: () => ({
    title: 'Information serveur ARK'
  }),
  head() {
    return {
      title: 'Information serveur ARK',
      titleTemplate: '%s - Heartless Gaming',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Objectifs, informations et variables de configuration du serveur de jeu ARK: Survival Evolved Heartless Gaming.'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://heartlessgaming.com/ark-information-serveur'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${this.title} - Heartless Gaming`
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content:
            'Objectifs, informations et variables de configuration du serveur de jeu ARK: Survival Evolved Heartless Gaming.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://heartlessgaming.com/icon.png'
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
