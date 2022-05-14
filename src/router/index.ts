import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tell-us-about-yourself',
      name: 'tell-us-about-yourself',
      component: () => import('../views/TellUsAboutYourselfView.vue')
    },
    {
      path: '/summary',
      name: 'summary',
      component: () => import('../views/SummaryView.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/ErrorView.vue')
    }
  ]
})

export default router
