<script setup lang="ts">
const route = useRoute()
const { user, clear } = useUserSession()

const perfil = computed(() => (user.value as any)?.perfil ?? '')
const esAdministrador = computed(() => perfil.value === 'administrador')
const esEjecutivo = computed(() => perfil.value === 'ejecutivo')

const enlacesOperacion = computed(() => [
  { label: 'Inicio', to: esAdministrador.value ? '/admin' : '/ejecutivo', activeOn: esAdministrador.value ? '/admin' : '/ejecutivo' },
  { label: 'Arriendos', to: '/arriendos/base', activeOn: '/arriendos' },
  { label: 'Nuevo arriendo', to: '/arriendos/nuevo', activeOn: '/arriendos/nuevo' },
  { label: 'Estados', to: '/vehiculos/estado', activeOn: '/vehiculos/estado' },
  { label: 'Mi perfil', to: '/perfil', activeOn: '/perfil' }
])

const enlacesAdmin = computed(() => [
  { label: 'Usuarios', to: '/admin/usuarios', activeOn: '/admin/usuarios' },
  { label: 'Vehículos', to: '/admin/vehiculos', activeOn: '/admin/vehiculos' },
  { label: 'Tipos', to: '/admin/tipov', activeOn: '/admin/tipov' }
])

const inicio = computed(() => (esAdministrador.value ? '/admin' : '/ejecutivo'))

function estaActivo(enlace: { to: string; activeOn?: string }) {
  if (enlace.to === '/admin') {
    return route.path === '/admin'
  }

  return route.path === enlace.to || (enlace.activeOn ? route.path.startsWith(enlace.activeOn) : false)
}

async function logout() {
  await clear()
  await navigateTo('/login')
}
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <nav class="border-b border-gray-700 bg-gray-800/95 px-4 py-3 backdrop-blur">
      <div class="container mx-auto flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex items-center justify-between gap-4">
          <NuxtLink :to="inicio" class="text-lg font-bold tracking-wide text-white">
            RentCar System
          </NuxtLink>

          <NuxtLink :to="inicio" class="rounded-full border border-gray-600 px-3 py-1 text-xs font-semibold text-gray-200 transition-colors hover:border-blue-400 hover:text-blue-300 lg:hidden">
            Inicio
          </NuxtLink>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <div class="flex flex-wrap items-center gap-2 rounded-full border border-gray-700 bg-gray-900/60 px-2 py-1">
            <span class="px-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">Operación</span>
            <NuxtLink
              v-for="enlace in enlacesOperacion"
              :key="enlace.to"
              :to="enlace.to"
              :class="[
                'rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                estaActivo(enlace)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              ]"
            >
              {{ enlace.label }}
            </NuxtLink>
          </div>

          <div v-if="esAdministrador" class="flex flex-wrap items-center gap-2 rounded-full border border-gray-700 bg-gray-900/60 px-2 py-1">
            <span class="px-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gray-400">Admin</span>
            <NuxtLink
              :to="'/admin'"
              :class="[
                'rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                estaActivo({ to: '/admin' })
                  ? 'bg-green-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              ]"
            >
              Panel
            </NuxtLink>
            <NuxtLink
              v-for="enlace in enlacesAdmin"
              :key="enlace.to"
              :to="enlace.to"
              :class="[
                'rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                estaActivo(enlace)
                  ? 'bg-green-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              ]"
            >
              {{ enlace.label }}
            </NuxtLink>
          </div>

          <div v-else-if="esEjecutivo" class="rounded-full border border-emerald-700 bg-emerald-950/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Perfil ejecutivo
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3 lg:justify-end">
          <div v-if="user" class="rounded-lg border border-gray-700 bg-gray-900/70 px-3 py-2 text-xs text-gray-300">
            <p class="uppercase tracking-wide text-gray-400">Sesión activa</p>
            <p class="font-semibold text-white">
              {{ (user as any)?.rut }} · <span class="text-yellow-400">{{ perfil }}</span>
            </p>
          </div>

          <button
            @click="logout"
            class="rounded-full bg-red-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
          >
            Salir
          </button>
        </div>
      </div>
    </nav>

    <div v-if="user" class="border-b border-gray-800 bg-gray-700/70 px-4 py-1 text-center text-xs text-gray-200">
      Sesión iniciada como: <span class="font-bold uppercase">{{ (user as any)?.rut }}</span> |
      Perfil: <span class="font-bold text-yellow-400">{{ perfil }}</span>
    </div>

    <main>
      <slot />
    </main>
  </div>
</template>