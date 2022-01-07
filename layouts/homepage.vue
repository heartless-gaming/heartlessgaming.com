<template>
  <div>
    <HeaderHomepage />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
.animate-entrence {
  animation: fade-in-up 1s ease-out;
}

.gray-gradient {
  background-image:
    radial-gradient(
      ellipse farthest-side at 50% 30%,
      #263e5e 0,
      transparent 100%
    );
}

.fill-white {
  fill: white;
}

/* Animations */
@keyframes appear {
  0% {
    opacity: 0;
  }
}

.appear {
  animation: 1s appear;
}

@keyframes bounce-in-down {
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

.bounce-in-down {
  animation-name: bounce-in-down;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-iteration-count: 1;
}

@keyframes zoom-in {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoom-in {
  animation-name: zoom-in;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-iteration-count: 1;
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-down {
  animation-name: fade-in-down;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-iteration-count: 1;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fade-in-up {
  animation-name: fade-in-up;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
</style>
