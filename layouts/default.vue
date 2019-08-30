<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: #333;
  color: #fafafa;
}

// layout
.main-grid {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
// Reset
p {
  margin-bottom: 10px;
}

svg {
  // max-width: 100%;
}

// Helper
.wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
}

.wrapper--small {
  max-width: 575px;
  margin: 0 auto;
  padding: 10px;
}

/* Helpers */
.txtcenter {
  text-align: center;
}

.txtright {
  text-align: right;
}

.mbs {
  margin-bottom: 10px;
}

.mbm {
  margin-bottom: 15px;
}

.mbl {
  margin-bottom: 20px;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
