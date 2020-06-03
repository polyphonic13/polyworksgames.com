<template>
    <div class="sidebar">
        <router-link
            v-for="(item, i) in items"
            :key="i"
            class="item"
            :to="item.link"
        >
            <div class="item-inner1"><span class="item-inner2">{{ item.name }}</span></div>
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
                    link: "/"
                },
                {
                    name: "games",
                    link: "/games"
                },
                {
                    name: "contact",
                    link: "/contact"
                }
            ]
        };
    }
};
</script>
<style scoped>
.sidebar {
    width: 25vw;
    height: 100vh;
    display: flex;
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
    background: linear-gradient(rgba(1, 35, 69, 1), rgba(18, 52, 86, 0));
    color: #abcdef;
    width: 10vw;
    height: 10vw;
    font-size: 2em;
    padding: 1em;
    border-radius: 50%;
    transition: all 0.5s linear;
}

.item:hover > .item-inner1 {
    background: linear-gradient(rgba(18, 52, 86, 1), rgba(69, 103, 152, 0));
    width: 12vw;
    height: 12vw;
    font-size: 3em;
}

.item-inner2 {
    background: linear-gradient(rgba(35, 69, 103, 1), rgba(52, 86, 120, 0));
    width: 9.5vw;
    height: 9.5vw;
    border-radius: 50%;
}

.item-inner1:hover > .item-inner2 {
    background: linear-gradient(rgba(52, 86, 120, 1), rgba(86, 120, 154, 0));
}

@media screen and (max-width: 600px) {
    .sidebar {
        width: 100vw;
        height: 50vw;
        flex-direction: row;
    }

    .item:hover > .item-inner1 {
        font-size: 2.5em;
    }
}
</style>