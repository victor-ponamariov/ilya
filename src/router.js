import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      requireAuth: true
    }
  }
]

export default new Router({
  mode: 'history',
  routes,
})

