<template>
    <div class="games screen">
        <h1 class="brandon text-xl">G A M E S</h1>
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
                    class="coming-soon-overlay brandon text-xxl"
                >COMING SOON</span>

            </component>
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
                    name: "Corona Crunch",
                    logo: require("../../assets/images/games/corona-crunch/logo01.png"),
                    path: "games/corona-crunch/",
                    isActive: true
                },
                {
                    name: "Farkle Safari",
                    logo: require("../../assets/images/games/farkle-safari/logo01.png"),
                    path: "games/corona-crunch/",
                    isActive: false
                },
                {
                    name: "Dreams of Yesterday",
                    logo: require("../../assets/images/games/doy/logo01.png"),
                    path: "games/corona-crunch/",
                    isActive: false
                },
                {
                    name: "Keke and The Grey Expanse",
                    logo: require("../../assets/images/games/keke/logo01.png"),
                    path: "games/keke/",
                    isActive: true
                }
            ]
        };
    },
    methods: {
        getItemClasses(game) {
            return game.isActive ? [] : ["translucent"];
        }
    }
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
    height: 25vw;
    padding: 1vw;
    margin: 2vw;
    box-sizing: border-box;
    position: relative;
}

.list-item-img {
    border: 2px solid #abcdef;
    width: 100%;
    height: 100%;
}

.coming-soon-overlay {
    width: 100%;
    height: 100%;
    left: 0;
    top: 50%;
    position: absolute;
    z-index: 2;
}

@media screen and (max-width: 600px) {
    .list-item {
        width: 90vw;
        height: 90vw;
        margin: 5vw;
    }
}
</style>