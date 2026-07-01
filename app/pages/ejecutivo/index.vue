<template>
  <div class="bg-[url(/assets/images/highway.webp)] bg-cover bg-center py-6 text-white">
    <div class="mx-auto max-w-5xl px-4">
      <div class="mb-6 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <p class="text-sm uppercase tracking-[0.25em] text-emerald-200">Panel ejecutivo</p>
        <h1 class="mt-2 text-3xl font-bold text-white">Gestión operativa</h1>
        <p class="mt-2 max-w-2xl text-sm text-gray-200">
          Desde aquí accedes a las funciones diarias: arriendos, entregas y recepciones, cambios de estado y tu contraseña.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <NuxtLink to="/arriendos/base" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-emerald-400/60 hover:bg-emerald-500/10 hover:shadow-[0_0_18px_rgba(16,185,129,0.25)]">
          <h2 class="text-lg font-semibold text-white">Arriendos</h2>
          <p class="mt-2 text-sm text-gray-200">Listar arriendos vigentes e históricos con su valor total.</p>
        </NuxtLink>

        <NuxtLink to="/arriendos/nuevo" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-emerald-400/60 hover:bg-emerald-500/10 hover:shadow-[0_0_18px_rgba(16,185,129,0.25)]">
          <h2 class="text-lg font-semibold text-white">Nuevo arriendo</h2>
          <p class="mt-2 text-sm text-gray-200">Ingresar un arriendo solo para vehículos disponibles.</p>
        </NuxtLink>

        <NuxtLink to="/vehiculos/estado" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-yellow-400/60 hover:bg-yellow-500/10 hover:shadow-[0_0_18px_rgba(234,179,8,0.25)]">
          <h2 class="text-lg font-semibold text-white">Estados</h2>
          <p class="mt-2 text-sm text-gray-200">Cambiar el estado operativo de vehículos permitidos.</p>
        </NuxtLink>

        <NuxtLink to="/perfil" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_0_18px_rgba(37,99,235,0.25)]">
          <h2 class="text-lg font-semibold text-white">Mi contraseña</h2>
          <p class="mt-2 text-sm text-gray-200">Actualizar tu contraseña de acceso cuando lo necesites.</p>
        </NuxtLink>

        <NuxtLink to="/arriendos/base" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_0_18px_rgba(37,99,235,0.25)]">
          <h2 class="text-lg font-semibold text-white">Detalle de arriendo</h2>
          <p class="mt-2 text-sm text-gray-200">Abre un arriendo desde la lista para ver fotos y datos completos.</p>
        </NuxtLink>

        <NuxtLink to="/arriendos/base" class="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/10 backdrop-blur-md transition-all duration-200 hover:border-blue-400/60 hover:bg-blue-500/10 hover:shadow-[0_0_18px_rgba(37,99,235,0.25)]">
          <h2 class="text-lg font-semibold text-white">Recepción y entrega</h2>
          <p class="mt-2 text-sm text-gray-200">Sube fotografías y fecha/hora del movimiento del vehículo.</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>