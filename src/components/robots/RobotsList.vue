<template>
    <div class="robots screen">
        <h1 class="brandon title text-xl">R O B O T S</h1>
        <h2>...coming soon</h2>
        <div class="list">
            <component
                v-for="(game, g) in robots"
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
            <div class="spacer list-item"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "RobotsList",
    data() {
        return {
            robots: [],
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
    border: 2px solid #123456;
    width: 100%;
    height: 100%;
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
