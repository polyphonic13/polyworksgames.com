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
                    link: "/about"
                },
                {
                    name: "games",
                    link: "/games"
                },
                {
                    name: "connect",
                    link: "/connect"
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
    border-left: 1px #012345 solid;
    border-bottom: none;
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
    width: 10vw;
    height: 10vw;
    font-size: 1.75em;
    padding: 1em;
    border-radius: 50%;
    transition: all 0.5s linear;
}

.item:hover > .item-inner1 {
    background: linear-gradient(rgba(18, 52, 86, 1), rgba(69, 103, 152, 0));
    color: white;
    width: 12vw;
    height: 12vw;
    font-size: 3em;
}

.item-inner2 {
    /* background: linear-gradient(rgba(35, 69, 103, 1), rgba(52, 86, 120, 0)); */
    background: radial-gradient(circle at 3vw 3vw, #345678, #012345);
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
}

.item:hover > .item-inner1 > .item-inner2 {
    /* background: linear-gradient(rgba(52, 86, 120, 1), rgba(86, 120, 154, 0)); */
    background: radial-gradient(circle at 3vw 3vw, #6789ab, #123456);
}

@media screen and (max-width: 600px) {
    .sidebar {
        width: 100vw;
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