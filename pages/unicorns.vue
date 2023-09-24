<template>
  <div class="relative grid items-center justify-center h-screen gradient overflow-hidden">
    <div class="absolute text-xl animation1">
      🦄
    </div>
    <div class="absolute text-3xl animation2">
      🦄
    </div>
    <div class="absolute text-5xl animation3">
      🦄
    </div>
    <div class="absolute text-5xl animation4">
      🦄
    </div>
    <div class="absolute text-5xl animation5">
      🦄
    </div>
    <div class="absolute text-5xl animation6">
      🦄
    </div>
    <div>
      <h1 class="animate-bounce text-5xl sm:text-7xl text-white font-bold">
        <span class="shadoooow">🦄 UNICORNS 🦄</span>
      </h1>
    </div>
  </div>
</template>

<style scoped>
  .gradient {
    background: linear-gradient(135deg, rgba(16,162,142,1) 0%, rgba(121,9,101,1) 35%, rgba(115,18,108,1) 57%, rgba(0,212,255,1) 100%);
  }

  .shadoooow {
    text-shadow: 0px 0px 5px firebrick, 0 0 1em blue, 0 0 0.2em blue;
  }

  .animation1 {
    animation: 5s linear infinite animation1;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .animation2 {
    animation: 4s linear infinite animation2;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .animation3 {
    animation: 3s linear infinite animation3;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .animation4 {
    animation: 10s linear infinite animation4;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .animation5 {
    animation: 3s linear infinite animation5;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .animation6 {
    animation: 3s linear infinite animation6;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

@keyframes animation1 {
  0% {
    transform: translate(110vw, -60vh) rotate(0deg) scale(3);
  }
  50% {
    transform: translate(10vw, 10vh) rotate(300deg) scale(6);
  }
  100% {
    transform: translate(110vw, -30vh) rotate(400deg) scale(12);
  }
}

@keyframes animation2 {
  0% {
    transform: translate(-1vw, -60vh) rotate(0deg) scale(0.4);
  }
  50% {
    transform: translate(90vw, -20vh) rotate(600deg) scale(3.2);
  }
  100% {
    transform: translate(100vw, 100vh) rotate(1200deg) scale(7);
  }
}

@keyframes animation3 {
  0% {
    transform: translate(-1vw, -40vh) rotate(0deg) scale(0.4);
  }
  50% {
    transform: translate(40vw, 20vh) rotate(600deg) scale(4);
  }
  100% {
    transform: translate(101vw, 60vh) rotate(1200deg) scale(2.6);
  }
}

@keyframes animation4 {
  0% {
    transform: translate(110vw, 30vh) rotate(0deg) scale(8);
  }
  50% {
    transform: translate(50vw, 10vh) rotate(300deg) scale(4);
  }
  100% {
    transform: translate(-10vw, -60vh) rotate(500deg) scale(2.6);
  }
}

@keyframes animation5 {
  0% {
    transform: translate(-1vw, -40vh) rotate(0deg) scale(0.4);
  }
  50% {
    transform: translate(40vw, 20vh) rotate(600deg) scale(4);
  }
  100% {
    transform: translate(101vw, 60vh) rotate(1200deg) scale(2.6);
  }
}

@keyframes animation6 {
  0% {
    transform: translate(-1vw, -40vh) rotate(0deg) scale(0.4);
  }
  50% {
    transform: translate(40vw, 20vh) rotate(600deg) scale(4);
  }
  100% {
    transform: translate(101vw, 60vh) rotate(1200deg) scale(2.6);
  }
}
</style>
