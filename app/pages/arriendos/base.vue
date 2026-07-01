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
  <div>
    <div class="bg-gray-800 p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-white">Gestión de Arriendos</h1>
      <div class="flex space-x-2">
        <button
          class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 px-4 rounded transition-colors"
          @click="refrescarLista"
        >
          Actualizar Lista
        </button>
        <NuxtLink
          to="/arriendos/nuevo"
          class="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-2 px-4 rounded transition-colors inline-block"
        >
          Nuevo Arriendo
        </NuxtLink>
      </div>
    </div>

    <div class="container mx-auto p-4">
      <h2 class="mb-4 text-xl font-semibold">Historial y Vigentes</h2>

      <div v-if="pending" class="text-gray-400">Cargando arriendos...</div>
      
      <div v-else-if="error">
        <p class="text-red-600">Error al cargar la información.</p>
      </div>
      
      <div v-else-if="arriendos?.length" class="overflow-x-auto">
        <table class="w-full text-left text-sm text-gray-300">
          <thead class="bg-gray-800 text-xs uppercase text-gray-400">
            <tr>
              <th class="px-4 py-3">Cliente</th>
              <th class="px-4 py-3">Vehículo (ID)</th>
              <th class="px-4 py-3">Inicio - Término</th>
              <th class="px-4 py-3">Total</th>
              <th class="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in arriendos" :key="item.id" class="border-b border-gray-700 bg-gray-900">
              <td class="px-4 py-3">
                <p class="font-bold text-white">{{ item.clienteNombre }}</p>
                <p class="text-xs text-gray-500">{{ item.clienteRut }}</p>
              </td>
              <td class="px-4 py-3">
                <span class="rounded bg-gray-700 px-2 py-1 text-xs font-semibold">ID: {{ item.vehiculoId }}</span>
              </td>
              <td class="px-4 py-3">
                {{ formatearFecha(item.fechaInicio) }} <br/> 
                <span class="text-gray-500">hasta</span> {{ formatearFecha(item.fechaTermino) }}
              </td>
              <td class="px-4 py-3 font-semibold text-green-400">
                {{ formatearDinero(item.valorArriendo) }}
              </td>
              <td class="px-4 py-3 text-center">
                <NuxtLink
                  :to="`/arriendos/${item.id}/registro`"
                  class="rounded bg-yellow-600 hover:bg-yellow-700 px-3 py-1.5 text-white text-xs font-semibold transition-colors"
                >
                  Entrega / Recepción
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p v-else class="text-gray-500 mt-4">No hay arriendos registrados en el sistema.</p>
    </div>
  </div>
</template>