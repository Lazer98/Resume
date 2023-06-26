import { createRouter, createWebHistory } from 'vue-router';
//english
import Home from './components/english/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import CV from './components/CV.vue'





const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/cv',
    component: CV,
  },
  {
    path: '/contact',
    component: Contact,
  },
  {
    path: '/about',
    component: About,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
