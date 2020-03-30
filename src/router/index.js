import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../layout'),
    children: [
      {
        path: '/approval',
        component: () => import('../views/approval'),
        name: 'approval'
      },
      {
        path: '/my',
        component: () => import('../views/my'),
        name: 'my',
        children: []
      },
      {
        path: '/personCenter',
        component: () => import('../views/personCenter'),
        name: 'personCenter'
      }
    ]
  },
  {
    path: '/forgetPassword',
    component: () => import('../views/forgetPassword'),
    name: 'forgetPassword'
  },
  {
    path: '/editPassword',
    component: () => import('../views/editPassword'),
    name: 'editPassword'
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
