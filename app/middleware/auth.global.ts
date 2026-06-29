<script setup lang="ts">
const { user } = await useUserSession();
</script>

<template>
    <div v-if="user"></div>
        <p>Bienvenido, {{ user.rut }} </p>
        <p>Tu perfil es: {{ user.perfil }}</p>
    </div>
</template>
