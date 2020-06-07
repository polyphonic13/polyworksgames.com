import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home.vue';
import About from '@/components/about/About.vue';
import Connect from '@/components/connect/Connect.vue';
import GamesList from '@/components/games/GamesList.vue';
import CoronaCrunch from '@/components/games/corona-crunch/CoronaCrunch.vue';
import Credits from '@/components/games/corona-crunch/credits/Credits.vue';
import Feedback from '@/components/games/corona-crunch/feedback/Feedback.vue';
import PrivacyPolicy from '@/components/games/corona-crunch/PrivacyPolicy.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/games',
      name: 'GamesList',
      component: GamesList
    },
    {
      path: '/connect',
      name: 'Connect',
      component: Connect
    },
    {
      path: '/games/corona-crunch',
      name: 'CoronaCrunch',
      component: CoronaCrunch,
    },
    {
      path: '/games/corona-crunch/credits',
      name: 'Credits',
      component: Credits,
    },
    {
      path: '/games/corona-crunch/feedback',
      name: 'Feedback',
      component: Feedback,
    },
    {
      path: '/games/corona-crunch/privacy',
      name: 'Privacy',
      component: PrivacyPolicy,
    },
  ]
})
