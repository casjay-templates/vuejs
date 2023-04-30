import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home.vue';
import NotFound from '@/views/404.vue';

const routes: Array<RouteRecordRaw> = [
  {
    component: Home,
    path: '/',
    name: 'Home',
    meta: { title: 'Home', layout: 'default' },
  },
  {
    component: NotFound,
    path: '/error/404',
    meta: { title: 'Error', layout: 'none' },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/error/404',
  },
];

const router: Router = createRouter({
  history: createWebHistory('/vuejs'),
  routes,
});

router.afterEach((to) => {
  const baseTitle = '';
  document.title = `${baseTitle} ${to.meta.title}`;
});

export default router;
