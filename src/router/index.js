import Vue from 'vue'
import Router from 'vue-router'

import music from '@/components/music/music'
import find from '@/components/find/find'
import findMy from '@/components/findMy/find-my'
import findRadio from '@/components/findRadio/find-radio'
import zone from '@/components/zone/zone'
import video from '@/components/video/video'
import videoPlay from '@/components/videoPlay/video-play'

import discList from '@/components/discList/disc-list'
import discDetail from '@/components/discDetail/disc-detail'

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
        },
        {
          path: 'findRadio',
          component: findRadio
        }
      ]
    },
    {
      path: '/video',
      component: video
    },
    {
      path: '/videoPlay',
      component: videoPlay
    },
    {
      path: '/zone',
      component: zone
    },
    {
      path: '/discList',
      component: discList
    },
    {
      path: '/discDetail',
      component: discDetail
    }
  ]
})
