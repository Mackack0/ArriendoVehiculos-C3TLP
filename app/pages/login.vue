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
  <div class="min-h-screen bg-[url(/assets/images/highway.webp)] bg-cover bg-center text-white">
    <div class="grid min-h-screen place-items-center px-4">
      <div class="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <h1 class="text-2xl font-bold text-white">Login</h1>
        <UForm :schema="schema" :state="state" class="space-y-3 p-6" @submit="onSubmit">
          <UFormField label="Email" name="email">
            <UInput v-model="state.email" variant="none" class="w-full rounded-xl border border-white/20 bg-white/10 p-2 text-white outline-none placeholder:text-gray-300" />
          </UFormField>

          <UFormField label="Contraseña" name="password">
            <UInput v-model="state.password" type="password" variant="none" class="w-full rounded-xl border border-white/20 bg-white/10 p-2 text-white outline-none placeholder:text-gray-300" />
          </UFormField>

          <p v-if="errorForm" class="text-sm text-red-200">{{ errorForm }}</p>

          <UButton :loading="iniciandoSesion" type="submit" class="mt-4 w-full rounded-xl bg-blue-600/90 px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-[0_0_18px_rgba(37,99,235,0.45)] active:bg-blue-400">
            Iniciar sesión
          </UButton>
        </UForm>
      </div>
    </div>
  </div>
</template>