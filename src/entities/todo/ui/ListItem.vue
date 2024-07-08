<script setup lang="ts">
import type { PropType } from 'vue'
import type { Todo } from '../model/Todo'

const isDone = defineModel('isDone')
const { todo } = defineProps({ todo: { type: Object as PropType<Todo>, required: true } })
const emits = defineEmits<{
  showInfo: [id: string]
}>()

const dateColor = Date.now() > Date.parse(todo.endDate ?? '') ? 'negative' : 'info'
</script>

<template>
  <q-item tag="label">
    <q-checkbox v-model="isDone" />
    <q-item-label header>
      {{ todo.title }}
      <q-badge
        v-show="!!todo.endDate"
        outline
        :label="todo.endDate"
        :color="dateColor"
        class="q-ml-sm"
      />
    </q-item-label>
    <q-item-section> </q-item-section>
    <q-space></q-space>
    <q-btn flat @click="emits('showInfo', todo.id)">
      <q-icon name="info" />
    </q-btn>
  </q-item>
</template>
<style scoped></style>
