import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import { Toast } from 'vant'

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
  },
  {
    path: '/detail',
    component: () => import('../views/detail'),
    name: 'detail',
    children: [
      {
        path: '/bizcustinfoform',
        component: () => import('../views/addCustomer'),
        name: 'bizcustinfoform'
      },
      {
        path: '/bizsupplierinfoform',
        component: () => import('../views/bizsupplierinfoform'),
        name: 'bizsupplierinfoform'
      },
      {
        path: '/projptenderrecord',
        component: () => import('../views/projptenderrecord'),
        name: 'projptenderrecord'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { // 如果未匹配到路由
    Toast('页面不存在')
    from.name ? next({ name: from.name }) : next('/') // 如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next() // 如果匹配到正确跳转
  }
})
export default router
