<template>
  <div>
    <div class="container mx-auto max-w-5xl px-4 py-8">
      <div class="mb-6 rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-lg shadow-black/20">
        <p class="text-sm uppercase tracking-[0.25em] text-gray-400">Panel de administración</p>
        <h1 class="mt-2 text-3xl font-bold text-white">Accesos rápidos</h1>
        <p class="mt-2 max-w-2xl text-sm text-gray-300">
          Desde aquí puedes administrar usuarios, vehículos y tipos, además de acceder a las funciones operativas que también usa el ejecutivo.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <NuxtLink to="/admin/usuarios" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-blue-500 hover:bg-gray-750">
          <h2 class="text-lg font-semibold text-white">Usuarios</h2>
          <p class="mt-2 text-sm text-gray-300">Crear, listar, editar y borrar cuentas asociadas a perfiles.</p>
        </NuxtLink>

        <NuxtLink to="/admin/vehiculos" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-blue-500 hover:bg-gray-750">
          <h2 class="text-lg font-semibold text-white">Vehículos</h2>
          <p class="mt-2 text-sm text-gray-300">Gestionar marcas, modelos, patente, foto y estado operativo.</p>
        </NuxtLink>

        <NuxtLink to="/admin/tipov" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-blue-500 hover:bg-gray-750">
          <h2 class="text-lg font-semibold text-white">Tipos</h2>
          <p class="mt-2 text-sm text-gray-300">Administrar categorías de vehículos y su valor diario.</p>
        </NuxtLink>

        <NuxtLink to="/arriendos/base" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-green-500 hover:bg-gray-750">
          <h2 class="text-lg font-semibold text-white">Arriendos</h2>
          <p class="mt-2 text-sm text-gray-300">Ver el historial completo y los arriendos vigentes.</p>
        </NuxtLink>

        <NuxtLink to="/arriendos/nuevo" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-green-500 hover:bg-gray-750">
          <h2 class="text-lg font-semibold text-white">Nuevo arriendo</h2>
          <p class="mt-2 text-sm text-gray-300">Registrar entrega o devolución de un vehículo disponible.</p>
        </NuxtLink>

        <NuxtLink to="/vehiculos/estado" class="rounded-2xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-yellow-500 hover:bg-gray-750">
          <h2 class="text-lg font-semibold text-white">Estados</h2>
          <p class="mt-2 text-sm text-gray-300">Cambiar el estado de los vehículos autorizados.</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>