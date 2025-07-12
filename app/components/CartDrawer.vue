<template>
  <div class="drawer drawer-end">
    <input id="cart-drawer" type="checkbox" class="drawer-toggle">
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side z-20">
      <label for="cart-drawer" aria-label="close sidebar" class="drawer-overlay" />
      <div class="min-h-full w-80 bg-base-200 p-4 text-base-content">
        <CartTitle />
        <CartContent />
      </div>
    </div>
  </div>
</template>
