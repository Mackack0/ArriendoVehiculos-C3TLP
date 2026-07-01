<script setup lang="ts">
const { data: usuarios, error, pending, refresh } = await useFetch<any[]>('/api/usuarios', {
  immediate: false,
  default: () => []
})

const { user } = useUserSession()

const mostrarFormulario = ref(false)
const creando = ref(false)
const editando = ref(false)
const usuarioId = ref<number | null>(null)
const eliminandoId = ref<number | null>(null)
const mensaje = ref('')
const form = reactive({
  rut: '',
  email: '',
  password: '',
  perfilId: '1'
})

function resetForm() {
  usuarioId.value = null
  form.rut = ''
  form.email = ''
  form.password = ''
  form.perfilId = '1'
  editando.value = false
}

async function listarUsuarios() {
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

function seleccionarUsuario(item: any) {
  mensaje.value = ''
  mostrarFormulario.value = true
  editando.value = true
  usuarioId.value = item.id
  form.rut = item.rut || ''
  form.email = item.email || ''
  form.password = ''
  form.perfilId = String(item.perfilId || '1')
}

async function guardarUsuario() {
  creando.value = true
  mensaje.value = ''

  try {
    const payload = {
      rut: form.rut,
      email: form.email,
      password: form.password,
      perfilId: Number(form.perfilId)
    }

    if (editando.value && usuarioId.value !== null) {
      await $fetch(`/api/usuarios/${usuarioId.value}`, {
        method: 'PUT',
        body: payload
      })

      mensaje.value = 'Usuario actualizado correctamente'
    } else {
      await $fetch('/api/usuarios', {
        method: 'POST',
        body: payload
      })

      mensaje.value = 'Usuario creado correctamente'
    }

    resetForm()
    mostrarFormulario.value = false
    await refresh()
  } catch (err: any) {
    mensaje.value = err?.data?.message || err?.message || 'No se pudo guardar el usuario'
  } finally {
    creando.value = false
  }
}

async function eliminarUsuario(id: number) {
  eliminandoId.value = id
  mensaje.value = ''

  try {
    await $fetch(`/api/usuarios/${id}`, {
      method: 'DELETE'
    })

    await refresh()
  } catch (err: any) {
    mensaje.value = err?.data?.message || err?.message || 'No se pudo eliminar el usuario'
  } finally {
    eliminandoId.value = null
  }
}
</script>

<template>
  <div class="bg-[url(/assets/images/highway.webp)] bg-cover bg-center py-6 text-white">
    <div class="mx-auto max-w-5xl px-4">
      <div class="rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <h1 class="text-2xl font-bold text-white">Administrador - Usuarios</h1>
        <div class="mt-3 flex flex-wrap gap-2">
          <button
            class="rounded-lg bg-green-600/90 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-green-500 hover:shadow-[0_0_18px_rgba(22,163,74,0.45)] active:bg-green-800"
            @click="alternarFormulario"
          >
            Añadir
          </button>
          <button
            class="rounded-lg bg-blue-600/90 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(37,99,235,0.45)] active:bg-blue-800"
            @click="listarUsuarios"
          >
            Listar
          </button>
        </div>
      </div>
    </div>

    <div class="container mx-auto p-4">
      <p v-if="mensaje" class="mb-4 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur-md">{{ mensaje }}</p>

      <div v-if="mostrarFormulario" class="mb-4 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl shadow-black/20 backdrop-blur-xl">
        <h2 class="mb-3 text-lg font-semibold text-white">{{ editando ? 'Editar usuario' : 'Crear usuario' }}</h2>
        <div class="grid gap-3 md:grid-cols-2">
          <input v-model="form.rut" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white placeholder:text-gray-300 outline-none" placeholder="RUT" />
          <input v-model="form.email" type="email" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white placeholder:text-gray-300 outline-none" placeholder="Email" />
          <input v-model="form.password" type="password" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white placeholder:text-gray-300 outline-none" :placeholder="editando ? 'Nueva contraseña opcional' : 'Contraseña'" />
          <input v-model="form.perfilId" class="rounded-xl border border-white/20 bg-white/10 p-2 text-white placeholder:text-gray-300 outline-none" placeholder="ID de perfil" />
        </div>
        <div class="mt-3 flex flex-wrap gap-2">
          <button
            class="rounded-xl bg-green-600/90 px-4 py-2 text-white transition-all duration-200 hover:bg-green-500 hover:shadow-[0_0_18px_rgba(22,163,74,0.45)]"
            :disabled="creando"
            @click="guardarUsuario"
          >
            {{ creando ? (editando ? 'Guardando...' : 'Creando...') : (editando ? 'Guardar cambios' : 'Crear usuario') }}
          </button>

          <button
            v-if="editando"
            class="rounded-xl bg-gray-600/90 px-4 py-2 text-white transition-all duration-200 hover:bg-gray-500 hover:shadow-[0_0_18px_rgba(107,114,128,0.45)]"
            type="button"
            @click="resetForm(); mostrarFormulario = false"
          >
            Cancelar
          </button>
        </div>
      </div>

      <h2 class="mb-4 text-xl font-semibold text-white">Usuarios</h2>

      <div v-if="pending" class="rounded-2xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">Cargando usuarios...</div>
      <div v-else-if="error" class="rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-red-200 backdrop-blur-md">
        <p>{{ error?.data?.message || error?.message || 'No se pudieron cargar los usuarios' }}</p>
      </div>
      <ul v-else-if="usuarios?.length" class="space-y-2">
        <li v-for="item in usuarios" :key="item.id" class="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 p-3 shadow-lg shadow-black/10 backdrop-blur-md">
          <div class="flex flex-col gap-1 px-2 sm:flex-row sm:items-center sm:space-x-3">
            <h3 class="font-bold text-white">{{ item.rut }}</h3>
            <p class="text-gray-200">{{ item.email }}</p>
            <p class="text-gray-300">{{ item.perfil?.nombre || 'Sin perfil' }}</p>
          </div>

          <div class="flex space-x-2">
            <button class="rounded-xl bg-blue-600/90 px-3 py-2 text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(37,99,235,0.45)]" @click="seleccionarUsuario(item)">
              Editar
            </button>
            <button
              class="rounded-xl bg-red-600/90 px-3 py-2 text-white transition-all duration-200 hover:bg-red-500 hover:shadow-[0_0_18px_rgba(220,38,38,0.45)]"
              :disabled="eliminandoId === item.id"
              @click="eliminarUsuario(item.id)"
            >
              {{ eliminandoId === item.id ? 'Eliminando...' : 'Eliminar' }}
            </button>
          </div>
        </li>
      </ul>
      <p v-else class="rounded-2xl border border-white/20 bg-white/10 p-4 text-gray-200 backdrop-blur-md">Aún no hay usuarios listados.</p>
    </div>
  </div>
</template>