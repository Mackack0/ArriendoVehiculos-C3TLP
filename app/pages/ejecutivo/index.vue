<template>
  <div class="container mx-auto max-w-5xl px-4 py-8">
    <div class="mb-6 rounded-2xl border border-emerald-700 bg-linear-to-br from-emerald-950 via-gray-800 to-gray-900 p-6 shadow-lg shadow-black/20">
      <p class="text-sm uppercase tracking-[0.25em] text-emerald-300">Panel ejecutivo</p>
      <h1 class="mt-2 text-3xl font-bold text-white">Gestión operativa</h1>
      <p class="mt-2 max-w-2xl text-sm text-gray-300">
        Desde aquí accedes a las funciones diarias: arriendos, entregas y recepciones, cambios de estado y tu contraseña.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <NuxtLink to="/arriendos/base" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-emerald-500 hover:bg-gray-750">
        <h2 class="text-lg font-semibold text-white">Arriendos</h2>
        <p class="mt-2 text-sm text-gray-300">Listar arriendos vigentes e históricos con su valor total.</p>
      </NuxtLink>

      <NuxtLink to="/arriendos/nuevo" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-emerald-500 hover:bg-gray-750">
        <h2 class="text-lg font-semibold text-white">Nuevo arriendo</h2>
        <p class="mt-2 text-sm text-gray-300">Ingresar un arriendo solo para vehículos disponibles.</p>
      </NuxtLink>

      <NuxtLink to="/vehiculos/estado" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-yellow-500 hover:bg-gray-750">
        <h2 class="text-lg font-semibold text-white">Estados</h2>
        <p class="mt-2 text-sm text-gray-300">Cambiar el estado operativo de vehículos permitidos.</p>
      </NuxtLink>

      <NuxtLink to="/perfil" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-blue-500 hover:bg-gray-750">
        <h2 class="text-lg font-semibold text-white">Mi contraseña</h2>
        <p class="mt-2 text-sm text-gray-300">Actualizar tu contraseña de acceso cuando lo necesites.</p>
      </NuxtLink>

      <NuxtLink to="/arriendos/base" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-blue-500 hover:bg-gray-750">
        <h2 class="text-lg font-semibold text-white">Detalle de arriendo</h2>
        <p class="mt-2 text-sm text-gray-300">Abre un arriendo desde la lista para ver fotos y datos completos.</p>
      </NuxtLink>

      <NuxtLink to="/arriendos/base" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-blue-500 hover:bg-gray-750">
        <h2 class="text-lg font-semibold text-white">Recepción y entrega</h2>
        <p class="mt-2 text-sm text-gray-300">Sube fotografías y fecha/hora del movimiento del vehículo.</p>
      </NuxtLink>
    </div>
  </div>
</template>