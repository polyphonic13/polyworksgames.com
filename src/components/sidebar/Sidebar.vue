<template>
    <div class="sidebar">
        <router-link
            v-for="(item, i) in items"
            :key="i"
            class="item"
            :to="item.link"
        >
            <div class="item-inner1">
                <span
                    class="item-inner2 brandon"
                    :class="(item.isActive) ? 'active' : ''"
                >{{ item.label }}</span>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: "SideBar",
    data() {
        return {
            items: [
                {
                    label: "ABOUT",
                    link: "/about",
                    isActive: false,
                    activeRoutes: ["about"],
                },
                {
                    label: "GAMES",
                    link: "/games",
                    isActive: false,
                    activeRoutes: [
                        "gamesList",
                        "fallenMetal",
                        "rickle",
                        "farkleSafari",
                        "crownCrunch",
                        "keke",
                        "dreamsOfYesterday",
                    ],
                },
                {
                    label: "I O T",
                    link: "/robots",
                    isActive: false,
                    activeRoutes: ["robotsList", "jorge5000"],
                },
                {
                    label: "SOCIAL",
                    link: "/connect",
                    isActive: false,
                    activeRoutes: ["connect"],
                },
            ],
        };
    },
    methods: {
        setActiveLink() {
            const routeName = this.$route.name;
            this.items = this.items.map((item) => {
                item.isActive = item.activeRoutes.includes(routeName);
                return item;
            });
        },
    },
    created() {
        this.setActiveLink();
        this.$router.afterEach(() => {
            this.setActiveLink();
        });
    },
};
</script>
<style scoped>
.sidebar {
    border-bottom: none;

    background-color: rgba(15, 25, 40, 0.95);
    box-shadow: -5px 0 25px 10px rgba(10, 20, 35, 0.5);

    width: 200px;
    height: 100vh;
    max-width: 200px;
    padding: 16px;
    margin: auto;

    box-sizing: border-box;
    display: flex;

    position: fixed;
    right: 0;
    z-index: 1000;

    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.item,
.item-inner1,
.item-inner2 {
    display: flex;
    align-items: center;
    justify-content: center;
}

.item {
    width: 100%;
    height: calc(100% / 3);
    text-decoration: none;
}

.item-inner1 {
    background: linear-gradient(
        rgba(40, 60, 90, 0.5),
        rgba(20, 30, 50, 0.1)
    );
    color: #7a9fc4;
    width: 10vw;
    height: 10vw;
    max-width: 118px;
    max-height: 118px;
    font-size: 1.5em;
    padding: 0.25em;
    border-radius: 50%;
    transition: all 0.5s linear;
}

.item:hover > .item-inner1 {
    color: #b0d0f0;
}

.item-inner2 {
    background: radial-gradient(circle at 3vw 3vw, #2a4060, #0f1a2a);
    width: 9.5vw;
    height: 9.5vw;
    max-width: 108px;
    max-height: 108px;
    border-radius: 50%;

    font-size: 0.75em;
}

.active,
.item:hover > .item-inner1 > .item-inner2 {
    background: radial-gradient(circle at 3vw 3vw, #4a6a8a, #1a2a3a);
    width: 10vw;
    height: 10vw;
}

.active {
    color: #d0e8ff;
}

@media screen and (max-width: 700px) {
    .sidebar {
        width: 100vw;
        max-width: 100vw;
        top: 0;
        height: 130px;
        flex-direction: row;
        border-left: none;
    }

    .item {
        height: 100%;
    }

    .item-inner1 {
        width: 16vw;
        height: 16vw;
        font-size: 1.25em;
    }

    .item-inner2 {
        width: 15vw;
        height: 15vw;
    }

    .item-inner2:hover {
        width: 15.5vw;
        height: 15.5vw;
    }

    .active,
    .item:hover > .item-inner1 > .item-inner2 {
        background: radial-gradient(circle at 3vw 3vw, #4a6a8a, #1a2a3a);
        width: 15.5vw;
        height: 15.5vw;
    }
}

@media screen and (max-width: 400px) {
    .sidebar {
        box-shadow: -5px 0 30px 10px rgba(10, 20, 35, 0.5);
    }

    .item-inner1 {
        width: 20vw;
        height: 20vw;
        font-size: 0.575em;
    }

    .item-inner2 {
        width: 19vw;
        height: 19vw;
    }

    .active,
    .item:hover > .item-inner1 > .item-inner2 {
        background: radial-gradient(circle at 3vw 3vw, #4a6a8a, #1a2a3a);
        width: 19vw;
        height: 19vw;
    }
}
</style>
