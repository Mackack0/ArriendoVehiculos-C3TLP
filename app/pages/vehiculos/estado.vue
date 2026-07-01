<script setup lang="ts">
const { data: vehiculos, refresh } = await useFetch<any[]>('/api/vehiculos')

async function cambiarEstado(id: number, nuevoEstado: string) {
  try {
    await $fetch(`/api/vehiculos/${id}/estado`, {
      method: 'PUT',
      body: { estado: nuevoEstado }
    })
    await refresh()
  } catch (err) {
    alert("Error al actualizar el estado")
  }
}
</script>

<template>
  <div class="container mx-auto p-4 max-w-2xl">
    <h1 class="text-2xl font-bold text-white mb-6">Gestión de Estados</h1>
    
    <div class="bg-gray-800 rounded-lg p-4 space-y-4">
      <div v-for="v in vehiculos" :key="v.id" class="flex justify-between items-center border-b border-gray-700 py-2">
        <div>
          <p class="font-bold text-white">{{ v.marca }} {{ v.modelo }}</p>
          <p class="text-xs text-gray-400">Patente: {{ v.patente }} | Estado actual: {{ v.estado }}</p>
        </div>
        
        <select 
          :value="v.estado" 
          @change="(e: any) => cambiarEstado(v.id, e.target.value)"
          class="bg-gray-900 text-white border border-gray-600 rounded p-1 text-sm"
        >
          <option value="disponible">Disponible</option>
          <option value="arrendado">Arrendado</option>
          <option value="mantenimiento">En Mantenimiento</option>
          <option value="baja">De Baja</option>
        </select>
      </div>
    </div>
  </div>
</template>