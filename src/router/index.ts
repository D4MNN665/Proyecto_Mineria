import { createRouter, createWebHistory } from 'vue-router'
import Informacion from '@/views/Informacion.vue'
import PaginaInicial from '@/views/PaginaInicial.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: PaginaInicial,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Informacion,
    },
    {
      path: '/acerca',
      name: 'acerca',
      component: AboutView,
    },
  ],
})

export default router
