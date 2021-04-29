import Vue from 'vue';
import Router from 'vue-router';
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
import RicklePrivacyPolicy from '@/components/games/rickle/RicklePrivacyPolicy.vue';
import Sunflowers from '@/components/games/rickle/Sunflowers.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
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
        path: '/challenges',
        redirect: '/games/crown-crunch/challenges'
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
        component: CrownCrunchPrivacyPolicy,
    },
    {
        path: '/games/crown-crunch/privacy/',
        redirect: '/games/crown-crunch/privacy',
    },
    {
        path: '/games/crown-crunch/easter-egg',
        name: 'EasterEgg',
        component: EasterEgg,
    },
    {
        path: '/games/crown-crunch/challenges',
        name: 'Challenges',
        component: Challenges,

    },
    {
        path: '/games/keke',
        name: 'Keke',
        component: Keke
    },
    {
        path: '/farkle-safari',
        redirect: '/games/farkle-safari'
    },
    {
        path: '/farkle_safari',
        redirect: '/games/farkle-safari'
    },
    {
        path: '/farklesafari',
        redirect: '/games/farkle-safari'
    },
    {
        path: '/farkle-safari/*',
        redirect: '/games/farkle-safari/*'
    },
    {
        path: '/farkle_safari/*',
        redirect: '/games/farkle-safari/*'
    },
    {
        path: '/farklesafari/*',
        redirect: '/games/farkle-safari/*'
    },
    {
        path: '/games/farkle-safari',
        name: 'FarkleSafari',
        component: FarkleSafari,
    },
    {
        path: '/games/farkle-safari/privacy',
        name: 'FarkleSafariPrivacy',
        component: FarkleSafariPrivacyPolicy,
    },
    {
        path: '/games/farkle-safari/privacy/',
        redirect: '/games/farkle-safari/privacy',
    },
    {
        path: '/rickle',
        redirect: '/games/rickle'
    },
    {
        path: '/farkle_safari',
        redirect: '/games/rickle'
    },
    {
        path: '/farklesafari',
        redirect: '/games/rickle'
    },
    {
        path: '/rickle/*',
        redirect: '/games/rickle/*'
    },
    {
        path: '/farkle_safari/*',
        redirect: '/games/rickle/*'
    },
    {
        path: '/farklesafari/*',
        redirect: '/games/rickle/*'
    },
    {
        path: '/games/rickle',
        name: 'Rickle',
        component: Rickle,
    },
    {
        path: '/sunflower',
        redirect: '/games/rickle/sunflowers',
    },
    {
        path: '/sunflowers',
        redirect: '/games/rickle/sunflowers',
    },
    {
        path: '/games/rickle/sunflower',
        redirect: '/games/rickle/sunflowers',
    },
    {
        path: '/games/rickle/sunflowers',
        name: 'Sunflowers',
        component: Sunflowers,
    },
    {
        path: '/games/rickle/privacy',
        name: 'RicklePrivacyPolicy',
        component: RicklePrivacyPolicy,
    },
    {
        path: '/games/rickle/privacy/',
        redirect: '/games/rickle/privacy',
    },
    ]
})
