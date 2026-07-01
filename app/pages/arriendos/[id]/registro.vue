<script setup lang="ts">
import { ref, reactive } from 'vue'

const route = useRoute()
const arriendoId = route.params.id
const volverAlDetalle = computed(() => `/arriendos/${arriendoId}/detalle`)

const enviando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')
const archivoFoto = ref<File | null>(null)

const form = reactive({
  tipoRegistro: 'entrega', 
  fechaHoraReal: ''
})

function capturarArchivo(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    archivoFoto.value = target.files[0] ?? null
  } else {
    archivoFoto.value = null
  }
}

async function guardarRegistro() {
  enviando.value = true
  mensajeError.value = ''
  mensajeExito.value = ''

  if (!archivoFoto.value) {
    mensajeError.value = 'Debes subir una fotografía obligatoriamente'
    enviando.value = false
    return
  }

  const formData = new FormData()
  formData.append('tipoRegistro', form.tipoRegistro)
  formData.append('fechaHoraReal', form.fechaHoraReal)
  formData.append('fotos', archivoFoto.value)

  try {
    await $fetch(`/api/arriendos/${arriendoId}/registro`, {
      method: 'POST',
      body: formData
    })

    mensajeExito.value = `Fotografía de ${form.tipoRegistro} guardada correctamente.`
    
    setTimeout(() => {
      navigateTo(volverAlDetalle.value)
    }, 2000)

  } catch (err: any) {
    mensajeError.value = err?.data?.message || err?.message || 'Error al guardar el registro'
  } finally {
    enviando.value = false
  }
}
</script>

<template>
  <div class="container mx-auto p-4 max-w-lg mt-6">
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl font-bold text-white">Registro Fotográfico</h1>
      <NuxtLink :to="volverAlDetalle" class="text-blue-400 hover:text-blue-300 underline text-sm">
        Volver
      </NuxtLink>
    </div>

    <div class="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
      
      <p class="text-gray-300 text-sm mb-4">
        Estás actualizando el arriendo <span class="font-bold text-white">#{{ arriendoId }}</span>
      </p>

      <div v-if="mensajeError" class="mb-4 bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded">
        {{ mensajeError }}
      </div>
      
      <div v-if="mensajeExito" class="mb-4 bg-green-900 border border-green-700 text-green-200 px-4 py-3 rounded">
        {{ mensajeExito }}
      </div>

      <form @submit.prevent="guardarRegistro" class="space-y-5">
        
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Acción a registrar</label>
          <select v-model="form.tipoRegistro" required class="w-full rounded border border-gray-300 bg-white p-2 text-gray-900">
            <option value="entrega" class="text-gray-900">Entrega de vehículo (Al cliente)</option>
            <option value="recepcion" class="text-gray-900">Recepción de vehículo (Devolución)</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Fecha y Hora exacta</label>
          <input 
            v-model="form.fechaHoraReal" 
            type="datetime-local" 
            required 
            class="w-full rounded border border-gray-600 bg-gray-900 p-2 text-white scheme-dark" 
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Fotografía del vehículo</label>
          <input 
            type="file" 
            accept="image/*"
            required
            @change="capturarArchivo"
            class="w-full rounded border border-gray-600 bg-gray-900 p-2 text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
          />
          <p class="text-xs text-gray-500 mt-1">Formatos admitidos: JPG, PNG, WEBP.</p>
        </div>

        <div class="pt-4">
          <button
            type="submit"
            :disabled="enviando"
            class="w-full bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 disabled:bg-gray-600 text-white font-semibold py-3 px-4 rounded transition-colors flex justify-center items-center"
          >
            <span v-if="enviando">Subiendo archivo...</span>
            <span v-else>Guardar Registro Fotográfico</span>
          </button>
        </div>
        
      </form>
    </div>
  </div>
</template>