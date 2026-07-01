<script setup lang="ts">
import { reactive, ref } from 'vue'
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: false
})

const schema = z.object({
  email: z.string().email('Email Inválido'),
  password: z.string().min(8, 'Debe tener al menos 8 caracteres')
})

type Schema = z.infer<typeof schema>

const state = reactive<Partial<Schema>>({
  email: "",
  password: ""
})

const errorForm = ref('')
const iniciandoSesion = ref(false)
const session = useUserSession()

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  event.preventDefault()
  await login()
}

async function obtenerDestinoInicio() {
  const { user } = session
  const perfil = (user.value as { perfil?: string } | null)?.perfil

  if (perfil === 'administrador') {
    return '/admin'
  }

  return '/ejecutivo'
}

async function login() {
  errorForm.value = ''
  iniciandoSesion.value = true

  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: state.email,
        password: state.password
      }
    })

    await session.fetch()
    await navigateTo(await obtenerDestinoInicio())
  }
  catch (err: any) {
    errorForm.value = err?.data?.message || err?.message || 'No se pudo iniciar sesión'
  }
  finally {
    iniciandoSesion.value = false
  }
}
</script>



<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="grid min-h-screen place-items-center px-4">
      <div class="w-full max-w-md rounded-2xl border border-gray-700 bg-gray-800 p-8 shadow-2xl shadow-black/30">
                <h1 class="text-2xl font-bold text-white">Login</h1>
                <UForm :schema="schema" :state="state" class="space-y-3 p-6" @submit="onSubmit">
                    <UFormField label="Email" name="email">
                        <UInput v-model="state.email" variant="none" class="w-full bg-gray-900 rounded border border-gray-600 "/>
                    </UFormField>

                    <UFormField label="Contraseña" name="password">
                        <UInput v-model="state.password" type="password" variant="none" class="w-full bg-gray-900 rounded border border-gray-600 " />
                    </UFormField>

                    <p v-if="errorForm" class="text-red-400 text-sm">{{ errorForm }}</p>

                    <UButton :loading="iniciandoSesion" type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 active:bg-blue-400 transition-colors">
                    Iniciar sesión
                    </UButton>
                </UForm>

            </div>
        </div>
    </div>
</template>