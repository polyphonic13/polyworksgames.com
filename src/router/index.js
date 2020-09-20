import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home.vue';
import About from '@/components/about/About.vue';
import Connect from '@/components/connect/Connect.vue';
import GamesList from '@/components/games/GamesList.vue';
import CrownCrunch from '@/components/games/crown-crunch/CrownCrunch.vue';
import Credits from '@/components/games/crown-crunch/credits/Credits.vue';
import Feedback from '@/components/games/crown-crunch/feedback/Feedback.vue';
import PrivacyPolicy from '@/components/games/crown-crunch/PrivacyPolicy.vue';
import EasterEgg from '@/components/games/crown-crunch/EasterEgg.vue';
import Keke from '@/components/games/keke/Keke.vue';

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
      path: '/easteregg',
      redirect: '/games/crown-crunch/easter-egg'
    },
    {
      path: '/easter-egg',
      redirect: '/games/crown-crunch/easter-egg'
    },
    {
      path: '/crown-crunch',
      redirect: '/games/crown-crunch'
    },
    {
      path: '/crown_crunch',
      redirect: '/games/crown-crunch'
    },
    {
      path: '/crowncrunch',
      redirect: '/games/crown-crunch'
    },
    {
      path: '/crown-crunch/*',
      redirect: '/games/crown-crunch/*'
    },
    {
      path: '/crown_crunch/*',
      redirect: '/games/crown-crunch/*'
    },
    {
      path: '/crowncrunch/*',
      redirect: '/games/crown-crunch/*'
    },
    {
      path: '/games/crown-crunch',
      name: 'CrownCrunch',
      component: CrownCrunch,
    },
    {
      path: '/games/crown-crunch/privacy',
      name: 'Privacy',
      component: PrivacyPolicy,
    },
    {
      path: '/games/crown-crunch/easter-egg',
      name: 'EasterEgg',
      component: EasterEgg,
    },
    {
      path: '/games/keke',
      name: 'Keke',
      component: Keke
    }
  ]
})
