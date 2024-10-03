<template>
  <div class="roundded-box sticky top-4 flex justify-center my-4 z-10">
    <ul class="backdrop-blur-xl menu menu-horizontal bg-neutral/30 rounded-box gap-2 shadow-lg">
      <li>
        <NuxtLink to="/" class="group">
          <SvgLogoHeartlessgamingSkull2020
            class="size-5 group-hover:-rotate-12 transition-transform"
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
