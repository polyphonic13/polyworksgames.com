<template>
    <div class="screen game rickle">
        <div class="main">
            <section class="text-center">
                <img
                    class="game-title-logo"
                    src="../../../assets/images/games/rickle/logo02-sunflowers.png"
                />
            </section>
            <section>
                <p class="store-links">
                    <a
                        v-for="(link, l) in storeLinks"
                        :key="l"
                        :href="link.url"
                        target="_blank"
                        class="store-link"
                    >
                        <img :src="link.image" />
                    </a>
                </p>
                <h2 class="text-xl text-center">Rickle Sunflower Race</h2>
                <p class="text-lg">The race is on! Be the first to get to the Sunflowers Location. The race will run from May 1st 2021 to July 1st 2021. Hurry to beat your competitors to the goal and claim a prize.</p>
                <h2 class="text-xl">Prizes</h2>
                <ul class="text-xl text-left list-style-none">
                    <li>1st place: $500</li>
                    <li>2nd place: $350</li>
                    <li>3rd place: $150</li>
                </ul>
                <h2 class="text-xl">Rules</h2>
                <ol class="text-lg text-left">
                    <li>Download game (see above for links)</li>
                    <li>Stack stones, accumulating higher and higher total count</li>
                    <li>Unlock new locations until reaching the Sunflower field</li>
                    <li>Take a screenshot of a game in the Sunflower location</li>
                    <li>Share screenshot on <a
                            href="https://www.facebook.com/polyworksgames"
                            target="_blank"
                        >Facebook</a>, <a
                            href="https://www.instagram.com/polyworksgames/"
                            target="_blank"
                        >@polyworksgames</a> on Instagram or send an email to <a
                            href="mailto:contact@polyworksgames.com"
                            class="text-sm"
                        >contact@polyworksgames.com</a>
                    </li>
                    <li>Be the 1st, 2nd or 3rd player to win and collect the prize. *</li>
                    <li>BRAG!</li>
                </ol>
                <p class="text-md">* Prizes will be rewarded via PayPal or Venmo transfer. All rewards in USD.</p>
                <p class="text-md">Your privacy is important to us. <i>Emails or other personal information used to complete exchange will not be stored or shared with 3rd parties.</i></p>
            </section>
            <section>
                <p class="text-lg">Be sure to visit <a href="http://www.polyworksgames.com/games/rickle">polyworksgames.com/games/rickle</a> often to find out about other Rickle Challenges!</p>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: "Sunflowers",
    data() {
        return {
            charities: [
                {
                    name: "Natrual Resources Defense Counsel",
                    link: "https://www.nrdc.org/",
                },
                {
                    name: "Union of Concerned Scientists",
                    link: "https://www.ucsusa.org/",
                },
                {
                    name: "Environmental Working Group",
                    link: "https://www.ewg.org/",
                },
            ],
            storeLinks: [
                {
                    name: "google",
                    image: require("../../../assets/images/store-logos-google.png"),
                    url:
                        "https://play.google.com/store/apps/details?id=com.polyworksgames.Rickle",
                },
                {
                    name: "apple",
                    image: require("../../../assets/images/store-logos-apple.png"),
                    url: "https://apps.apple.com/us/app/rickle/id1560862955",
                },
            ],
            privacyLink: "http://www.polyworksgames.com/games/rickle/privacy",
            challengesLink: "/challenges",
            pressLinks: [],
            screenshots: [
                {
                    url: require("../../../assets/images/games/rickle/ss01.png"),
                },
                {
                    url: require("../../../assets/images/games/rickle/ss02.png"),
                },
                {
                    url: require("../../../assets/images/games/rickle/ss03.png"),
                },
                {
                    url: require("../../../assets/images/games/rickle/ss04.png"),
                },
                {
                    url: require("../../../assets/images/games/rickle/ss05.png"),
                },
                {
                    url: require("../../../assets/images/games/rickle/ss06.png"),
                },
                {
                    url: require("../../../assets/images/games/rickle/ss07.png"),
                },
                {
                    url: require("../../../assets/images/games/rickle/ss08.png"),
                },
                {
                    url: require("../../../assets/images/games/rickle/ss09.png"),
                },
            ],
        };
    },
    created() {},
};
</script>
<style scoped>
.rickle {
    background-image: url(../../../assets/images/games/rickle/sunflowers-background.png);
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;

    text-shadow: 1px 1px 1px #123456, 3px 3px 5px #456789;

    color: #f7e2c1;
}

.main {
    padding-bottom: 100vh;
}

section,
.screenshots {
    background-color: rgba(0, 0, 0, 0.75);
}

.charity {
    padding: 0.5em;
}

.store-links {
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.store-link {
    width: 33%;
    margin: 1em 0;
    height: auto;
}

.store-link > img {
    /* border: 2px solid #abcdef; */
    width: 100%;
    height: auto;
}

.privacy {
    margin-bottom: 1em;
}

@media screen and (max-width: 600px) {
    .store-link {
        width: 50%;
    }
}
</style>
