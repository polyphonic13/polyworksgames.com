<template>
    <div
        class="machinery-container"
        :class="(isVisible) ? 'visible' : 'hidden'"
    >
        <div
            v-if="isRendered"
            class="machinery"
        >
            <div
                v-for="i in machineryItemCount"
                :key="i"
                class="machinery-item"
                @click="onItemClicked($event)"
                style="top:10px;left:20px;"
                :style="{
                        top: `${((i % 8) * 16) - Math.floor(Math.random() * (64 - 16) + 16)}px`,
                        left: `${Math.random() * elWidth}px`,
                        scale: `${((i % 8) * 0.1) + 0.5}`,
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
        onItemClicked(evt) {
            const target = evt.currentTarget;
            if (Array.from(target.classList).includes("spin-animation")) {
                target.classList.remove("spin-animation");
                return;
            }
            target.classList.add("spin-animation");
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
    height: 256px;
    bottom: 0;

    position: fixed;
}

.machinery {
    width: 100%;
    height: 100%;
    position: relative;
}

.machinery-item {
    position: absolute;
    background-color: rgba(255, 255, 255, 0);
    border: 1px rgba(255, 255, 255, 0.2) solid;
    width: 64px;
    height: 64px;

    transition: all 1s linear;
}

.machinery-item:hover {
    background-color: rgba(255, 255, 255, 1);
    border: 1px rgba(171, 205, 239, 0.9) solid;
    cursor: pointer;
}

.spin-animation {
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
}

@-moz-keyframes spin {
    100% {
        -moz-transform: rotate(360deg);
    }
}
@-webkit-keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
