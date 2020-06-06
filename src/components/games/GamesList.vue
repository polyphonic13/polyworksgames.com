<template>
    <div class="games screen">
        <h1 class="brandon text-xl">G A M E S</h1>
        <div class="list">
            <router-link
                v-for="(game, g) in games"
                :key="g"
                :disabled="!game.isActive"
                :to="game.path"
                class="list-item"
                :class="getItemClasses(game)"
            >
                <img
                    class="list-item-img"
                    :src="game.logo"
                />

                <!-- <div
                    class="list-item-img"
                    :style="getBackgroundImageStyle(game)"
                ></div> -->
            </router-link>
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
                    path: "games/corona-crunch/",
                    isActive: false
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
}

.list-item-img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    width: 100%;
    height: 100%;
}

@media screen and (max-width: 600px) {
    .list-item {
        width: 90vw;
        height: 90vw;
        margin: 5vw;
    }
}
</style>