<template>
  <div>
    <div class="grid h-screen place-items-center">
      <div class="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col items-center">
        
        <NuxtLink to="/admin/usuarios" class="w-full">
          <button class="w-full bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 mb-4">
            Usuarios
          </button>
        </NuxtLink>

        <NuxtLink to="/admin/vehiculos" class="w-full">
          <button class="w-full bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 mb-4">
            Vehículos
          </button>
        </NuxtLink>

        <NuxtLink to="/admin/tipov" class="w-full">
          <button class="w-full bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:bg-blue-800 mb-4">
            Tipos
          </button>
        </NuxtLink>

        <NuxtLink to="/login" class="w-full">
          <button class="w-full bg-red-700 text-white font-semibold py-2 px-4 rounded hover:bg-red-800">
            Cerrar Sesión
          </button>
        </NuxtLink>

      </div>
    </div>
    <NuxtChild />
  </div>
</template>