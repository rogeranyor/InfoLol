import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ChampionsInfo from '@/components/ChampionsInfo'
import ChampList from '@/components/ChampList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChampList',
      component: ChampList
    },
    {
      path: '/champ',
      name: 'ChampionsInfo',
      component: ChampionsInfo
    }
  ]
})
