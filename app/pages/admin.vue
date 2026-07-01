<script setup lang="ts">
const { data: usuarios, error, pending, refresh } = await useFetch<any[]>('/api/usuarios', {
  immediate: false,
  default: () => []
})

const { user } = useUserSession()

const mostrarFormulario = ref(false)
const creando = ref(false)
const eliminandoId = ref<number | null>(null)
const mensaje = ref('')
const form = reactive({
  rut: '',
  email: '',
  password: '',
  perfilId: '1'
})

async function listarUsuarios() {
  mensaje.value = ''
  await refresh()
}

function alternarFormulario() {
  mostrarFormulario.value = !mostrarFormulario.value
  mensaje.value = ''
}

async function crearUsuario() {
  creando.value = true
  mensaje.value = ''

  try {
    await $fetch('/api/usuarios', {
      method: 'POST',
      body: {
        rut: form.rut,
        email: form.email,
        password: form.password,
        perfilId: Number(form.perfilId)
      }
    })

    mensaje.value = 'Usuario creado correctamente'
    form.rut = ''
    form.email = ''
    form.password = ''
    form.perfilId = '1'
    await refresh()
  } catch (err: any) {
    mensaje.value = err?.data?.message || err?.message || 'No se pudo crear el usuario'
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

    mensaje.value = 'Usuario eliminado correctamente'
    await refresh()
  } catch (err: any) {
    mensaje.value = err?.data?.message || err?.message || 'No se pudo eliminar el usuario'
  } finally {
    eliminandoId.value = null
  }
}
</script>

<template>
  <div>
    <div class="bg-gray-800 p-4">
      <h1 class="text-2xl font-bold text-white">Administrador</h1>
      <div class="flex flex-wrap">
        <button
          class="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-2 px-4 m-1.5 rounded transition-colors"
          @click="alternarFormulario"
        >
          Añadir
        </button>
        <button
          class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 px-4 m-1.5 rounded transition-colors"
          @click="listarUsuarios"
        >
          Listar
        </button>
      </div>
    </div>
  </div>

  <div class="container mx-auto p-4">
    <p v-if="mensaje" class="mb-4 rounded bg-gray-800 p-2 text-sm">{{ mensaje }}</p>

    <div v-if="mostrarFormulario" class="mb-4 rounded border bg-gray-800 p-4 shadow-sm">
      <h2 class="mb-3 text-lg font-semibold">Crear usuario</h2>
      <div class="grid gap-3 md:grid-cols-2">
        <input v-model="form.rut" class="rounded border p-2 bg-gray-900" placeholder="RUT" />
        <input v-model="form.email" type="email" class="rounded border p-2 bg-gray-900" placeholder="Email" />
        <input v-model="form.password" type="password" class="rounded border p-2 bg-gray-900" placeholder="Contraseña" />
        <input v-model="form.perfilId" class="rounded border p-2 bg-gray-900" placeholder="ID de perfil" />
      </div>
      <button
        class="mt-3 rounded bg-green-700 px-4 py-2 text-white"
        :disabled="creando"
        @click="crearUsuario"
      >
        {{ creando ? 'Creando...' : 'Crear usuario' }}
      </button>
    </div>

    <h2 class="mb-4 text-xl font-semibold">Usuarios</h2>

    <div v-if="pending">Cargando usuarios...</div>
    <div v-else-if="error">
      <p class="text-red-600">{{ error?.data?.message || error?.message || 'No se pudieron cargar los usuarios' }}</p>
    </div>
    <ul v-else-if="usuarios?.length" class="space-y-2">
      <li v-for="item in usuarios" :key="item.id" class="flex items-center justify-between rounded border p-3">
        <div class="flex px-10 space-x-2">
          <h3 class="font-bold">{{ item.rut }}</h3>
          <p>{{ item.email }}</p>
          <p class="text-gray-600">{{ item.perfil?.nombre || 'Sin perfil' }}</p>
        </div>
        <button
          class="rounded bg-red-600 px-3 py-2 text-white"
          :disabled="eliminandoId === item.id"
          @click="eliminarUsuario(item.id)"
        >
          {{ eliminandoId === item.id ? 'Eliminando...' : 'Eliminar' }}
        </button>
      </li>
    </ul>
    <p v-else class="text-gray-600">Aún no hay usuarios listados.</p>
  </div>
</template>