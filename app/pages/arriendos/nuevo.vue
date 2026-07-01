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
  <div class="bg-[url(/assets/images/highway.webp)] bg-cover bg-center py-6 text-white">
    <div class="mx-auto max-w-2xl px-4">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-2xl font-bold text-white">Nuevo Arriendo</h1>
        <NuxtLink to="/arriendos/base" class="text-sm text-blue-200 underline transition-colors hover:text-white">
          Volver a la lista
        </NuxtLink>
      </div>

      <div class="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div v-if="mensajeError" class="mb-4 rounded border border-red-400/30 bg-red-500/10 px-4 py-3 text-red-200">
          {{ mensajeError }}
        </div>

        <div v-if="mensajeExito" class="mb-4 rounded border border-green-400/30 bg-green-500/10 px-4 py-3 text-green-200">
          {{ mensajeExito }}
        </div>

        <form @submit.prevent="crearArriendo" class="space-y-4">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-200">RUT Cliente</label>
              <input v-model="form.clienteRut" type="text" required class="w-full rounded-xl border border-white/20 bg-white/10 p-2 text-white outline-none placeholder:text-gray-300" placeholder="Ej: 12.345.678-9" />
            </div>
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-200">Nombre Cliente</label>
              <input v-model="form.clienteNombre" type="text" required class="w-full rounded-xl border border-white/20 bg-white/10 p-2 text-white outline-none placeholder:text-gray-300" placeholder="Nombre completo" />
            </div>
          </div>

          <div>
            <label class="mb-1 block text-sm font-medium text-gray-200">Vehículo (Solo Disponibles)</label>
            <select v-model="form.vehiculoId" required class="w-full rounded-xl border border-gray-300 bg-white/95 p-2 text-gray-900 outline-none">
              <option value="" disabled class="text-gray-900">Seleccione un vehículo...</option>
              <option v-for="v in vehiculosDisponibles" :key="v.id" :value="v.id" class="text-gray-900">
                {{ v.marca }} {{ v.modelo }} ({{ v.patente }}) - Tipo ID: {{ v.tipoId }}
              </option>
            </select>
            <p v-if="vehiculosDisponibles.length === 0" class="mt-1 text-xs text-red-200">
              No hay vehículos disponibles en este momento.
            </p>
          </div>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-200">Fecha de Inicio</label>
              <input v-model="form.fechaInicio" type="date" required class="w-full rounded-xl border border-white/20 bg-white/10 p-2 text-white outline-none scheme-dark" />
            </div>
            <div>
              <label class="mb-1 block text-sm font-medium text-gray-200">Fecha de Término</label>
              <input v-model="form.fechaTermino" type="date" required class="w-full rounded-xl border border-white/20 bg-white/10 p-2 text-white outline-none scheme-dark" />
            </div>
          </div>

          <div class="pt-4">
            <button
              type="submit"
              :disabled="enviando || vehiculosDisponibles.length === 0"
              class="w-full rounded-xl bg-green-600/90 px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-green-500 hover:shadow-[0_0_18px_rgba(22,163,74,0.45)] disabled:bg-gray-600"
            >
              {{ enviando ? 'Registrando arriendo...' : 'Registrar y Calcular Precio' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>