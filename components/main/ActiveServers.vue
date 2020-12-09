<template>
  <section>
    <div class="wrapper mbl mls mrs">
      <h2 class="mbl">Les serveurs de jeux</h2>
    </div>
    <div class="wrapper grid-2 grid-gap-medium">
      <div class="pys">
        <h3 class="mbl"><svg-minecraft class="h-12" />MINECRAFT</h3>
        <p>
          Contacter un membre de la communauté pour rejoindre le serveur et
          faire
          <a href="https://www.heartlessgaming.com/mcmap">
            des bâtiments moches
          </a>
          avec nous&nbsp;!
        </p>
      </div>
      <div class="pys">
        <h3 class="mbl"><svg-csgo class="h-12" />CS:GO</h3>
        <p>
          Serveur 1v1 128 tick pour régler des comptes et prouver qui est le
          plus gros pigeon avec son couteau hors de prix.
        </p>
      </div>
      <div class="pys">
        <h3 class="mbl">
          <img class="h-12" src="~/assets/kf2.png" /> KILLING FLOOR&nbsp;2
        </h3>
        <p>
          3 serveurs disponibles en hard, suicidal et endless. Choisis ta
          manière favorite de mourir au bout de 1h sur le boss final.
        </p>
      </div>
      <div class="pys">
        <h3 class="mbl">
          <img class="h-12" src="~/assets/ark.png" /> ARK: Survival Evolved
        </h3>
        <p>
          Le meilleur simulateur de caca du monde. Serveur privé
          <nuxt-link to="ark-information-serveur">
            configuré par vote démocratique
          </nuxt-link>
          à sensibilité communiste.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SvgMinecraft from '~/assets/minecraft.svg?inline'
import SvgCsgo from '~/assets/csgo.svg?inline'

export default {
  components: {
    SvgMinecraft,
    SvgCsgo,
  },
}
</script>
