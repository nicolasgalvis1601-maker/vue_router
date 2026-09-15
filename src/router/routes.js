import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../pages/HomePage.vue') },
      { path: 'hamburguesas', name: 'hamburguesas', component: () => import('../pages/HamburguesasPage.vue') },
      { path: 'perros', name: 'perros', component: () => import('../pages/PerrosPage.vue') },
      { path: 'pizzas', name: 'pizzas', component: () => import('../pages/PizzasPage.vue') },
      { path: 'bebidas', name: 'bebidas', component: () => import('../pages/BebidasPage.vue') },
      { path: 'postres', name: 'postres', component: () => import('../pages/PostresPage.vue') },
      { path: 'promociones', name: 'promociones', component: () => import('../pages/PromocionesPage.vue') },
      { path: 'nosotros', name: 'nosotros', component: () => import('../pages/NosotrosPage.vue') },
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default routes