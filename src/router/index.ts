import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Signin from '@/pages/signin/index.vue';
import Home from '@/pages/home/index.vue';
import Test from '@/pages/test.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
