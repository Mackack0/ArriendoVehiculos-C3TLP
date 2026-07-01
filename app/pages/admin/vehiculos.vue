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
  <div class="bg-[url(/assets/images/highway.webp)] bg-cover bg-center py-6 text-white">
    <div class="mx-auto max-w-5xl px-4">
      <div class="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <h1 class="text-2xl font-bold text-white">Administrador - Vehículos</h1>
        <div class="mt-3 flex flex-wrap gap-2">
          <button
            class="rounded-lg bg-green-600/90 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-green-500 hover:shadow-[0_0_18px_rgba(22,163,74,0.45)] active:bg-green-800"
            @click="alternarFormulario"
          >
            Añadir
          </button>
          <button
            class="rounded-lg bg-blue-600/90 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(37,99,235,0.45)] active:bg-blue-800"
            @click="listarVehiculos"
          >
            Listar
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-4">
      <p v-if="mensaje" class="mb-4 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-md">{{ mensaje }}</p>

      <div v-if="mostrarFormulario" class="mb-4 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl shadow-black/20 backdrop-blur-xl">
        <h2 class="mb-3 text-lg font-semibold text-white">{{ editando ? 'Editar vehículo' : 'Crear vehículo' }}</h2>
        <div class="grid gap-3 md:grid-cols-2">
          <input v-model="form.patente" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white placeholder:text-gray-300 outline-none" placeholder="Patente" />
          <input v-model="form.marca" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white placeholder:text-gray-300 outline-none" placeholder="Marca" />
          <input v-model="form.modelo" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white placeholder:text-gray-300 outline-none" placeholder="Modelo" />
          <input v-model="form.anio" type="number" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white placeholder:text-gray-300 outline-none" placeholder="Año" />
          <div class="md:col-span-2">
            <select v-model="form.tipoId" class="w-full rounded-xl border border-gray-300 bg-white/95 p-2 text-gray-900 outline-none">
              <option value="" class="text-gray-900">Seleccione un tipo</option>
              <option v-for="tipo in tipos" :key="tipo.id" :value="String(tipo.id)" class="text-gray-900">
                {{ tipo.nombre }}
              </option>
            </select>
            <p v-if="tiposPending" class="mt-2 text-sm text-gray-300">Cargando tipos...</p>
            <p v-else-if="tiposError" class="mt-2 text-sm text-red-200">No se pudieron cargar los tipos</p>
          </div>
          <input type="file" @change="onFileChange" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white file:mr-3 file:rounded file:border-0 file:bg-white/20 file:px-3 file:py-2 file:text-white" />
        </div>
        <button
          class="mt-3 rounded-xl bg-green-600/90 px-4 py-2 text-white transition-all duration-200 hover:bg-green-500 hover:shadow-[0_0_18px_rgba(22,163,74,0.45)]"
          :disabled="creando"
          @click="crearVehiculo"
        >
          {{ creando ? (editando ? 'Guardando...' : 'Creando...') : (editando ? 'Guardar cambios' : 'Crear vehículo') }}
        </button>
      </div>

      <h2 class="mb-4 text-xl font-semibold text-white">Vehículos</h2>

      <div v-if="pending" class="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">Cargando vehículos...</div>
      <div v-else-if="error" class="rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-red-200 backdrop-blur-md">
        <p>{{ error?.data?.message || error?.message || 'No se pudieron cargar los vehículos' }}</p>
      </div>
      <ul v-else-if="vehiculos?.length" class="space-y-2">
        <li v-for="item in vehiculos" :key="item.id" class="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-3 shadow-lg shadow-black/10 backdrop-blur-md">
          <div class="flex px-2 text-white">
            <span class="font-semibold">{{ item.patente }}</span>
            <span class="mx-2">•</span>
            <span>{{ item.marca }} {{ item.modelo }}</span>
          </div>

          <div class="flex space-x-2">
            <button class="rounded-xl bg-blue-600/90 px-3 py-2 text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(37,99,235,0.45)]" @click="seleccionarVehiculo(item)">
              Editar
            </button>
            <button
              class="rounded-xl bg-red-600/90 px-3 py-2 text-white transition-all duration-200 hover:bg-red-500 hover:shadow-[0_0_18px_rgba(220,38,38,0.45)]"
              :disabled="eliminandoId === item.id"
              @click="eliminarVehiculo(item.id)"
            >
              {{ eliminandoId === item.id ? 'Eliminando...' : 'Eliminar' }}
            </button>
          </div>
        </li>
      </ul>
      <p v-else class="rounded-2xl border border-white/20 bg-white/10 p-4 text-gray-200 backdrop-blur-md">Aún no hay vehículos listados.</p>
    </div>
  </div>
</template>