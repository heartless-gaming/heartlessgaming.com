<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
.thicc-shadow {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5),
    0 4px 6px -2px rgba(0, 0, 0, 0.8);
}

.md-shadow {
  box-shadow: 0 8px 5px -4px rgba(0, 0, 0, 0.4);
}

.page-title-text-shadow {
  text-shadow: #000 0 0 5px, #000 0 0 2px;
}

.halo-azul {
  background-image: radial-gradient(
    ellipse farthest-side at 50% 30%,
    #263e5e 0px,
    transparent 100%
  );
}

.word-03 {
  word-spacing: 0.3rem;
}

.letter-05 {
  letter-spacing: 0.5rem;
}

.fill-white {
  fill: white;
}

// Animations
@keyframes appear {
  0% {
    opacity: 0;
  }
}

.appear {
  animation: 1s appear;
}

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

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-iteration-count: 1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
</style>
