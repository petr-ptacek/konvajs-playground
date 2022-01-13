<template>
  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import AppHeader from '@/common/components/AppHeader.vue';
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>