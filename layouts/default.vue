<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 62.5%; // equiv "10px", which is adapted to rem unit
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
  font-size: 1.4rem;

  @media (min-width: 576px) {
    font-size: 1.6rem;
  }
}

// layout
@media (min-width: 480px) {
  .autogrid {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-gap: 1rem;
  }
}

.main-grid {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

@media (min-width: 480px) {
  .footer-grid {
    display: grid;
    grid-auto-flow: column;
    grid-template-column: auto 1fr;
  }
}
// Reset
h1 {
  font-size: 2.8rem;

  @media (min-width: 576px) {
    font-size: 3.2rem;
  }
}

p {
  margin-bottom: 10px;
}

a {
  color: #2ba8e6;

  &:hover {
    color: darken(#2ba8e6, 20);
  }
}

// Helper
.wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
}

.wrapper--small {
  max-width: 575px;
  margin: 0 auto;
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

.mtl {
  margin-top: 20px;
}

.mbl {
  margin-bottom: 20px;
}

.mlm {
  margin-left: 15px;
}

.pls {
  padding-left: 10px;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-around {
  display: flex;
  justify-content: space-around;
}
// Buttons
a.btn {
  color: #fff;
  text-decoration: none;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.7), 0 3px 6px rgba(0, 0, 0, 0.2);
}

.btn {
  padding: 10px 30px;
  border-radius: 4px;
  border: 1px solid #35495e;

  &:hover {
    color: #fff;
    background-color: #35495e;
  }

  > svg {
    width: 30px;
  }

  &--small {
    padding: 5px 15px;
  }

  &--big {
    padding: 15px 35px;
    font-size: 1.2rem;
  }

  &--youtube,
  &--twitch {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 3px;
    border-style: solid;
    transition: background-color 250ms linear;

    > svg {
      width: 80px;
      fill: white;

      @media (min-width: 575px) {
        width: 150px;
      }
    }

    &:hover {
      background-color: transparent;
    }
  }

  &--youtube {
    border-color: #d42627;
    background-color: #d42627;
  }

  &--twitch {
    border-color: #663398;
    background-color: #663398;
  }
}
// Animations
@keyframes bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }

  75% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0, 5px, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.bounceInDown {
  animation-name: bounceInDown;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-iteration-count: 1;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-iteration-count: 1;
}
</style>
