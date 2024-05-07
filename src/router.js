import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import ProductCreate from './views/products/ProductCreate.vue'
import ProductList from './views/products/ProductList.vue'
import ProductEdit from './views/products/ProductEdit.vue'
import ProductId from './views/products/ProductId.vue'
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'
import Profile from './views/auth/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/products/create',
    name: 'product-create',
    component: ProductCreate
  },
  {
    path: '/products',
    name: 'product-list',
    component: ProductList
  },
  {
    path: '/products/edit/:id',
    name: 'product-edit',
    component: ProductEdit
  },
  {
    path: '/products/:id',
    name: 'product-id',
    component: ProductId
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router