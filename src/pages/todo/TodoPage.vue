<script setup lang="ts">
import { userStore } from '@/shared/store'
import type { Todo } from '@/entities/todo'
import { addTodo, getTodoById, DescriptionCard } from '@/entities/todo'
import { AddTodo } from '@/features/addTodo/'
import { TodoLists } from '@/widgets/todolists'
import { Header } from '@/widgets/header'
import { ref } from 'vue'

const user = userStore()

const popupData = ref({} as Todo)
const popupVisible = ref(false)
const rerender = ref(0) // used to rerender list
const doneOpened = ref(true)
const undoneOpened = ref(false)

const handleAdd = async (todo: Todo) => {
  await addTodo(todo)
  rerender.value++
}

const showPopup = async (id: string) => {
  await getTodoById(id).then((t) => (popupData.value = t))
  popupVisible.value = true
}

const closePopup = () => {
  popupVisible.value = false
}

const logout = () => {
  user.logout()
}
</script>
<template>
  <Header title="Todo list">
    <q-btn flat @click="logout"> Logout </q-btn>
  </Header>
  <q-page-container>
    <q-page class="fit flexflex-column">
      <AddTodo @add="handleAdd" class="self-center" />
      <TodoLists
        @show-info="showPopup"
        :key="rerender"
        v-model:done-opened="doneOpened"
        v-model:undone-opened="undoneOpened"
      />
      <DescriptionCard :todo="popupData" :show-popup="popupVisible" @close-popup="closePopup" />
    </q-page>
  </q-page-container>
</template>
<style scoped></style>
