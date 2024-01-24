export default defineNuxtRouteMiddleware((to, from) => {
  // return abortNavigation()
  // return navigateTo('/')

  console.log('middle', to, from)
})