<script setup lang="ts">
const props = defineProps(['label', 'type'])
const model = defineModel('text')
</script>

<template>
  <input :type="props.type" :placeholder="props.label + '...'" v-model="model" />
</template>

<style scoped>
input {
  color: var(--purple-color);
  padding: 5px 10px;
  border: 3px solid var(--yellow-color);
  border-radius: 10px;
  color: var(--purple-color);
  box-shadow: 3px 1px 10px var(--purple-color);
}
</style>
