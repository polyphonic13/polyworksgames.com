<template>
    <div class="games screen">
        <h1 class="brandon title text-xxl">G A M E S</h1>
        <div class="list">
            <component
                v-for="(game, g) in games"
                :key="g"
                :disabled="!game.isActive"
                :is="(game.isActive) ? 'router-link' : 'div'"
                :to="game.path"
                class="list-item"
            >
                <img
                    class="list-item-img"
                    :src="game.logo"
                    :class="getItemClasses(game)"
                />
                <span
                    v-if="!game.isActive"
                    class="coming-soon-overlay brandon text-xl"
                >COMING SOON</span>

            </component>
            <div class="spacer list-item"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "GamesList",
    data() {
        return {
            games: [
                {
                    name: "Rickle",
                    logo: require("../../assets/images/games/rickle/logo01.png"),
                    path: "games/rickle/",
                    isActive: true,
                },
                {
                    name: "Farkle Safari",
                    logo: require("../../assets/images/games/farkle-safari/logo01.png"),
                    path: "games/farkle-safari/",
                    isActive: true,
                },
                {
                    name: "Crown Crunch",
                    logo: require("../../assets/images/games/crown-crunch/logo01.png"),
                    path: "games/crown-crunch/",
                    isActive: true,
                },
                {
                    name: "Keke and The Grey Expanse",
                    logo: require("../../assets/images/games/keke/logo01.png"),
                    path: "games/keke/",
                    isActive: true,
                },
                {
                    name: "Dreams of Yesterday",
                    logo: require("../../assets/images/games/doy/logo01.png"),
                    path: "games/dreams-of-yesterday/",
                    isActive: false,
                },
            ],
        };
    },
    methods: {
        getItemClasses(game) {
            return game.isActive ? [] : ["translucent"];
        },
    },
};
</script>
<style scoped>
.translucent {
    opacity: 0.5;
    cursor: default;
}

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.list-item {
    width: 25vw;
    max-width: 25vw;
    height: 25vw;
    padding: 1vw;
    margin: 2vw;
    box-sizing: border-box;
    position: relative;
}

.list-item-img {
    background-color: #ffffff;
    border: 2px solid #123456;
    width: 100%;
    height: 100%;
    transition: all 0.25s linear;
}

.list-item-img:hover {
    opacity: 0.8;
    transform: scale(1.05);
}

.coming-soon-overlay {
    width: 100%;
    height: 100%;
    left: 0;
    top: 45%;
    position: absolute;
    z-index: 2;
}

@media screen and (max-width: 700px) {
    .list-item {
        width: 90vw;
        max-width: 90vw;
        height: 90vw;
        margin: 5vw;
    }
}
</style>
