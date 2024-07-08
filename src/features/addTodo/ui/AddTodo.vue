<script setup lang="ts">
import type { Todo } from '@/entities/todo'
import { userStore } from '@/shared/store'
import { ref } from 'vue'

const user = userStore().getUser

const emits = defineEmits<{
  add: [todo: Todo]
}>()

const title = ref('')
const description = ref('')
const start = ref<Date>()
const end = ref<Date>()
const popupVisible = ref(false)

const handleAdd = () => {
  emits('add', {
    isDone: false,
    description: description.value,
    title: title.value,
    user: user.login
  } as Todo)
  title.value = ''
  description.value = ''
  popupVisible.value = false
}

const handleShowPopup = () => {
  popupVisible.value = true
}
</script>
<template>
  <div>
    <div class="flex column">
      <q-btn @click="handleShowPopup" push class="self-center q-px-xl"
        ><q-icon name="add" />
      </q-btn>
    </div>

    <q-dialog v-model="popupVisible">
      <q-card class="q-pa-md">
        <q-form @submit="handleAdd" class="flex column">
          <q-input v-model="title" label="Title" />
          <q-input v-model="description" label="Description" hint="(optional)" />
          <q-field borderless class="q-mt-sm">
            <q-input
              filled
              v-model="start"
              mask="date"
              :rules="['date']"
              class="q-mr-sm"
              hint="start date (optional)"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="start">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
            <q-input
              filled
              v-model="end"
              mask="date"
              :rules="['date']"
              class="q-ml-sm"
              hint="end date (optional)"
            >
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="end">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-field>
          <q-btn type="submit" label="Add todo" flat class="self-end" />
        </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<style scoped></style>
