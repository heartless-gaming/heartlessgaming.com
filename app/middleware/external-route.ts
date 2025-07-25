/**
 * Routes that should be navigated as external because headers
 * needs to be updatated on specific route
 * https://nuxt-security.vercel.app/advanced/faq#updating-headers-on-a-specific-route
 */
export default defineNuxtRouteMiddleware((to) => {
  // can we load this from nuxtcfg ?
  const externalRoutes = ['/checkout']

  if (
    import.meta.client
      && !useNuxtApp().isHydrating
      && to.path
      && externalRoutes.includes(to.path)
  ) {
    window.location.href = to.fullPath
  }
})
