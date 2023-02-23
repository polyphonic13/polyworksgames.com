<template>
    <div class="machinery-container">
        <div
            v-if="isRendered"
            class="machinery"
            :class="(isVisible) ? 'visible' : 'hidden'"
        >
            <div
                v-for="i in machineryItemCount"
                :key="i"
                style="top:10px;left:20px;"
                :style="{
                        top: `${(Math.random() * 192) - 64}px`,
                        left: `${Math.random() * elWidth}px`,
                        transform: `rotate(${getRandomRotationStyle()}deg)` }"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Machinery",
    data() {
        return {
            // machineryImage: require("./assets/images/polyworks-games-gears01.png"),
            machineryItemCount: 300,
            isRendered: false,
            routesVisible: ["home", "about", "social", "connect"],
        };
    },
    computed: {
        elWidth() {
            return this.$el.clientWidth;
        },
        isVisible() {
            return this.routesVisible.includes(this.$route.name);
        },
    },
    mounted() {
        this.isRendered = true;
    },
    methods: {
        getRandomRotationStyle() {
            return Math.floor(Math.random() * 350);
        },
    },
};
</script>

<style scoped>
.machinery-container {
    background: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(171, 205, 239, 0.5)
    );
    width: 100%;
    height: 128px;
    bottom: 0;

    position: fixed;
}

.machinery {
    width: 100%;
    height: 100%;
    position: relative;
}

.machinery > * {
    position: absolute;
    border: 1px rgba(255, 255, 255, 0.33) solid;
    width: 32px;
    height: 32px;
}
</style>
