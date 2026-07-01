export default defineNuxtRouteMiddleware(async (to) => {
  const { user } = await useUserSession()
  const perfil = (user.value as { perfil?: string } | null)?.perfil

  if (to.path === '/login') {
    if (user.value) {
      return navigateTo(perfil === 'administrador' ? '/admin' : '/ejecutivo')
    }

    return
  }

  if (!user.value) {
    return navigateTo('/login')
  }

  if (to.path.startsWith('/admin') && perfil !== 'administrador') {
    return navigateTo('/arriendos/base')
  }
})
