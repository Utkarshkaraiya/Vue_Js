import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import AllProduct from '../views/AllProduct.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Singlepage from "../components/Singlepage.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/id',
    name: 'Singlepage',
    component: Singlepage,
    props:true
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }, {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Women',
    name: 'AllProduct',
    component: AllProduct
  },
  {
    path: '/Men',
    name: 'Category',
    component: Category
  },
  {
    path: '/Jwellery',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
