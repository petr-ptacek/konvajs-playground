<template>
  <header class="header">
    <AppNavigation />
  </header>
</template>

<script lang="ts" setup>
import AppNavigation from './AppNavigation.vue';
</script>

<style scoped>
.header {
  padding: 2rem;
  background-color: var(--color-black-2);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>