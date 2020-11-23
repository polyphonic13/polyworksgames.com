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
                    class="item-inner2"
                    :class="(item.isActive) ? 'active' : ''"
                >{{ item.name }}</span>
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
                    name: "about",
                    link: "/about",
                    isActive: false,
                },
                {
                    name: "games",
                    link: "/games",
                    isActive: false,
                },
                {
                    name: "connect",
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
    border-left: 1px #012345 solid;
    border-bottom: none;

    width: 250px;
    height: 100vh;

    display: flex;

    position: fixed;
    right: 0;

    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    max-width: 250px;
    padding: 16px;
    margin: auto;
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
    background: linear-gradient(rgba(1, 35, 69, 1), rgba(18, 52, 86, 0));
    color: #abcdef;
    text-shadow: 1px 1px 1px #123456, 3px 3px 5px #456789;
    width: 9vw;
    height: 9vw;
    max-width: 150px;
    max-height: 150px;
    font-size: 1.5em;
    padding: 1em;
    border-radius: 50%;
    transition: all 0.5s linear;
}

.item:hover > .item-inner1 {
    background: linear-gradient(rgba(18, 52, 86, 1), rgba(69, 103, 152, 0));
    color: white;
    /* width: 8vw;
    height: 8vw; */
    /* max-width: 200px;
    max-height: 200px; */
    /* font-size: 1.66em; */
}

.item-inner2 {
    /* background: linear-gradient(rgba(35, 69, 103, 1), rgba(52, 86, 120, 0)); */
    background: radial-gradient(circle at 3vw 3vw, #345678, #012345);
    width: 9vw;
    height: 9vw;
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
}

.active,
.item:hover > .item-inner1 > .item-inner2 {
    /* background: linear-gradient(rgba(52, 86, 120, 1), rgba(86, 120, 154, 0)); */
    background: radial-gradient(circle at 3vw 3vw, #6789ab, #123456);
}

@media screen and (max-width: 600px) {
    .sidebar {
        width: 100vw;
        max-width: 100vw;
        height: 33vw;
        flex-direction: row;
        border-left: none;
        /* border-bottom: 1px #012345 solid; */
    }

    .item {
        height: 100%;
    }

    .item-inner1 {
        font-size: 1.5em;
        padding: 1.5em;
    }

    .item:hover > .item-inner1 {
        font-size: 1.5em;
    }
}
</style>
