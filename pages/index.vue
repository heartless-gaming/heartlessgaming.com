<template>
  <div class="main-grid">
    <header>
      <svg-heartless-logo />
      <h1 class="subtitle color--white">
        La communautée multigaming avec 0 skill.
      </h1>
      <p>
        Nous vous invitons à suivre nos aventures sur Youtube ou à travers
        différents autres médias.
      </p>
    </header>
    <main></main>
    <footer></footer>
  </div>
</template>

<script>
import SvgHeartlessLogo from '~/assets/heartlessgaming-logo-white.svg'

export default {
  components: {
    SvgHeartlessLogo
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
