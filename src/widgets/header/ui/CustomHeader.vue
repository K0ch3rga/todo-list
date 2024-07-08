<script setup lang="ts">
const props = defineProps(['title'])
</script>
<template>
  <q-header elevated class="bg-primary text-white">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        {{ props.title }}
      </q-toolbar-title>
      <slot />
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
