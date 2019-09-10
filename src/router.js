import Vue from 'vue'
import Router from 'vue-router'
import FormAuth from './components/FormAuth'
import Home from './components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/auth',
      component: FormAuth
    },
    {
      path: '/',
      component: Home
    }
  ]
})
