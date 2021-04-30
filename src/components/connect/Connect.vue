<template>
    <div class="connect screen">
        <h1 class="brandon text-xl">C O N N E C T</h1>
        <div class="networks">
            <a
                v-for="(network, n) in networks"
                :key="n"
                :href="network.link"
                target="_blank"
                class="network"
            >
                <img
                    :src="network.logo"
                    :alt="network.name"
                />
            </a>
        </div>
        <section>
            <p class="text-xl text-center align-self-center"><a href="mailto:contact@polyworksgames.com">contact@polyworkgames.com</a></p>
        </section>
    </div>
</template>
<script>
export default {
    name: "Connect",
    data() {
        return {
            networks: [
                {
                    name: "facebook",
                    link: "https://www.facebook.com/polyworksgames",
                    logo: require("../../assets/images/social/facebook03.png"),
                },
                {
                    name: "instagram",
                    link: "https://www.instagram.com/polyworksgames/",
                    logo: require("../../assets/images/social/instagram03.png"),
                },
                {
                    name: "twitter",
                    link: "https://www.twitter.com/PolyworksGames",
                    logo: require("../../assets/images/social/twitter01.png"),
                },
            ],
        };
    },
};
</script>
<style scoped>
.networks {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-evenly;
}

.network {
    width: 25%;
    margin: 1em;
}

.network > img {
    width: 100%;
    height: auto;
}
</style>
