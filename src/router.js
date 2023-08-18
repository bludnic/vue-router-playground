import { createRouter, createWebHistory } from 'vue-router'

import Products from './views/Products.vue'
import Contact from './views/Contact.vue'
import Product from './views/Product.vue'

const routes = [
  { path: '/', component: Products },
  { path: '/contact', component: Contact },
  { path: '/product/:id', component: Product }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
