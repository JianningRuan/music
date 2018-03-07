import Vue from 'vue'
import Router from 'vue-router'

import music from '@/components/music/music'
import find from '@/components/find/find'
import findMy from '@/components/findMy/find-my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/music'
    },
    {
      path: '/music',
      component: music,
      children: [
        {
          path: '/',
          redirect: 'find'
        },
        {
          path: 'find',
          component: find
        },
        {
          path: 'findMy',
          component: findMy
        }
      ]
    },
  ]
})