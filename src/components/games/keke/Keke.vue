<template>
    <div class="game screen">
        <img
            class="game-title-logo"
            src="../../../assets/images/games/keke/logo01.png"
        />
        <h2 class="text-lg">Help Keke save the colors of The Grey Expanse!</h2>
        <p class="text-lg">An HTML5 platformer game. Keke battles caterpillars and spiders searching for the color crystals in a grey land, in this html5 game for desktop and mobile.</p>
        <p class="text-lg">Release July 2014 through the <a
                href="https://tresensa.com/"
                target="_blank"
            >Tres Sensa</a> HTML5 Game Network. This game is not currently available.</p>
        <h2 class="text-lg">Screenshots</h2>
        <div class="screenshots">
            <img
                v-for="(screenshot, s) in screenshots"
                :key="s"
                :src="screenshot.url"
                class="screenshot"
            />
        </div>

    </div>
</template>
<script>
export default {
    name: "Keke",
    data() {
        return {
            screenshots: [
                {
                    url: require("../../../assets/images/games/keke/keke-ss-01.png")
                },
                {
                    url: require("../../../assets/images/games/keke/keke-ss-02.png")
                },
                {
                    url: require("../../../assets/images/games/keke/keke-ss-03.png")
                }
            ]
        };
    }
};
</script>
<style scoped>
</style>