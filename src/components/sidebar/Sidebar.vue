<template>
    <div class="sidebar">
        <router-link
            v-for="(item, i) in items"
            :key="i"
            class="item"
            :to="item.link"
        ><span class="item-inner1">{{ item.name }}</span></router-link>
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
    width: 50vw;
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
    background: linear-gradient(rgba(1, 35, 69, 1), rgba(18, 52, 86, 0));
    color: #abcdef;
    width: 10vw;
    height: 10vw;
    text-decoration: none;
    font-size: 2em;
    transition: all 0.5s linear;
    padding: 1em;
    border-radius: 50%;
}

.item-inner1 {
    background: linear-gradient(rgba(35, 69, 103, 1), rgba(52, 86, 120, 0));
    width: 9.5vw;
    height: 9.5vw;
    border-radius: 50%;
}

.item:hover {
    background: linear-gradient(rgba(18, 52, 86, 1), rgba(69, 103, 152, 0));
    width: 12vw;
    height: 12vw;
    font-size: 3em;
}
</style>