import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/view/Index'
import User from '@/view/User'
import Config from '@/view/Config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User
    },
    {
      path: '/Config',
      name: 'Config',
      component: Config
    }
  ]
})
