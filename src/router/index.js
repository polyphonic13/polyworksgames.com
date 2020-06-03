import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home.vue';
import About from '@/components/about/About.vue';
import Connect from '@/components/connect/Connect.vue';
import Games from '@/components/games/Games.vue';
import Credits from '@/components/games/corona-crunch/credits/Credits.vue';
import Feedback from '@/components/games/corona-crunch/feedback/Feedback.vue';

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
      name: 'Games',
      component: Games
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
      path: '/connect',
      name: 'Connect',
      component: Connect
    },
  ]
})
