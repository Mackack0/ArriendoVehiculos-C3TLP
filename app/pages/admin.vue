<script setup lang="ts">
const { data: usuarios, error, pending, refresh } = await useFetch<any[]>('/api/usuarios', {
  immediate: false,
  default: () => []
})

const { user } = useUserSession()

async function listarUsuarios() {
  

  await refresh()
}

</script>

<template>
  <div>
    <div class="bg-gray-800 p-4">
      <h1 class="text-2xl font-bold text-white">Administrador</h1>
      <div class="flex">
        <button class="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold py-2 px-4 m-1.5 rounded transition-colors">Añadir</button>
        <button
          class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-2 px-4 m-1.5 rounded transition-colors"
          @click="listarUsuarios"
        >
          Listar
        </button>
        <button class="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold py-2 px-4 m-1.5 rounded transition-colors">Quitar</button>
      </div>
    </div>
  </div>

  <div class="container mx-auto p-4">
    <h2 class="text-xl font-semibold mb-4">Usuarios</h2>

    <div v-if="pending">Cargando usuarios...</div>
    <div v-else-if="error">
      <p class="text-red-600">{{ error?.data?.message || error?.message || 'No se pudieron cargar los usuarios' }}</p>
    </div>
    <ul v-else-if="usuarios?.length" class="space-y-2">
      <li v-for="item in usuarios" :key="item.id" class="border rounded p-3">
        <h3 class="font-bold">{{ item.nombre }}</h3>
        <p>{{ item.email }}</p>
        <p class="text-sm text-gray-600">{{ item.perfil?.nombre }}</p>
      </li>
    </ul>
    <p v-else class="text-gray-600">Aún no hay usuarios listados.</p>
  </div>
</template>