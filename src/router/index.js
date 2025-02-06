import { createRouter, createWebHistory } from 'vue-router';
const HomeView = () => import('../views/HomeView.vue');
const AboutView = () => import('../views/AboutView.vue');
const LeadView= () =>import('../views/LeadView.vue');
const ContactView= () =>import('../views/ContactView.vue');


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
      {
        path: '/leadGeneration',
        name: 'leadGeneration',
        component: LeadView,
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView,
      },
     
  ],
});

export default router;
