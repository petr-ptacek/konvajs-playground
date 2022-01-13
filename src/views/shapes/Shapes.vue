<template>
  <NavigationList :items="navigationItems" />
</template>

<script lang="ts" setup>
import NavigationList from '@/common/components/NavigationList.vue';


const navigationItems = [
  {
    title: 'Rect',
    path: '/shapes/rect'
  }
];
</script>