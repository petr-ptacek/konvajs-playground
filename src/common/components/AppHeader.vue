<template>
  <header class="header">
    <router-link v-if="isVisibleLinkBack" class="header__back-link link" to="/">
      <div class="link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 19-7-7m0 0 7-7m-7 7h18" />
        </svg>
      </div>
      <div class="link-title">
        Back
      </div>
    </router-link>

    <div class="header__title heading-primary">
      {{ routeTitle }}
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const routeTitle = computed(() => route.meta.title);
const isVisibleLinkBack = computed(() => route.path !== '/');
</script>

<style scoped>
.header {
  padding: 0 2.5rem;
  background-color: var(--color-black-2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.link-icon {
  margin-right: 0.5rem;
  width: 1em;
  height: 1em;
}

.header__back-link {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  margin-right: 1rem;
}
</style>