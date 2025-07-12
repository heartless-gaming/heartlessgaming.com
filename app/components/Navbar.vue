<script setup lang="ts">
const store = useCartStore()
const { itemCount } = storeToRefs(store)
</script>

<template>
  <nav
    class="
      sticky top-4 z-10 mx-auto my-4 w-fit rounded-box bg-neutral/20 shadow
      shadow-neutral/60 backdrop-blur-lg
      sm:top-8 sm:my-8
    "
  >
    <ul
      class="menu menu-horizontal items-center gap-2 text-base"
    >
      <li>
        <NuxtLink
          to="/"
          class="
            group
            hover:bg-base-content/10
          "
          aria-label="Retour à la page d'accueil"
          title="Accueil"
          exact-active-class="bg-base-content/5"
        >
          <SvgLogoHeartlessgamingSkull2020
            class="
              size-6.5 p-0.5 transition-transform duration-300
              group-hover:-rotate-12
            "
            :font-controlled="false"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/t-shirt-logo-brode-coton"
          class="
            group
            hover:bg-base-content/10
          "
          exact-active-class="bg-base-content/5"
        >
          <Icon
            name="mdi:tshirt-crew"
            size="1.5em"
            class="
              transition-transform duration-300
              group-hover:rotate-12
            "
          />
          <span
            class="
              hidden
              sm:block
            "
          >T-shirt</span>
        </NuxtLink>
      </li>
      <li>
        <ThemeDropdown />
      </li>
      <li>
        <label for="cart-drawer" class="drawer-button group">
          <Icon
            name="solar:bag-heart-bold"
            size="1.4em"
            class="
              transition-transform duration-300
              group-hover:scale-125 group-hover:rotate-5
            "
          />
          <span>Panier <span v-show="itemCount">({{ itemCount }})</span></span>
        </label>
      </li>
    </ul>
  </nav>
</template>
