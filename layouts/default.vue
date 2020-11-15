<template>
  <div>
    <Nuxt />
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
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 0;
  background-color: #26262b;
  color: #fafafa;
  font-size: 1.4rem;
  line-height: 1.5;

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

@media (min-width: 480px) {
  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
}

.grid-gap-medium {
  grid-gap: 2rem;
}

.main-grid {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.footer-grid {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2rem;
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
    color: lighten(#2ba8e6, 20);
  }
}

// Helpers
.wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
}

.wrapper--small {
  max-width: 575px;
}

.wrapper--large {
  max-width: 1200px;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-around {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// Buttons
a.btn {
  color: #fff;
  text-decoration: none;
}

button,
.btn {
  display: inline-block;
  padding: 10px 30px;
  border-radius: 4px;
  border: 3px solid #126c99;
  transition: background-color 250ms ease-in-out;
  color: #fff;
  background-color: #126c99;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }

  > svg {
    width: 30px;
    vertical-align: middle;
  }

  &--small {
    padding: 5px 15px;
  }

  &--big {
    padding: 15px 35px;
  }
}

// Header & Footer
.page-head {
  background: #0f2027;
  background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
  border-bottom: 3px #e52f00 solid;
  box-shadow: 0 17px 15px -8px rgba(0, 0, 0, 0.4);
}

.page-head--masthead {
  @media (min-width: 768px) {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
}

.page-footer {
  position: relative;
  background-color: #222327;
  padding-top: 40px;
  padding-bottom: 20px;
  clip-path: polygon(0 calc(0% + 4vw), 100% 0, 100% 100%, 0 100%);

  @media (min-width: 576px) {
    padding-top: 70px;
  }

  @media (min-width: 992px) {
    padding-top: 120px;
  }
}

// card
.card {
  margin: 10px;
  padding: 10px;
  background-color: #40404d;
  border-radius: 5px;
  box-shadow: 0 2px 5px 0 rgba(6, 6, 6, 0.66);
}

// utilities
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

.mt0 {
  margin-top: 0;
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

.ptl {
  padding-top: 20px;
}

.pls {
  padding-left: 10px;
}

.pll {
  padding-left: 20px;
}

.prs {
  padding-right: 10px;
}

.pys {
  padding-right: 10px;
  padding-left: 10px;
}

.pyl {
  padding-right: 20px;
  padding-left: 20px;
}

.pas {
  padding: 10px;
}

.no-list-style {
  list-style: none;
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

@keyframes appear {
  0% {
    opacity: 0;
  }
}

.appear {
  animation: 1s appear;
}
</style>
