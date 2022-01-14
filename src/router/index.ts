import { createRouter, createWebHistory } from 'vue-router';
import Home                               from '@/views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  strict: import.meta.env.PROD,
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
      meta: {
        title: 'KonvaJS Playground'
      }
    },
    {
      name: 'shapes',
      path: '/shapes',
      component: () => import('@/views/Shapes.vue'),
      meta: {
        title: 'Shapes'
      }
    }
  ]
});

export default router;