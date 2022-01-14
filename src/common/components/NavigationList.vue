<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link
            v-for="item of items"
            :key="item.path"
            :to="item.path"
            class="navigation__link link"
        >
          <span class="navigation-title">
            {{ item.title }}
          </span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
interface INavItem {
  title: string;
  path: string;
}

interface IProps {
  items: Array<INavItem>;
}

const { items } = defineProps<IProps>();
</script>

<style scoped>
.navigation__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min-content, 20rem));
  gap: 0.5rem;
}

.navigation__item {
  font-size: 2rem;
  display: inline-block;
  background-color: var(--color-black-2);
  border-radius: 4px;
}

.navigation__link {
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>