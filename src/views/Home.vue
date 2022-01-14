<template>
  <article>
    <div class="container">
      <NavigationList :items="navigationItems" />
    </div>
  </article>
</template>

<script lang="ts" setup>
import NavigationList from '@/common/components/NavigationList.vue';

const navigationItems = [
  {
    title: 'Shapes',
    path: '/shapes'
  }
];
</script>

<style scoped>
.container {
  margin-top: 2rem;
}
</style>