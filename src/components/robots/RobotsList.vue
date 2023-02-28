<template>
    <div class="robots screen scrolling-screen">
        <h1 class="brandon title text-xxl">R O B O T S</h1>
        <div class="list">
            <component
                v-for="(item, i) in items"
                :key="i"
                :disabled="!item.isActive"
                :is="(item.isActive) ? 'router-link' : 'div'"
                :to="item.path"
                class="list-item"
            >
                <img
                    class="list-item-img"
                    :src="item.logo"
                    :class="getItemClasses(item)"
                />
                <span
                    v-if="!item.isActive"
                    class="coming-soon-overlay brandon text-xl"
                >COMING SOON</span>
                <span
                    v-else
                    class="brandon text-xl"
                >{{item.name}}</span>
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
            items: [
                {
                    name: "Polybot (Jorge 5000)",
                    logo: require("../../assets/images/robots/jorge5000/logo01.png"),
                    path: "robots/jorge5000/",
                    isActive: true,
                },
            ],
        };
    },
    methods: {
        getItemClasses(item) {
            return item.isActive ? [] : ["translucent"];
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
