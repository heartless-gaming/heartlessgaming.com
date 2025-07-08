<template>
  <div class="sticky top-4 z-10 my-4 flex justify-center">
    <ul
      class="
        menu menu-horizontal gap-2 rounded-box bg-neutral/30 shadow-lg
        backdrop-blur-xl
      "
    >
      <li>
        <NuxtLink to="/" class="group" aria-label="Retour à la page d'accueil">
          <SvgLogoHeartlessgamingSkull2020
            class="
              size-5 transition-transform
              group-hover:-rotate-12
            "
            :font-controlled="false"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/t-shirt-logo-brode-coton" exact-active-class="active">
          <Icon
            name="mdi:tshirt-crew"
            class="text-xl"
          />
          <span>T-shirt</span>
        </NuxtLink>
      </li>
      <li>
        <ThemeDropdown />
      </li>
    </ul>
  </div>
</template>
