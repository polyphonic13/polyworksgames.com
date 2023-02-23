<template>
    <div id="app">
        <router-view />
        <machinery></machinery>
        <sidebar></sidebar>
        <router-link
            class="home-btn"
            to="/"
        ></router-link>
    </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import Machinery from "./components/Machinery.vue";

export default {
    name: "App",
    components: {
        Sidebar,
        Machinery,
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        },
    },
};
</script>
<style>
html,
body {
    /* background-color: #000000; */
    background: linear-gradient(
        190deg,
        rgba(255, 255, 255, 1) 0,
        85%,
        rgba(171, 205, 239, 1) 95%,
        rgb(171, 239, 228) 100%
    );
    color: #123456;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}

p {
    text-align: left;
    /* padding: 0;
    margin: 0; */
}

a {
    color: #456789;
    font-weight: 500;
    text-decoration: none;
}

#app {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    width: 100%;
    height: 100%;
    /* max-width: 1200px; */

    overflow: hidden;

    display: flex;
}

.home-btn {
    position: absolute;
    width: 10vw;
    height: 10vw;
    left: 0;
    bottom: 0;
    z-index: 100;
}

.screen {
    width: calc(100% - 200px);
    height: 100%;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    overflow-y: auto;
    overflow-x: hidden;
}

.title {
    margin-top: 64px;
}

@font-face {
    font-family: "Lato";
    src: url(/assets/fonts/Lato-Regular.otf) format("otf");
    font-weight: normal;
}

@font-face {
    font-family: "Lato";
    src: url(/assets/fonts/Lato-Bold.otf) format("otf");
    font-weight: 700;
}

@font-face {
    font-family: "Lato";
    src: url(/assets/fonts/Lato-Light.otf) format("otf");
    font-weight: 400;
}

@font-face {
    font-family: "Lato";
    src: url(/assets/fonts/Lato-Thin.otf) format("otf");
    font-weight: 100;
}

@font-face {
    font-family: Wonkers;
    src: url(/assets/fonts/Wonkers.ttf) format("ttf");
}

.brandon {
    font-family: brandon-grotesque, sans-serif;
    font-weight: 900;
    font-style: normal;
}

.wonkers {
    font-family: Wonkers, cursive, sans-serif;
}

.spacer {
    flex-grow: 1;
}

.text-left {
    text-align: left;
}

.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
}

.text-xxxl {
    font-size: 3em;
}

.text-xxl {
    font-size: 2em;
}

.text-xl {
    font-size: 1.75em;
}

.text-lg {
    font-size: 1.5em;
}

.text-md {
    font-size: 1em;
}

.text-sm {
    font-size: 0.66em;
}

.text-xs {
    font-size: 0.33em;
}

.invisible {
    visibility: hidden;
}

.align-self-center {
    align-self: center;
}

* {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
}

.game-title-logo {
    margin-top: 1em;
    width: 50%;
    max-width: 512px;
    align-self: center;
}

.screenshots {
    min-height: 500px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: border-box;
    flex: 1;
}

.screenshot {
    border: 2px solid #abcdef;
    width: 25%;
    margin: 1em;
    flex: 1;
}

section {
    width: 100%;
    padding: 1em;
    text-align: left;
    box-sizing: border-box;
}

.list-style-none {
    list-style: none;
}

.border-top {
    border-top: 1px solid #234567;
}

.min-width-50per {
    min-width: 50%;
}

.visible {
    visibility: visible;
}

.hidden {
    visibility: hidden;
}

@media screen and (max-width: 850px) {
    .screenshot {
        width: 40%;
    }
}

@media screen and (max-width: 700px) {
    p,
    li {
        font-weight: 400;
    }

    ul,
    ol {
        padding-inline-start: 16px;
    }

    #app {
        flex-direction: column-reverse;
    }

    .screen {
        margin-top: 100px;
        width: 100vw;
        justify-content: flex-start;
    }

    .text-xl {
        font-size: 1.66em;
    }

    .text-lg {
        font-size: 1.25em;
    }

    .game-title-logo {
        width: 100%;
    }

    .screenshot {
        width: 90%;
    }
}

@media screen and (max-width: 299px) {
    body {
        display: none;
    }
}
</style>
