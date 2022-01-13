<template>
  <div class="navigation-list">
    <router-link v-for="item of items" :to="item.path" class="navigation-list__item link">
      {{ item.title }}
    </router-link>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  items: Array<{
    title: string;
    path: string;
  }>;
}

const { items } = defineProps<IProps>();
</script>

<style scoped>
.navigation-list {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 20rem));
}

.navigation-list__item {
  padding: 2rem;
  font-size: 2rem;
  display: inline-block;
  text-align: center;
  background-color: var(--color-black-2);
  border-radius: 4px;
}
</style>