<script setup lang="ts">
const props = defineProps(['text'])
</script>
<template>
  <button type="submit">
    {{ props.text }}
  </button>
</template>

<style scoped>
button {
  padding: 5px 10px;
  border: 3px solid var(--yellow-color);
  border-radius: 10px;
  box-shadow: 3px 1px 10px var(--purple-color);
  color: var(--purple-color);
}

button:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
