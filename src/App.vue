<template>
    <div id="app">
        <router-view />
        <sidebar></sidebar>
        <router-link
            class="home-btn"
            to="/"
        ></router-link>
    </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";

export default {
    name: "App",
    components: {
        Sidebar
    }
};
</script>
<style>
html,
body {
    /* background-color: #000000; */
    background: linear-gradient(
        200deg,
        rgba(0, 0, 0, 1) 0,
        80%,
        rgba(1, 35, 69, 1) 90%,
        rgb(69, 1, 1) 100%
    );
    color: white;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}

p {
    padding: 1em;
}

#app {
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100%;

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
    width: 75vw;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-weight: 300;
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

.text-left {
    text-align: left;
}

.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
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
    font-size: 0.5em;
}

.text-xs {
    font-size: 0.25em;
}

.text-white {
    color: white;
}

.text-blue1 {
    color: #abcdef;
}

* {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -moz-tap-highlight-color: rgba(0, 0, 0, 0);
}

@media screen and (max-width: 600px) {
    html,
    body {
        background: linear-gradient(
            -200deg,
            rgba(0, 0, 0, 1) 0,
            70%,
            rgba(1, 35, 69, 1) 85%,
            rgb(69, 1, 1) 100%
        );
    }

    #app {
        flex-direction: column-reverse;
    }

    .screen {
        width: 100vw;
        justify-content: flex-start;
    }

    .text-xl {
        font-size: 1.66em;
    }

    .home-btn {
        left: 90vw;
    }
}

@media screen and (max-width: 299px) {
    body {
        display: none;
    }
}
</style>
