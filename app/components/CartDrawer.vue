<template>
  <div class="drawer drawer-end">
    <input id="cart-drawer" type="checkbox" class="drawer-toggle">
    <div class="drawer-content">
      <slot />
    </div>
    <div class="drawer-side z-20 duration-100">
      <label for="cart-drawer" aria-label="close sidebar" class="drawer-overlay" />
      <div
        class="
          grid min-h-full w-80 grid-rows-[auto_1fr] bg-base-200 p-4
          text-base-content duration-150
        "
      >
        <CartTitle />
        <CartContent />
      </div>
    </div>
  </div>
</template>
