<template>
  <nav class="navigation">
    <router-link v-if="isVisibleLinkBack" class="navigation__link navigation__link--back link" to="/">
      <div class="navigation__link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 19-7-7m0 0 7-7m-7 7h18" />
        </svg>
      </div>
      <div class="navigation__link-title">
        Back
      </div>
    </router-link>

    <div class="navigation__title heading-primary">
      {{ routeTitle }}
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const routeTitle = computed(() => route.meta.title);
const isVisibleLinkBack = computed(() => route.path !== '/');
</script>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
}

.navigation__link {
  display: flex;
  align-items: center;
  font-size: 1.8rem;
}

.navigation__link-icon {
  margin-right: 0.5rem;
  width: 1em;
  height: 1em;
}

.navigation__link--back {
  margin-right: 1rem;
}
</style>