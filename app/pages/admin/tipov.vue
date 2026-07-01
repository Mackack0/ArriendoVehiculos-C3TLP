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
  <div class="bg-[url(/assets/images/highway.webp)] bg-cover bg-center py-6 text-white">
    <div class="mx-auto max-w-5xl px-4">
      <div class="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <h1 class="text-2xl font-bold text-white">Administrador - Tipos de vehículo</h1>
        <div class="mt-3 flex flex-wrap gap-2">
          <button
            class="rounded-lg bg-green-600/90 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-green-500  active:bg-green-800"
            @click="alternarFormulario"
          >
            Añadir
          </button>
          <button
            class="rounded-lg bg-blue-600/90 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-blue-500  active:bg-blue-800"
            @click="listarTipos"
          >
            Listar
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-4">
      <p v-if="mensaje" class="mb-4 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-md">{{ mensaje }}</p>

      <div v-if="mostrarFormulario" class="mb-4 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl shadow-black/20 backdrop-blur-xl">
        <h2 class="mb-3 text-lg font-semibold text-white">{{ editando ? 'Editar tipo de vehículo' : 'Crear tipo de vehículo' }}</h2>
        <div class="grid gap-3 md:grid-cols-2">
          <input v-model="form.nombre" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white placeholder:text-gray-300 outline-none" placeholder="Nombre" />
          <input v-model="form.valorDiario" type="number" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white placeholder:text-gray-300 outline-none" placeholder="Valor diario" />
        </div>
        <button
          class="mt-3 rounded-xl bg-green-600/90 px-4 py-2 text-white transition-all duration-200 hover:bg-green-500 "
          :disabled="guardando"
          @click="guardarTipo"
        >
          {{ guardando ? (editando ? 'Guardando...' : 'Creando...') : (editando ? 'Guardar cambios' : 'Crear tipo') }}
        </button>
      </div>

      <h2 class="mb-4 text-xl font-semibold text-white">Tipos de vehículo</h2>

      <div v-if="pending" class="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">Cargando tipos...</div>
      <div v-else-if="error" class="rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-red-200 backdrop-blur-md">
        <p>{{ error?.data?.message || error?.message || 'No se pudieron cargar los tipos' }}</p>
      </div>
      <ul v-else-if="tipos?.length" class="space-y-2">
        <li v-for="item in tipos" :key="item.id" class="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-3 shadow-lg shadow-black/10 backdrop-blur-md">
          <div>
            <h3 class="font-bold text-white">{{ item.nombre }}</h3>
            <p class="text-gray-200">Valor diario: {{ item.valorDiario }}</p>
          </div>

          <div class="flex space-x-2">
            <button class="rounded-xl bg-blue-600/90 px-3 py-2 text-white transition-all duration-200 hover:bg-blue-500 " @click="seleccionarTipo(item)">
              Editar
            </button>
            <button
              class="rounded-xl bg-red-600/90 px-3 py-2 text-white transition-all duration-200 hover:bg-red-500 "
              :disabled="eliminandoId === item.id"
              @click="eliminarTipo(item.id)"
            >
              {{ eliminandoId === item.id ? 'Eliminando...' : 'Eliminar' }}
            </button>
          </div>
        </li>
      </ul>
      <p v-else class="rounded-2xl border border-white/20 bg-white/10 p-4 text-gray-200 backdrop-blur-md">Aún no hay tipos de vehículo listados.</p>
    </div>

  </div>
</template>