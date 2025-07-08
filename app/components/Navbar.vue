<template>
  <div
    class="
      sticky top-4 z-10 my-4 flex justify-center
      sm:top-8 sm:my-8
    "
  >
    <ul
      class="
        menu menu-horizontal gap-2 rounded-box bg-neutral/30 text-base shadow-lg
        backdrop-blur-xl
      "
    >
      <li>
        <NuxtLink
          to="/" class="
            group
            hover:bg-base-content/10
          " aria-label="Retour à la page d'accueil" title="Accueil" exact-active-class="bg-base-content/5"
        >
          <SvgLogoHeartlessgamingSkull2020
            class="
              size-6 p-0.5 transition-transform duration-300
              group-hover:-rotate-12
            "
            :font-controlled="false"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/t-shirt-logo-brode-coton" class="
            group
            hover:bg-base-content/10
          " exact-active-class="bg-base-content/5"
        >
          <Icon
            name="mdi:tshirt-crew"
            class="
              text-xl transition-transform duration-300
              group-hover:rotate-12
            "
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
