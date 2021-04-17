<template>
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="spinner-path" cx="25" cy="25" r="20" fill="none" stroke-width="7"></circle>
    </svg>
</template>

<style>
/* Spinner sauce : https://codepen.io/supah/pen/BjYLdW */
.spinner {
  width: 25px;
  height: 25px;
  animation: rotate 2s linear infinite;
}

.spinner-path {
  stroke: #fff;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

</style>
