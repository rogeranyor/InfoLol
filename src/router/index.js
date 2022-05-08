import Vue from 'vue'
import Router from 'vue-router'
import ChampionsInfo from '@/components/ChampionsInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ChampionsInfo',
      component: ChampionsInfo
    }
  ]
})
