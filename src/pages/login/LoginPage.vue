<script setup lang="ts">
import { LoginForm } from '@/features/loginForm'
import { Header } from '@/widgets/header'
</script>
<template>
  <!-- <Header title="Login" /> -->

  <q-page-container>
    <q-page class="fit flex flex-center">
      <LoginForm />
    </q-page>
  </q-page-container>
</template>
<style scoped></style>
