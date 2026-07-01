<script setup lang="ts">
import { reactive, ref } from 'vue'
import * as z from 'zod'

const { user } = useUserSession()

const inicio = computed(() => (user.value as any)?.perfil === 'administrador' ? '/admin' : '/arriendos/base')

const schema = z.object({
  password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"]
})

const form = reactive({
  password: '',
  confirmPassword: ''
})

const enviando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')

async function actualizarContrasena() {
  mensajeError.value = ''
  mensajeExito.value = ''

  const validacion = schema.safeParse(form)
  if (!validacion.success) {
    mensajeError.value = validacion.error.issues[0]?.message || 'Datos inválidos'
    return
  }

  enviando.value = true

  try {
    await $fetch('/api/auth/password', {
      method: 'PUT',
      body: {
        password: form.password
      }
    })

    mensajeExito.value = 'Contraseña actualizada correctamente.'
    form.password = ''
    form.confirmPassword = ''

    setTimeout(() => {
      navigateTo('/login')
    }, 2000)

  } catch (err: any) {
    mensajeError.value = err?.data?.message || err?.message || 'Error al actualizar la contraseña'
  } finally {
    enviando.value = false
  }
}
</script>

<template>
  <div class="bg-[url(/assets/images/highway.webp)] bg-cover bg-center py-10 text-white">
    <div class="mx-auto max-w-md px-4">
      <div class="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div class="mb-6 flex items-center justify-between gap-4">
          <h1 class="text-2xl font-bold text-white">Mi Perfil</h1>
          <NuxtLink :to="inicio" class="text-sm text-blue-200 underline transition-colors hover:text-white">
            Volver
          </NuxtLink>
        </div>

        <p class="mb-4 text-sm text-gray-200">
          Ingresa tu nueva contraseña a continuación.
        </p>

        <div v-if="mensajeError" class="mb-4 rounded border border-red-400/30 bg-red-500/10 px-4 py-3 text-red-200">
          {{ mensajeError }}
        </div>

        <div v-if="mensajeExito" class="mb-4 rounded border border-green-400/30 bg-green-500/10 px-4 py-3 text-green-200">
          {{ mensajeExito }}
        </div>

        <form @submit.prevent="actualizarContrasena" class="space-y-4">
          <div>
            <label class="mb-1 block text-sm font-medium text-gray-200">Nueva Contraseña</label>
            <input
              v-model="form.password"
              type="password"
              placeholder="••••••••"
              class="w-full rounded-xl border border-white/20 bg-white/10 p-2 text-white outline-none placeholder:text-gray-300"
            />
          </div>

          <div>
            <label class="mb-1 block text-sm font-medium text-gray-200">Confirmar Contraseña</label>
            <input
              v-model="form.confirmPassword"
              type="password"
              placeholder="••••••••"
              class="w-full rounded-xl border border-white/20 bg-white/10 p-2 text-white outline-none placeholder:text-gray-300"
            />
          </div>

          <div class="pt-4">
            <button
              type="submit"
              :disabled="enviando"
              class="w-full rounded-xl bg-blue-600/90 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(37,99,235,0.45)] disabled:bg-gray-600"
            >
              {{ enviando ? 'Guardando...' : 'Cambiar Contraseña' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>