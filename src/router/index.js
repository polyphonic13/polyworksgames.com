import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home.vue';
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
      path: '/games/corona-crunch/credits',
      name: 'Credits',
      component: Credits,
    },
    {
      path: '/games/corona-crunch/feedback',
      name: 'Feedback',
      component: Feedback,
    },
  ]
})
