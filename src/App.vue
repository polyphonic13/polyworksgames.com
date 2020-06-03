<template>
    <div id="app">
        <router-view />
        <sidebar></sidebar>
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
        70%,
        rgba(1, 35, 69, 1) 85%,
        rgb(69, 1, 1) 100%
    );
    color: #abcdef;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100%;

    display: flex;
}

.screen {
    width: 75vw;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@font-face {
    font-family: Wonkers;
    src: url(/assets/fonts/Wonkers.ttf) format("ttf");
}

.wonkers {
    font-family: Wonkers, cursive, sans-serif;
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
}
</style>
