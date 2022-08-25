// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeView,
  },
  {
    path: '/:countryCode',
    name: '/CountryDetails',
    component: () => import('./components/CountryDetails.vue'),
  },
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
});