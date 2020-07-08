import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/userIndex',
      name: 'userIndex',
      component:require('@/components/userIndex').default
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component:require('@/components/userInfo').default
    },
    {
      path: '/util',
      name: 'util',
      component:require('@/components/util').default,
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
