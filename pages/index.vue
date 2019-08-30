<template>
  <div>
    <svg-heartless-logo />
    <h1>La communautée multigaming avec 0 skill.</h1>
    <p>
      Nous vous invitons à suivre nos aventures sur Youtube ou à travers
      différents autres médias.
    </p>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
