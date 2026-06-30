<script setup lang="ts">
import { reactive, ref } from 'vue'
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
  email: z.string().email('Email Inválido'),
  password: z.string().min(8, 'Debe tener al menos 8 caracteres')
})

type Schema = z.infer<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const errorForm = ref('')
const iniciandoSesion = ref(false)

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  event.preventDefault()
  await login()
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

    await navigateTo('/')
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
    <div>
        <div class="grid h-screen place-items-center">
            <div class="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 class="text-2xl font-bold text-white">Login</h1>
                <UForm :schema="schema" :state="state" class="space-y-3 p-6" @submit="onSubmit">
                    <UFormField label="Email" name="email">
                        <UInput v-model="state.email" variant="none" class="w-full bg-gray-900 rounded border border-gray-600 "/>
                    </UFormField>

                    <UFormField label="Contraseña" name="password">
                        <UInput v-model="state.password" type="password" variant="none" class="w-full bg-gray-900 rounded border border-gray-600 " />
                    </UFormField>

                    <UButton type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
                    Submit
                    </UButton>
                </UForm>


            </div>
        </div>
    </div>
</template>