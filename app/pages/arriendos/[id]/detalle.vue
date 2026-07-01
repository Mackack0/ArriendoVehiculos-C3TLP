<script setup lang="ts">
const route = useRoute()
const arriendoId = route.params.id

const { data: arriendo, pending, error } = await useFetch<any>(`/api/arriendos/${arriendoId}`)

const formatearDinero = (monto: number) => {
  if (!monto) return '$0'
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(monto)
}

const formatearFecha = (fecha: string) => {
  if (!fecha) return 'No registrada'
  return new Date(fecha).toLocaleString('es-CL')
}
</script>

<template>
  <div class="container mx-auto p-4 max-w-4xl mt-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-white">Detalle de Arriendo #{{ arriendoId }}</h1>
      <div class="flex space-x-3">
        <NuxtLink :to="`/arriendos/${arriendoId}/registro`" class="text-yellow-400 hover:text-yellow-300 underline text-sm font-semibold">
          + Subir nueva foto
        </NuxtLink>
        <NuxtLink to="/arriendos/base" class="text-blue-400 hover:text-blue-300 underline text-sm">
          Volver a la lista
        </NuxtLink>
      </div>
    </div>

    <div v-if="pending" class="text-gray-400">Cargando detalles...</div>
    <div v-else-if="error" class="text-red-500">Ocurrió un error al cargar el arriendo.</div>
    
    <div v-else-if="arriendo" class="grid grid-cols-1 md:grid-cols-2 gap-6">
      
      <div class="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
        <h2 class="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Datos del Cliente y Reserva</h2>
        
        <div class="space-y-3 text-sm text-gray-300">
          <p><span class="font-semibold text-gray-400">Cliente:</span> {{ arriendo.clienteNombre }}</p>
          <p><span class="font-semibold text-gray-400">RUT:</span> {{ arriendo.clienteRut }}</p>
          <p><span class="font-semibold text-gray-400">Vehículo:</span> {{ arriendo.vehiculo.marca }} {{ arriendo.vehiculo.modelo }} (Patente: {{ arriendo.vehiculo.patente }})</p>
          <p><span class="font-semibold text-gray-400">Periodo:</span> {{ formatearFecha(arriendo.fechaInicio) }} al {{ formatearFecha(arriendo.fechaTermino) }}</p>
          <p class="text-lg font-bold text-green-400 mt-4 border-t border-gray-700 pt-2">
            Total Arriendo: {{ formatearDinero(arriendo.valorArriendo) }}
          </p>
        </div>
      </div>

      <div class="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
        <h2 class="text-lg font-bold text-white mb-4 border-b border-gray-700 pb-2">Registro de Entregas</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-semibold text-blue-400 mb-1">Entrega al cliente</h3>
            <p class="text-xs text-gray-400 mb-2">Fecha real: {{ formatearFecha(arriendo.fechaEntrega) }}</p>
            <div v-if="arriendo.fotosEntrega" class="rounded overflow-hidden border border-gray-600 bg-gray-900 h-48 flex items-center justify-center">
              <img :src="arriendo.fotosEntrega" alt="Foto Entrega" class="object-cover w-full h-full" />
            </div>
            <p v-else class="text-sm text-gray-500 italic">No hay foto de entrega registrada.</p>
          </div>

          <div>
            <h3 class="text-sm font-semibold text-yellow-400 mb-1">Recepción (Devolución)</h3>
            <p class="text-xs text-gray-400 mb-2">Fecha real: {{ formatearFecha(arriendo.fechaRecepcion) }}</p>
            <div v-if="arriendo.fotosRecepcion" class="rounded overflow-hidden border border-gray-600 bg-gray-900 h-48 flex items-center justify-center">
              <img :src="arriendo.fotosRecepcion" alt="Foto Recepción" class="object-cover w-full h-full" />
            </div>
            <p v-else class="text-sm text-gray-500 italic">No hay foto de recepción registrada.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>