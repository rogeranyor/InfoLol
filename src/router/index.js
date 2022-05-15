import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ChampionsInfo from '@/components/ChampionsInfo'
import ChampList from '@/components/ChampList'
import Match from '@/components/Match'
import Forum from '@/components/Forum'
import Profile from '@/components/Profile'
import Login from '@/components/Login'
import Register from '@/components/Register'

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
    },
    {
      path: '/match',
      name: 'MatchInfo',
      component: Match
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum

    },
    {
      path: '/login',
      name: 'Login',
      component: Login

    },
    {
      path: '/register',
      name: 'Register',
      component: Register

    }
  ]
})
