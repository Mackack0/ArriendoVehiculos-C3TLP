<script setup lang="ts">
import { ref, reactive } from 'vue'

const { data: vehiculos, error, pending, refresh } = await useFetch<any[]>('/api/vehiculos', {
  immediate: false,
  default: () => []
})

const { data: tipos, error: tiposError, pending: tiposPending } = await useFetch<any[]>('/api/tipos', {
  default: () => []
})

const mostrarFormulario = ref(false)
const creando = ref(false)
const editando = ref(false)
const eliminandoId = ref<number | null>(null)
const mensaje = ref('')
const form = reactive({
  id: null as number | null,
  patente: '',
  marca: '',
  modelo: '',
  anio: '',
  tipoId: '',
  foto: null as File | null
})

function alternarFormulario() {
  mostrarFormulario.value = !mostrarFormulario.value
  mensaje.value = ''
  if (!mostrarFormulario.value) {
    resetForm()
  }
}

async function listarVehiculos() {
  mensaje.value = ''
  await refresh()
}

function resetForm() {
  form.id = null
  form.patente = ''
  form.marca = ''
  form.modelo = ''
  form.anio = ''
  form.tipoId = ''
  form.foto = null
  editando.value = false
}

function seleccionarVehiculo(item: any) {
  mensaje.value = ''
  mostrarFormulario.value = true
  editando.value = true
  form.id = item.id
  form.patente = item.patente || ''
  form.marca = item.marca || ''
  form.modelo = item.modelo || ''
  form.anio = String(item.anio || '')
  form.tipoId = String(item.tipoId || '')
  form.foto = null
}

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  form.foto = target.files?.[0] ?? null
}

async function crearVehiculo() {
  creando.value = true
  mensaje.value = ''

  try {
    if (editando.value && form.id !== null) {
      await $fetch(`/api/vehiculos/${form.id}`, {
        method: 'PUT',
        body: {
          patente: form.patente,
          marca: form.marca,
          modelo: form.modelo,
          anio: Number(form.anio),
          tipoId: Number(form.tipoId)
        }
      })

      mensaje.value = 'Vehículo actualizado correctamente'
    } else {
      if (!form.foto) {
        throw new Error('Debes seleccionar una foto para el vehículo')
      }

      const formData = new FormData()
      formData.append('patente', form.patente)
      formData.append('marca', form.marca)
      formData.append('modelo', form.modelo)
      formData.append('anio', form.anio)
      formData.append('tipoId', form.tipoId)
      formData.append('fotoUrl', form.foto)

      await $fetch('/api/vehiculos', {
        method: 'POST',
        body: formData
      })

      mensaje.value = 'Vehículo creado correctamente'
    }

    resetForm()
    mostrarFormulario.value = false
    await refresh()
  } catch (err: any) {
    mensaje.value = err?.data?.message || err?.message || 'Error en la operación de vehículo'
  } finally {
    creando.value = false
  }
}

async function eliminarVehiculo(id: number) {
  eliminandoId.value = id
  mensaje.value = ''

  try {
    await $fetch(`/api/vehiculos/${id}`, {
      method: 'DELETE'
    })

    mensaje.value = 'Vehículo eliminado correctamente'
    await refresh()
  } catch (err: any) {
    mensaje.value = err?.data?.message || err?.message || 'No se pudo eliminar el vehículo'
  } finally {
    eliminandoId.value = null
  }
}
</script>

<template>
  <div>
    <div class="bg-gray-800 p-4">
      <h1 class="text-2xl font-bold text-white">Administrador - Vehiculos</h1>
      <div class="flex flex-wrap">
        <button
          class="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-2 px-4 m-1.5 rounded transition-colors"
          @click="alternarFormulario"
        >
          Añadir
        </button>
        <button
          class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 px-4 m-1.5 rounded transition-colors"
          @click="listarVehiculos"
        >
          Listar
        </button>
      </div>
    </div>
  </div>

  <div class="container mx-auto p-4">
    <p v-if="mensaje" class="mb-4 rounded bg-gray-800 p-2 text-sm">{{ mensaje }}</p>

    <div v-if="mostrarFormulario" class="mb-4 rounded border bg-gray-800 p-4 shadow-sm">
      <h2 class="mb-3 text-lg font-semibold">Crear vehículo</h2>
      <div class="grid gap-3 md:grid-cols-2">
        <input v-model="form.patente" class="rounded border p-2 bg-gray-900" placeholder="Patente" />
        <input v-model="form.marca" class="rounded border p-2 bg-gray-900" placeholder="Marca" />
        <input v-model="form.modelo" class="rounded border p-2 bg-gray-900" placeholder="Modelo" />
        <input v-model="form.anio" type="number" class="rounded border p-2 bg-gray-900" placeholder="Año" />
        <div class="md:col-span-2">
          <select v-model="form.tipoId" class="w-full rounded border p-2 bg-gray-900 text-white">
            <option value="">Seleccione un tipo</option>
            <option v-for="tipo in tipos" :key="tipo.id" :value="String(tipo.id)">
              {{ tipo.nombre }}
            </option>
          </select>
          <p v-if="tiposPending" class="mt-2 text-sm text-gray-400">Cargando tipos...</p>
          <p v-else-if="tiposError" class="mt-2 text-sm text-red-400">No se pudieron cargar los tipos</p>
        </div>
        <input type="file" @change="onFileChange" class="rounded border p-2 bg-gray-900 text-white" />
      </div>
      <button
        class="mt-3 rounded bg-green-700 px-4 py-2 text-white"
        :disabled="creando"
        @click="crearVehiculo"
      >
        {{ creando ? (editando ? 'Guardando...' : 'Creando...') : (editando ? 'Guardar cambios' : 'Crear vehículo') }}
      </button>
    </div>

    <h2 class="mb-4 text-xl font-semibold">Vehículos</h2>

    <div v-if="pending">Cargando vehículos...</div>
    <div v-else-if="error">
      <p class="text-red-600">{{ error?.data?.message || error?.message || 'No se pudieron cargar los vehículos' }}</p>
    </div>
    <ul v-else-if="vehiculos?.length" class="space-y-2">
      <li v-for="item in vehiculos" :key="item.id" class="flex items-center justify-between rounded border p-3">
        <div class="flex px-10 space-x-2">

        </div>


        <div class="flex space-x-2">
            <button class="rounded bg-blue-600 px-3 py-2 text-white" @click="seleccionarVehiculo(item)"> Editar </button>
            <button
            class="rounded bg-red-600 px-3 py-2 text-white"
            :disabled="eliminandoId === item.id"
            @click="eliminarVehiculo(item.id)"
            >
            {{ eliminandoId === item.id ? 'Eliminando...' : 'Eliminar' }}
            </button>
        </div>

      </li>
    </ul>
    <p v-else class="text-gray-600">Aún no hay vehículos listados.</p>
  </div>
</template>