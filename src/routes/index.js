import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../components/pages/HomePage.vue';
import AboutPage from '../components/pages/AboutPage.vue';
import ContactPage from '../components/pages/ContactPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
  ],
});

export default router;
