<template>
    <div
        class="machinery-container"
        :class="(isVisible) ? 'visible' : 'hidden'"
    >
        <div
            v-if="isRendered"
            class="machinery"
            ref="machinery"
        >
            <div
                v-for="i in itemCount"
                :key="i"
                class="machinery-item"
                @click="onItemClicked($event)"
                style="top:10px;left:20px;"
                :style="{
                        top: `${150 - ((i % 8) * 32) - Math.floor(Math.random() * (64 - 16) + 16)}px`,
                        left: `${(Math.random() * elWidth + 36) - 64}px`,
                        scale: `${((i % 8) * 0.1) + 0.15}`,
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
            isRendered: false,
            routesVisible: [
                "home",
                "about",
                "social",
                "connect",
                "gamesList",
                "robotsList",
            ],
        };
    },
    computed: {
        elWidth() {
            return this.$el.clientWidth;
        },
        isVisible() {
            return this.routesVisible.includes(this.$route.name);
        },
        itemCount() {
            return Math.ceil(this.$el.clientWidth * 0.75);
        },
    },
    mounted() {
        this.isRendered = true;
        this.$nextTick(() => {
            this.initAnimation();
        });
        this.$router.afterEach(() => {
            this.isRendered = false;
            if (!this.isVisible) {
                return;
            }
            this.isRendered = true;
            this.$nextTick(() => {
                this.initAnimation();
            });
        });
        window.addEventListener("blur", this.blurHandler);
        window.addEventListener("focus", this.focusHandler);
    },
    onDestroy() {
        this.removeAnimation();
        window.removeEventListener("blur", this.blurHandler);
        window.removeEventListener("focus", this.focusHandler);
    },
    methods: {
        blurHandler() {
            this.pauseAnimation();
        },
        focusHandler() {
            this.resumeAnimation();
        },
        initAnimation() {
            if (!this.$refs.machinery) {
                return;
            }
            const children = Array.from(this.$refs.machinery.children);
            children.forEach((child) => {
                const delay = Math.floor(Math.random() * 5000);
                setTimeout(() => {
                    child.classList.add("spin-animation");
                }, delay);
            });
        },
        pauseAnimation() {
            if (!this.$refs.machinery) {
                return;
            }
            const children = Array.from(this.$refs.machinery.children);
            children.forEach((child) => {
                child.style.animationPlayState = "paused";
            });
        },
        resumeAnimation() {
            if (!this.$refs.machinery) {
                return;
            }
            const children = Array.from(this.$refs.machinery.children);
            children.forEach((child) => {
                child.style.animationPlayState = "running";
            });
        },
        removeAnimation() {
            if (!this.$refs.machinery) {
                return;
            }
            const children = Array.from(this.$refs.machinery.children);
            children.forEach((child) => {
                const delay = Math.floor(Math.random() * 5000);
                setTimeout(() => {
                    child.classList.remove("spin-animation");
                }, delay);
            });
        },
        getRandomRotationStyle() {
            return Math.floor(Math.random() * 360);
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
    background-color: rgba(255, 255, 255, 0.25);
    /* border: 1px rgba(255, 255, 255, 0.25) solid; */
    /* border: 1px rgba(255, 0, 255, 0.75) solid; */
    width: 64px;
    height: 64px;

    transition: all 0.3s linear;
}

.machinery-item:hover {
    background-color: rgba(255, 255, 255, 1);
    border: 1px rgba(171, 205, 239, 0.95) solid;
    animation-play-state: paused;
    cursor: pointer;
}

.spin-animation {
    -webkit-animation: spin 3s linear infinite;
    -moz-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
}

@-moz-keyframes spin {
    from {
        -moz-transform: rotate(0deg);
    }
    to {
        -moz-transform: rotate(360deg);
    }
}
@-webkit-keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}
@keyframes spin {
    0% {
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        opacity: 0.8;
    }
    33% {
        opacity: 0;
    }
    66% {
        opacity: 0;
    }
    100% {
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
        opacity: 0.8;
    }
}
</style>
