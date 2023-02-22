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
                },
                {
                    label: "GAMES",
                    link: "/games",
                    isActive: false,
                },
                {
                    label: "ROBOTS",
                    link: "/robots",
                    isActive: false,
                },
                {
                    label: "SOCIAL",
                    link: "/connect",
                    isActive: false,
                },
            ],
        };
    },
    methods: {
        setActiveLink() {
            this.items = this.items.map((item) => {
                item.isActive = false;
                if (this.$route.path.indexOf(item.name) > -1) {
                    item.isActive = true;
                }
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

    width: 200px;
    height: 100vh;
    max-width: 200px;
    padding: 16px;
    margin: auto;

    box-sizing: border-box;
    display: flex;

    position: fixed;
    right: 0;

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
        rgba(171, 205, 239, 0.5),
        rgba(255, 255, 255, 0.1)
    );
    color: #abcdef;
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
    color: white;
}

.item-inner2 {
    background: radial-gradient(circle at 3vw 3vw, #345678, #012345);
    width: 9.5vw;
    height: 9.5vw;
    max-width: 108px;
    max-height: 108px;
    border-radius: 50%;

    font-size: 0.75em;
}

.active,
.item:hover > .item-inner1 > .item-inner2 {
    background: radial-gradient(circle at 3vw 3vw, #6789ab, #123456);
    width: 10vw;
    height: 10vw;
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
        width: 13vw;
        height: 13vw;
    }

    .item-inner2 {
        width: 12vw;
        height: 12vw;
    }

    .item-inner2:hover {
        width: 12.5vw;
        height: 12.5vw;
    }
}

@media screen and (max-width: 400px) {
    .item-inner1 {
        width: 18vw;
        height: 18vw;
    }

    .item-inner2 {
        font-size: 0.6em;
        width: 17vw;
        height: 17vw;
    }
}
</style>
