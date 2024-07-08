<script setup lang="ts">
import { getTodosByUser, ItemListTodo, patchTodo, type Todo } from '@/entities/todo'
import { userStore } from '@/shared/store'
import { onMounted, ref } from 'vue'

const emits = defineEmits<{
  showInfo: [id: string]
}>()
const doneOpened = defineModel<boolean>('doneOpened', { required: true })
const undoneOpened = defineModel<boolean>('undoneOpened', { required: true })

const user = userStore().getUser
const todos = ref<Todo[]>([])
const loading = ref(false)

const updateTodos = async () => {
  loading.value = true
  await getTodosByUser(user.login)
    .then((d) => (todos.value = d))
    .finally(() => (loading.value = false))
}

const handleDoneUpdate = async (id: string, isDone: boolean) => {
  await patchTodo({ id: id, isDone: isDone } as Todo)
  updateTodos()
}

onMounted(() => updateTodos())
</script>

<template>
  <q-list padding>
    <q-expansion-item :default-opened="doneOpened" label="Undone todos">
      <ItemListTodo
        v-for="todo in todos.filter((t) => !t.isDone)"
        :key="todo.id"
        :todo="todo"
        v-model:is-done="todo.isDone"
        @update:is-done="(isDone) => handleDoneUpdate(todo.id, isDone)"
        @show-info="emits('showInfo', todo.id)"
      />
    </q-expansion-item>
  </q-list>
  <q-list v-show="todos.find((t) => t.isDone)">
    <q-expansion-item :default-opened="undoneOpened" label="Done todos">
      <ItemListTodo
        v-for="todo in todos.filter((t) => t.isDone)"
        :key="todo.id"
        :todo="todo"
        v-model:is-done="todo.isDone"
        @update:is-done="(isDone) => handleDoneUpdate(todo.id, isDone)"
        @show-info="emits('showInfo', todo.id)"
      />
    </q-expansion-item>
  </q-list>
</template>

<style scoped></style>
