<template>
  <div class="bg-[url(/assets/images/highway.webp)] bg-cover bg-center py-6 text-white">
    <div class="mx-auto max-w-5xl px-4">
      <div class="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <p class="text-sm uppercase tracking-[0.25em] text-gray-200">Panel de administración</p>
        <h1 class="mt-2 text-3xl font-bold text-white">Accesos rápidos</h1>
        <p class="mt-2 max-w-2xl text-sm text-gray-200">
          Desde aquí puedes administrar usuarios, vehículos y tipos, además de acceder a las funciones operativas que también usa el ejecutivo.
        </p>
      </div>

      <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <NuxtLink to="/admin/usuarios" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_0_18px_rgba(37,99,235,0.25)]">
          <h2 class="text-lg font-semibold text-white">Usuarios</h2>
          <p class="mt-2 text-sm text-gray-200">Crear, listar, editar y borrar cuentas asociadas a perfiles.</p>
        </NuxtLink>

        <NuxtLink to="/admin/vehiculos" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_0_18px_rgba(37,99,235,0.25)]">
          <h2 class="text-lg font-semibold text-white">Vehículos</h2>
          <p class="mt-2 text-sm text-gray-200">Gestionar marcas, modelos, patente, foto y estado operativo.</p>
        </NuxtLink>

        <NuxtLink to="/admin/tipov" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_0_18px_rgba(37,99,235,0.25)]">
          <h2 class="text-lg font-semibold text-white">Tipos</h2>
          <p class="mt-2 text-sm text-gray-200">Administrar categorías de vehículos y su valor diario.</p>
        </NuxtLink>

        <NuxtLink to="/arriendos/base" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-green-400/60 hover:bg-green-500/10 hover:shadow-[0_0_18px_rgba(22,163,74,0.25)]">
          <h2 class="text-lg font-semibold text-white">Arriendos</h2>
          <p class="mt-2 text-sm text-gray-200">Ver el historial completo y los arriendos vigentes.</p>
        </NuxtLink>

        <NuxtLink to="/arriendos/nuevo" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-green-400/60 hover:bg-green-500/10 hover:shadow-[0_0_18px_rgba(22,163,74,0.25)]">
          <h2 class="text-lg font-semibold text-white">Nuevo arriendo</h2>
          <p class="mt-2 text-sm text-gray-200">Registrar entrega o devolución de un vehículo disponible.</p>
        </NuxtLink>

        <NuxtLink to="/vehiculos/estado" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:shadow-[0_0_18px_rgba(234,179,8,0.25)]">
          <h2 class="text-lg font-semibold text-white">Estados</h2>
          <p class="mt-2 text-sm text-gray-200">Cambiar el estado de los vehículos autorizados.</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>