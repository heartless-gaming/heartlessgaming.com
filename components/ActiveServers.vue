<template>
  <section>
    <div class="wrapper mbl mls mrs">
      <h2 class="mbl">Les serveurs de jeux</h2>
    </div>
    <div class="wrapper autogrid grid-gap-medium">
      <div class="pys">
        <h3 class="mbl"><svg-minecraft class="game-logo" />MINECRAFT</h3>
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
        <h3 class="mbl"><svg-csgo class="game-logo" />CS:GO</h3>
        <p>
          Serveur 1v1 128 tick pour régler des comptes et prouver qui est le
          plus gros pigeon avec son couteau hors de prix.
        </p>
      </div>
      <div class="pys">
        <h3 class="mbl">
          <img class="game-logo" src="~/assets/kf2.png" /> KILLING FLOOR&nbsp;2
        </h3>
        <p>
          3 serveurs disponible avec des niveaux de difficulté différant.
          Choisis ta manière favorite de mourir au bout de 1h sur le boss final.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SvgMinecraft from '~/assets/minecraft.svg'
import SvgCsgo from '~/assets/csgo.svg'

export default {
  components: {
    SvgMinecraft,
    SvgCsgo
  }
}
</script>

<style>
.game-logo {
  max-height: 40px;
  vertical-align: middle;
  padding-right: 10px;
}
</style>
