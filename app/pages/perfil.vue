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
  <div class="container mx-auto p-4 max-w-md mt-10">
    <div class="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
      <div class="mb-6 flex items-center justify-between gap-4">
        <h1 class="text-2xl font-bold text-white">Mi Perfil</h1>
        <NuxtLink :to="inicio" class="text-blue-400 hover:text-blue-300 underline text-sm">
          Volver
        </NuxtLink>
      </div>

      <p class="text-gray-300 text-sm mb-4">
        Ingresa tu nueva contraseña a continuación.
      </p>

      <div v-if="mensajeError" class="mb-4 bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded">
        {{ mensajeError }}
      </div>
      
      <div v-if="mensajeExito" class="mb-4 bg-green-900 border border-green-700 text-green-200 px-4 py-3 rounded">
        {{ mensajeExito }}
      </div>

      <form @submit.prevent="actualizarContrasena" class="space-y-4">
        
        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Nueva Contraseña</label>
          <input 
            v-model="form.password" 
            type="password" 
            placeholder="••••••••"
            class="w-full rounded border border-gray-600 bg-gray-900 p-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" 
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-400 mb-1">Confirmar Contraseña</label>
          <input 
            v-model="form.confirmPassword" 
            type="password" 
            placeholder="••••••••"
            class="w-full rounded border border-gray-600 bg-gray-900 p-2 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500" 
          />
        </div>

        <div class="pt-4">
          <button
            type="submit"
            :disabled="enviando"
            class="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            {{ enviando ? 'Guardando...' : 'Cambiar Contraseña' }}
          </button>
        </div>
        
      </form>
    </div>
  </div>
</template>