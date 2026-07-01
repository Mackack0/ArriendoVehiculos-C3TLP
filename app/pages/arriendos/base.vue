<script setup lang="ts">
const { data: arriendos, error, pending, refresh } = await useFetch<any[]>('/api/arriendos', {
  immediate: true,
  default: () => []
})

async function refrescarLista() {
  await refresh()
}

// lo pasa a clp y lo formatea con separador de miles
const formatearDinero = (monto: number) => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(monto)
}

// Formateador de fechas cortas
const formatearFecha = (fecha: string) => {
  if (!fecha) return 'Pendiente'
  return new Date(fecha).toLocaleDateString('es-CL')
}
</script>

<template>
  <div class="bg-[url(/assets/images/highway.webp)] bg-cover bg-center py-6 text-white">
    <div class="mx-auto max-w-6xl px-4">
      <div class="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 class="text-2xl font-bold text-white">Gestión de Arriendos</h1>
          <div class="flex flex-wrap gap-2">
            <button
              class="rounded-lg bg-blue-600/90 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(37,99,235,0.45)]"
              @click="refrescarLista"
            >
              Actualizar Lista
            </button>
            <NuxtLink
              to="/arriendos/nuevo"
              class="inline-block rounded-lg bg-green-600/90 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-green-500 hover:shadow-[0_0_18px_rgba(22,163,74,0.45)]"
            >
              Nuevo Arriendo
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-4">
      <h2 class="mb-4 text-xl font-semibold text-white">Historial y Vigentes</h2>

      <div v-if="pending" class="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">Cargando arriendos...</div>

      <div v-else-if="error" class="rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-red-200 backdrop-blur-md">
        <p>Error al cargar la información.</p>
      </div>

      <div v-else-if="arriendos?.length" class="overflow-x-auto rounded-2xl border border-white/20 bg-white/10 p-2 shadow-lg shadow-black/10 backdrop-blur-md">
        <table class="w-full text-left text-sm text-gray-200">
          <thead class="text-xs uppercase text-gray-200">
            <tr>
              <th class="px-4 py-3">Cliente</th>
              <th class="px-4 py-3">Vehículo (ID)</th>
              <th class="px-4 py-3">Inicio - Término</th>
              <th class="px-4 py-3">Total</th>
              <th class="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in arriendos" :key="item.id" class="border-b border-white/10 bg-white/5">
              <td class="px-4 py-3">
                <p class="font-bold text-white">{{ item.clienteNombre }}</p>
                <p class="text-xs text-gray-300">{{ item.clienteRut }}</p>
              </td>
              <td class="px-4 py-3">
                <span class="rounded bg-white/10 px-2 py-1 text-xs font-semibold">ID: {{ item.vehiculoId }}</span>
              </td>
              <td class="px-4 py-3">
                {{ formatearFecha(item.fechaInicio) }} <br/>
                <span class="text-gray-300">hasta</span> {{ formatearFecha(item.fechaTermino) }}
              </td>
              <td class="px-4 py-3 font-semibold text-green-300">
                {{ formatearDinero(item.valorArriendo) }}
              </td>
              <td class="px-4 py-3 text-center">
                <NuxtLink
                  :to="`/arriendos/${item.id}/detalle`"
                  class="mr-2 rounded bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-white/20"
                >
                  Detalle
                </NuxtLink>
                <NuxtLink
                  :to="`/arriendos/${item.id}/registro`"
                  class="rounded bg-yellow-600/90 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-yellow-500 hover:shadow-[0_0_18px_rgba(234,179,8,0.35)]"
                >
                  Entrega / Recepción
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p v-else class="mt-4 rounded-2xl border border-white/20 bg-white/10 p-4 text-gray-200 backdrop-blur-md">No hay arriendos registrados en el sistema.</p>
    </div>
  </div>
</template>