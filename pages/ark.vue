<template>
  <main class="bg-gray-900 flow-root">
    <div
      class="max-w-prose mx-auto mb-20 px-2 sm:px-6 prose prose-lg md:prose-xl"
    >
      <div>
        <h2 id="rejoindre-serveur" class="font-grandstander">
          Rejoindre le serveur
        </h2>
        <ol>
          <li>Afficher la liste des serveurs "non officiel" en bas à droite</li>
          <li>Chercher le terme "Heartless Gaming"</li>
          <li>
            <strong>Attendre longuement</strong> que le serveur s'affiche enfin.
          </li>
        </ol>
      </div>
      <div>
        <h2 id="objectif-serveur" class="font-grandstander">
          Objectifs du serveur
        </h2>
        <p>
          L'objectif principal du serveur est de pouvoir compléter le
          <a class="underline" href="https://ark.gamepedia.com/Ascension">
            processus d'ascension
          </a>
          .
        </p>
        <p>
          Pour accomplir ce but nous avons décidé de modifier les paramètres par
          défaut, pour avoir une expérience de jeu plus agréable.
        </p>
      </div>
      <div>
        <h2 id="config-serveur" class="font-grandstander">
          Configuration du serveur
        </h2>
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
    </div>
  </main>
</template>

<script>
export default {
  data: () => ({
    title: 'ARK',
  }),
  head() {
    return {
      title: 'ARK',
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
