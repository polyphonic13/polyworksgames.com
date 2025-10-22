import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/home/Home.vue';
import About from '@/components/about/About.vue';
import Connect from '@/components/connect/Connect.vue';
import GamesList from '@/components/games/GamesList.vue';
import CrownCrunch from '@/components/games/crown-crunch/CrownCrunch.vue';
import CrownCrunchPrivacyPolicy from '@/components/games/crown-crunch/CrownCrunchPrivacyPolicy.vue';
import EasterEgg from '@/components/games/crown-crunch/EasterEgg.vue';
import Challenges from '@/components/games/crown-crunch/Challenges.vue';
import Keke from '@/components/games/keke/Keke.vue';
import FarkleSafari from '@/components/games/farkle-safari/FarkleSafari.vue';
import FarkleSafariPrivacyPolicy from '@/components/games/farkle-safari/FarkleSafariPrivacyPolicy.vue';
import Rickle from '@/components/games/rickle/Rickle.vue';
import RickleSocial from '@/components/games/rickle/RickleSocial.vue';
import RicklePrivacyPolicy from '@/components/games/rickle/RicklePrivacyPolicy.vue';
import FallenMetal from '@/components/games/fallen-metal/FallenMetal.vue';
import RobotsList from '@/components/robots/RobotsList.vue';
import Jorge5000 from '@/components/robots/jorge5000/Jorge5000.vue';
import NewsWatch from '@/components/news-watch/NewsWatch.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/games',
        name: 'gamesList',
        component: GamesList,
    },
    {
        path: '/easteregg',
        redirect: '/games/crown-crunch/easter-egg',
    },
    {
        path: '/easter-egg',
        redirect: '/games/crown-crunch/easter-egg',
    },
    {
        path: '/challenges',
        redirect: '/games/crown-crunch/challenges',
    },
    {
        path: '/crown-crunch',
        redirect: '/games/crown-crunch',
    },
    {
        path: '/crown_crunch',
        redirect: '/games/crown-crunch',
    },
    {
        path: '/crowncrunch',
        redirect: '/games/crown-crunch',
    },
    {
        path: '/crown-crunch/*',
        redirect: '/games/crown-crunch/*',
    },
    {
        path: '/crown_crunch/*',
        redirect: '/games/crown-crunch/*',
    },
    {
        path: '/crowncrunch/*',
        redirect: '/games/crown-crunch/*',
    },
    {
        path: '/games/crown-crunch',
        name: 'CrownCrunch',
        component: CrownCrunch,
    },
    {
        path: '/games/crown-crunch/privacy',
        name: 'privacy',
        component: CrownCrunchPrivacyPolicy,
    },
    {
        path: '/games/crown-crunch/privacy/',
        redirect: '/games/crown-crunch/privacy',
    },
    {
        path: '/games/crown-crunch/easter-egg',
        name: 'easterEgg',
        component: EasterEgg,
    },
    {
        path: '/games/crown-crunch/challenges',
        name: 'challenges',
        component: Challenges,

    },
    {
        path: '/games/keke',
        name: 'keke',
        component: Keke,
    },
    {
        path: '/farkle-safari',
        redirect: '/games/farkle-safari',
    },
    {
        path: '/farkle_safari',
        redirect: '/games/farkle-safari',
    },
    {
        path: '/farklesafari',
        redirect: '/games/farkle-safari',
    },
    {
        path: '/farkle-safari/*',
        redirect: '/games/farkle-safari/*',
    },
    {
        path: '/farkle_safari/*',
        redirect: '/games/farkle-safari/*',
    },
    {
        path: '/farklesafari/*',
        redirect: '/games/farkle-safari/*',
    },
    {
        path: '/games/farkle-safari',
        name: 'farkleSafari',
        component: FarkleSafari,
    },
    {
        path: '/games/farkle-safari/privacy',
        name: 'farkleSafariPrivacy',
        component: FarkleSafariPrivacyPolicy,
    },
    {
        path: '/games/farkle-safari/privacy/',
        redirect: '/games/farkle-safari/privacy',
    },
    {
        path: '/rickle',
        redirect: '/games/rickle',
    },
    {
        path: '/rickle-social',
        name: 'rickleSocial',
        component: RickleSocial,
    },
    {
        path: '/farkle_safari',
        redirect: '/games/rickle',
    },
    {
        path: '/farklesafari',
        redirect: '/games/rickle',
    },
    {
        path: '/rickle/*',
        redirect: '/games/rickle/*',
    },
    {
        path: '/farkle_safari/*',
        redirect: '/games/rickle/*',
    },
    {
        path: '/farklesafari/*',
        redirect: '/games/rickle/*',
    },
    {
        path: '/games/rickle',
        name: 'rickle',
        component: Rickle,
    },
    {
        path: '/newswatch',
        name: 'newsWatchLandingPage',
        component: NewsWatch,
    },
    {
        path: '/games/rickle/privacy',
        name: 'ricklePrivacyPolicy',
        component: RicklePrivacyPolicy,
    },
    {
        path: '/games/rickle/privacy/',
        redirect: '/games/rickle/privacy',
    },
    {
        path: '/fallen-metal',
        redirect: '/games/fallen-metal',
    },
    {
        path: '/fallen_metal',
        redirect: '/games/fallen-metal',
    },
    {
        path: '/fallenmetal',
        redirect: '/games/fallen-metal',
    },
    {
        path: '/games/fallen-metal',
        name: 'fallenMetal',
        component: FallenMetal,
    },
    {
        path: '/robots',
        name: 'robotsList',
        component: RobotsList,
    },
    {
        path: '/robots/jorge5000',
        name: 'jorge5000',
        component: Jorge5000,
    },
    {
        path: '/connect',
        name: 'connect',
        component: Connect,
    },
    ]
})
