import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/page/Hello/Hello'
import DcTips from '@/page/DcTipsPage/DcTipsPage'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/DcTips',
      name: 'DcTips',
      component: DcTips
    }
  ]
})
