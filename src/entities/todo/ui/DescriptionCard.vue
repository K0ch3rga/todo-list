<script setup lang="ts">
import type { PropType } from 'vue'
import type { Todo } from '../model/Todo'
const { todo } = defineProps({ todo: { type: Object as PropType<Todo>, required: true } })
const showPopup = defineModel('showPopup', { required: true, type: Boolean })
const emits = defineEmits<{ closePopup: [] }>()
</script>
<template>
  <q-dialog v-model="showPopup" @update:model-value="emits('closePopup')">
    <q-card class="q-pa-md">
      <div class="text-h6">{{ todo.title }}</div>
      <q-card-section>{{ todo.description }}</q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped lang="css"></style>
