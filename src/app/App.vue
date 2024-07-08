<script setup lang="ts">
import { LoginPage } from '@/pages/login'
import { TodoPage } from '@/pages/todo'
import { getUserInfo, userStore } from '@/shared/store'

// it's here because if i made it in pinia, loading time was so big that i could see login screen before todolist
const jwtUser = getUserInfo()
const user = userStore()
if (jwtUser.login) {
  user.setUser(jwtUser.login)
} else {
  user.logout()
}
</script>

<template>
  <q-layout view="hHh LpR lfr" v-if="!user.isLogged">
    <LoginPage />
  </q-layout>
  <q-layout view="hHh LpR lfr" v-else>
    <TodoPage />
  </q-layout>
</template>

<style></style>
