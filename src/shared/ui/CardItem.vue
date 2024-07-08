<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>
<style scoped>
.wrapper {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 2px solid var(--yellow-color);
  border-radius: 10px;
  box-shadow: 3px 1px 10px var(--purple-color);
  background-color: white;
}

.wrapper:hover {
  cursor: pointer;
}
</style>
