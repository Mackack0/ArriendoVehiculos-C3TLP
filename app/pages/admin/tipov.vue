<script setup lang="ts">
const { data: tipos, error, pending, refresh } = await useFetch<any[]>('/api/tipos', {
  default: () => []
})

const mostrarFormulario = ref(false)
const guardando = ref(false)
const editando = ref(false)
const eliminandoId = ref<number | null>(null)
const mensaje = ref('')
const form = reactive({
  id: null as number | null,
  nombre: '',
  valorDiario: ''
})

async function listarTipos() {
  mensaje.value = ''
  await refresh()
}

function alternarFormulario() {
  mostrarFormulario.value = !mostrarFormulario.value
  mensaje.value = ''
  if (!mostrarFormulario.value) {
    resetForm()
  }
}

function resetForm() {
  form.id = null
  form.nombre = ''
  form.valorDiario = ''
  editando.value = false
}

function seleccionarTipo(item: any) {
  mensaje.value = ''
  mostrarFormulario.value = true
  editando.value = true
  form.id = item.id
  form.nombre = item.nombre || ''
  form.valorDiario = String(item.valorDiario || '')
}

async function guardarTipo() {
  guardando.value = true
  mensaje.value = ''

  try {
    if (editando.value && form.id !== null) {
      await $fetch(`/api/tipos/${form.id}`, {
        method: 'PUT',
        body: {
          nombre: form.nombre,
          valorDiario: Number(form.valorDiario)
        }
      })

      mensaje.value = 'Tipo de vehículo actualizado correctamente'
    } else {
      await $fetch('/api/tipos', {
        method: 'POST',
        body: {
          nombre: form.nombre,
          valorDiario: Number(form.valorDiario)
        }
      })

      mensaje.value = 'Tipo de vehículo creado correctamente'
    }

    resetForm()
    mostrarFormulario.value = false
    await refresh()
  } catch (err: any) {
    mensaje.value = err?.data?.message || err?.message || 'No se pudo guardar el tipo de vehículo'
  } finally {
    guardando.value = false
  }
}

async function eliminarTipo(id: number) {
  eliminandoId.value = id
  mensaje.value = ''

  try {
    await $fetch(`/api/tipos/${id}`, {
      method: 'DELETE'
    })

    mensaje.value = 'Tipo de vehículo eliminado correctamente'
    await refresh()
  } catch (err: any) {
    mensaje.value = err?.data?.message || err?.message || 'No se pudo eliminar el tipo de vehículo'
  } finally {
    eliminandoId.value = null
  }
}
</script>

<template>
  <div>
    <div class="bg-gray-800 p-4">
      <h1 class="text-2xl font-bold text-white">Administrador - Tipos de vehículo</h1>
      <div class="flex flex-wrap">
        <button
          class="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-2 px-4 m-1.5 rounded transition-colors"
          @click="alternarFormulario"
        >
          Añadir
        </button>
        <button
          class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 px-4 m-1.5 rounded transition-colors"
          @click="listarTipos"
        >
          Listar
        </button>
      </div>
    </div>
  </div>

  <div class="container mx-auto p-4">
    <p v-if="mensaje" class="mb-4 rounded bg-gray-800 p-2 text-sm">{{ mensaje }}</p>

    <div v-if="mostrarFormulario" class="mb-4 rounded border bg-gray-800 p-4 shadow-sm">
      <h2 class="mb-3 text-lg font-semibold">{{ editando ? 'Editar tipo de vehículo' : 'Crear tipo de vehículo' }}</h2>
      <div class="grid gap-3 md:grid-cols-2">
        <input v-model="form.nombre" class="rounded border p-2 bg-gray-900" placeholder="Nombre" />
        <input v-model="form.valorDiario" type="number" class="rounded border p-2 bg-gray-900" placeholder="Valor diario" />
      </div>
      <button
        class="mt-3 rounded bg-green-700 px-4 py-2 text-white"
        :disabled="guardando"
        @click="guardarTipo"
      >
        {{ guardando ? (editando ? 'Guardando...' : 'Creando...') : (editando ? 'Guardar cambios' : 'Crear tipo') }}
      </button>
    </div>

    <h2 class="mb-4 text-xl font-semibold">Tipos de vehículo</h2>

    <div v-if="pending">Cargando tipos...</div>
    <div v-else-if="error">
      <p class="text-red-600">{{ error?.data?.message || error?.message || 'No se pudieron cargar los tipos' }}</p>
    </div>
    <ul v-else-if="tipos?.length" class="space-y-2">
      <li v-for="item in tipos" :key="item.id" class="flex items-center justify-between rounded border p-3">
        <div>
          <h3 class="font-bold">{{ item.nombre }}</h3>
          <p class="text-gray-600">Valor diario: {{ item.valorDiario }}</p>
        </div>

        <div class="flex space-x-2">
          <button class="rounded bg-blue-600 px-3 py-2 text-white" @click="seleccionarTipo(item)">
            Editar
          </button>
          <button
            class="rounded bg-red-600 px-3 py-2 text-white"
            :disabled="eliminandoId === item.id"
            @click="eliminarTipo(item.id)"
          >
            {{ eliminandoId === item.id ? 'Eliminando...' : 'Eliminar' }}
          </button>
        </div>
      </li>
    </ul>
    <p v-else class="text-gray-600">Aún no hay tipos de vehículo listados.</p>
  </div>
</template>