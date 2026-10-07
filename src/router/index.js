import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: HomeView
  },
  {
    path: '/background',
    name: 'Background',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/ProjectsView.vue')
  },
  // Redirect old routes
  { path: '/about', redirect: '/background' },
  { path: '/projects', redirect: '/portfolio' },
  { path: '/skills', redirect: '/' },
  { path: '/resume', redirect: '/background' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router