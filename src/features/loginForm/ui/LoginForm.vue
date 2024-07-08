<script setup lang="ts">
import { ref } from 'vue'
import {
  loginOrRegister,
  vallidationEmail as valMail,
  vallidationPassword as valPass
} from '../index'

const login = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')
const handleLogin = async () => {
  error.value = ''
  loading.value = true
  await setTimeout(() => {}, 1000)
  error.value = await loginOrRegister(login.value, password.value)
  loading.value = false
}
</script>
<template>
  <q-card bordered tag="form" class="q-pa-lg flex column" @submit.stop.prevent="handleLogin">
    <h3>Enter or Register</h3>
    <div>Automatic registration with new login</div>
    <q-input
      v-model="login"
      name="login"
      autofocus
      label="login"
      type="email"
      dense
      :rules="[(v) => valMail(v)]"
    />
    <q-input
      v-model="password"
      name="password"
      label="password"
      type="password"
      dense
      :rules="[(v) => valPass(v)]"
    />
    <q-btn label="Submit" type="submit" class="self-end">
      <q-spinner v-show="loading" />
    </q-btn>
  </q-card>
</template>

<style scoped></style>
