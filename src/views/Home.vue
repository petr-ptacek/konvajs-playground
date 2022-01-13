<template>
  <article>
    <NavigationList :items="navigationItems" />
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

<style>

</style>