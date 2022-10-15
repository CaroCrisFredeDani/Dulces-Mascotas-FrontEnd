import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/perros',
    name: 'perros',
    component: () => import('../views/PerrosView.vue')
  },
  {
    path: '/gatos',
    name: 'gatos',
    component: () => import('../views/GatosView.vue')
  },
  {
    path: '/desrip/:id',
    name: 'descrip',
    props: true,
    component: () => import('../views/DescripView.vue')
  },
  {
    path: '/formulario/:id',
    name: 'form',
    props: true,
    component: () => import('../views/FormView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
