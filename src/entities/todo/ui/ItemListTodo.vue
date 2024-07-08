<script setup lang="ts">
import type { PropType } from 'vue'
import type { Todo } from '../model/Todo'

const isDone = defineModel('isDone')
const { todo } = defineProps({ todo: { type: Object as PropType<Todo>, required: true } })
const emits = defineEmits<{
  showInfo: [id: string]
}>()
</script>

<template>
  <q-item tag="label">
    <q-checkbox v-model="isDone" />
    <q-item-section>
      {{ todo.title }}
    </q-item-section>
    <q-btn flat @click="emits('showInfo', todo.id)">
      <q-icon name="info" />
    </q-btn>
  </q-item>
</template>
<style scoped></style>
