<template>
    <div class="screen game farkle-safari">
        <div class="main">
            <section class="text-center">
                <img
                    class="game-title-logo"
                    src="../../../assets/images/games/farkle-safari/logo01.png"
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
            </section>
            <section>
                <h2 class="text-xl">Play dice against animals from around the world in Farkle Safari!</h2>
                <p class="text-xl">Play the dice game, Farkle, against all of the animals of the world. Travel to the Forest, Jungle, Ocean and Savanna. Become the Farkle Grand Champion in this fun, new game from Polyworks Games. Earn trophies, win custom dice sets and gain powers to help defeat your opponents!</p>
                <h2 class="text-xl">Charities</h2>
                <p class="text-xl">It's all about giving back. For every ad viewed, or purchase of the premium version, we will donate 10% of the proceeds to charity.</p>
                <p class="text-xl text-left">The following charities will be receiving donations from Farkle Safari proceeds. Visit the links to find out more.</p>
                <ul class="text-xl text-left list-style-none">
                    <li
                        v-for="(charity, c) in charities"
                        :key="c"
                        class="charity"
                    >
                        <a
                            :href="charity.link"
                            target="_blank"
                        >{{ charity.name }}</a>
                    </li>
                </ul>
            </section>
            <section class="">
                <h2 class="text-xl">Credits</h2>
                <p class="soundtrack text-xl">Original Soundtrack from Tyler Beckwitth Music Production <a
                        href="https://www.tylerbeckwithmusic.com/"
                        target="_blank"
                    >https://www.tylerbeckwithmusic.com/</a></p>
            </section>
            <!-- <section>
                <h2 class="text-xl">Challenges</h2>
                <p class="text-xl">Click <router-link
                        :to="challengesLink"
                        class="privacy text-md"
                    >here</router-link> to see current and upcoming Farkle Safari challenges!</p>

            </section> -->
            <section>
                <h2 class="text-xl">Press</h2>
                <ul class="text-xl text-left list-style-none">
                    <li
                        v-for="(press, p) in pressLinks"
                        :key="p"
                        class="charity"
                    >
                        <a
                            :href="press.link"
                            target="_blank"
                        >{{ press.name }}</a>
                    </li>
                </ul>
            </section>
            <section>
                <h2 class="text-xl">Privacy Policy</h2>
                <a
                    :href="privacyLink"
                    target="_blank"
                    class="privacy text-md"
                >{{ privacyLink }}</a>
            </section>
            <section class="video text-center">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/dvaMhnhxZC4"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </section>
            <section class="screenshots">
                <img
                    v-for="(screenshot, s) in screenshots"
                    :key="s"
                    :src="screenshot.url"
                    class="screenshot"
                />
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: "FarkleSafari",
    data() {
        return {
            charities: [
                {
                    name: "WORLD WILDLIFE FUND",
                    link:
                        "https://support.worldwildlife.org/site/Donation2?df_id=14597&14597.donation=form1&s_src=AWE2005OQ18491A03788RX&gclid=Cj0KCQiAoab_BRCxARIsANMx4S4IRxJTgm-mXunPU-U1xkgGFx6fgxjRLTEPRUY-WQ7CU6awF-Aqar0aAqvPEALw_wcB",
                },
                {
                    name: "RAINFOREST ACTION NETWORK",
                    link:
                        "https://act.ran.org/page/24255/donate/1?en_og_source=ad_gad&gclid=Cj0KCQiAoab_BRCxARIsANMx4S65k3O7HP0k9aknhEpRZFNiS-Pz1jIthuHLkfdo9JvYYt2gme1S7t0aAtPwEALw_wcB",
                },
            ],
            storeLinks: [
                {
                    name: "google",
                    image: require("../../../assets/images/store-logos-google.png"),
                    url:
                        "https://play.google.com/store/apps/details?id=com.polyworksgames.farklesafari",
                },
                {
                    name: "apple",
                    image: require("../../../assets/images/store-logos-apple.png"),
                    url:
                        "https://apps.apple.com/us/app/farkle-safari/id1546560307",
                },
            ],
            privacyLink:
                "http://www.polyworksgames.com/games/farkle-safari/privacy",
            challengesLink: "/challenges",
            pressLinks: [
                {
                    name: "GLYFE",
                    link:
                        "https://gaminglyfe.com/farkle-safari-lands-on-mobile-today/",
                },
                {
                    name: "Playstation Bit",
                    link:
                        "https://www.playstationbit.com/mobile/farkle-safari-gratis-su-android-e-ios",
                },
                {
                    name: "Game1News",
                    link:
                        "https://game1news.com/farkle-safari-royal-dice-number-merge/",
                },
            ],
            screenshots: [
                // {
                //     url: require("../../../assets/images/games/farkle-safari/ss01.png"),
                // },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss02.png"),
                },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss03.png"),
                },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss04.png"),
                },
                // {
                //     url: require("../../../assets/images/games/farkle-safari/ss05.png"),
                // },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss06.png"),
                },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss07.png"),
                },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss08.png"),
                },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss09.png"),
                },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss10.png"),
                },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss11.png"),
                },
                // {
                //     url: require("../../../assets/images/games/farkle-safari/ss12.png"),
                // },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss13.png"),
                },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss14.png"),
                },
                {
                    url: require("../../../assets/images/games/farkle-safari/ss15.png"),
                },
                // {
                //     url: require("../../../assets/images/games/farkle-safari/ss16.png"),
                // },
            ],
        };
    },
    created() {},
};
</script>
<style scoped>
.farkle-safari {
    background-image: url(../../../assets/images/games/farkle-safari/forest-bg-tall.png);
    background-position: bottom center;
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
