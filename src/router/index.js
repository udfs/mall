import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/home.vue'
const Home = ()  => import('../views/home.vue')
const Category=()=> import('../views/category')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/category',
    name:'Category',
    component:Category
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
