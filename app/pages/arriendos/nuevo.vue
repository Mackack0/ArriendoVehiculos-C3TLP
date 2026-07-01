<script setup lang="ts">

const { data: vehiculos } = await useFetch<any[]>('/api/vehiculos', { default: () => [] })

const vehiculosDisponibles = computed(() => {
  return vehiculos.value?.filter(v => v.estado === 'disponible') || []
})

const enviando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')

const form = reactive({
  vehiculoId: '',
  clienteRut: '',
  clienteNombre: '',
  fechaInicio: '',
  fechaTermino: ''
})

async function crearArriendo() {
  enviando.value = true
  mensajeError.value = ''
  mensajeExito.value = ''

  try {
    await $fetch('/api/arriendos', {
      method: 'POST',
      body: {
        vehiculoId: Number(form.vehiculoId),
        clienteRut: form.clienteRut,
        clienteNombre: form.clienteNombre,
        fechaInicio: form.fechaInicio,
        fechaTermino: form.fechaTermino
      }
    })

    mensajeExito.value = 'Arriendo registrado correctamente. El vehículo pasó a estado "arrendado".'
    
    form.vehiculoId = ''
    form.clienteRut = ''
    form.clienteNombre = ''
    form.fechaInicio = ''
    form.fechaTermino = ''
    
    setTimeout(() => {
      navigateTo('/arriendos/base')
    }, 2000)

  } catch (err: any) {
    mensajeError.value = err?.data?.message || err?.message || 'No se pudo crear el arriendo'
  } finally {
    enviando.value = false
  }
}
</script>

<template>
  <div class="container mx-auto p-4 max-w-2xl mt-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-white">Nuevo Arriendo</h1>
      <NuxtLink to="/arriendos/base" class="text-blue-400 hover:text-blue-300 underline text-sm">
        Volver a la lista
      </NuxtLink>
    </div>

    <div class="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
      
      <div v-if="mensajeError" class="mb-4 bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded">
        {{ mensajeError }}
      </div>
      
      <div v-if="mensajeExito" class="mb-4 bg-green-900 border border-green-700 text-green-200 px-4 py-3 rounded">
        {{ mensajeExito }}
      </div>

      <form @submit.prevent="crearArriendo" class="space-y-4">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-1">RUT Cliente</label>
            <input v-model="form.clienteRut" type="text" required class="w-full rounded border border-gray-600 bg-gray-900 p-2 text-white" placeholder="Ej: 12.345.678-9" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-1">Nombre Cliente</label>
            <input v-model="form.clienteNombre" type="text" required class="w-full rounded border border-gray-600 bg-gray-900 p-2 text-white" placeholder="Nombre completo" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Vehículo (Solo Disponibles)</label>
          <select v-model="form.vehiculoId" required class="w-full rounded border border-gray-600 bg-gray-900 p-2 text-white">
            <option value="" disabled>Seleccione un vehículo...</option>
            <option v-for="v in vehiculosDisponibles" :key="v.id" :value="v.id">
              {{ v.marca }} {{ v.modelo }} ({{ v.patente }}) - Tipo ID: {{ v.tipoId }}
            </option>
          </select>
          <p v-if="vehiculosDisponibles.length === 0" class="text-xs text-red-400 mt-1">
            No hay vehículos disponibles en este momento.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-1">Fecha de Inicio</label>
            <input v-model="form.fechaInicio" type="date" required class="w-full rounded border border-gray-600 bg-gray-900 p-2 text-white [color-scheme:dark]" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-400 mb-1">Fecha de Término</label>
            <input v-model="form.fechaTermino" type="date" required class="w-full rounded border border-gray-600 bg-gray-900 p-2 text-white [color-scheme:dark]" />
          </div>
        </div>

        <div class="pt-4">
          <button
            type="submit"
            :disabled="enviando || vehiculosDisponibles.length === 0"
            class="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 disabled:bg-gray-600 text-white font-semibold py-3 px-4 rounded transition-colors"
          >
            {{ enviando ? 'Registrando arriendo...' : 'Registrar y Calcular Precio' }}
          </button>
        </div>
        
      </form>
    </div>
  </div>
</template>