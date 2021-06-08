<template>
    <div class="screen game rickle">
        <div class="main">
            <section class="text-center">
                <img
                    class="game-title-logo"
                    src="../../../assets/images/games/rickle/logo01.png"
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
                <h2 class="text-xl">Build your Rickle of stones!</h2>
                <p class="text-lg">Top your high score, earn gems, buy power-ups and unlock new locations while building the highest RICKLE of stones! In this simple, ultra-casual game, your goal is to drop stones into towering piles. A single tap is all you need to sit back, relax and stack. Or, aim higher with the Precision, Grow and Slow power-ups. Collect gems every round, trading them in for refills of your favorite power-ups.</p>
                <h2 class="text-xl">Charities</h2>
                <p class="text-lg">It's all about giving back. For every ad viewed, or purchase of the premium version, we will donate 10% of the proceeds to charity.</p>
                <p class="text-lg text-left">The following charities will be receiving donations from Rickle proceeds. Visit the links to find out more.</p>
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
            <!-- <section class="">
                <h2 class="text-xl">Credits</h2>
            </section> -->
            <!-- <section>
                <h2 class="text-xl">Challenges</h2>
                <p class="text-lg text-left">Win cash prizes in Rickle Challenges! Visit below to see specifics and check regularly for new additions.</p>
                <ul class="text-xl text-left list-style-none">
                    <li
                        v-for="(challenge, c) in challengeLinks"
                        :key="c"
                    >
                        <router-link :to="challenge.link">{{ challenge.name }}</router-link>
                    </li>
                </ul>
            </section> -->
            <!-- <section>
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
            </section> -->
            <section class="video text-center">
                <iframe
                    width="320"
                    height="315"
                    src="https://www.youtube.com/embed/3lB-u1YAW1I"
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
            <section>
                <h2 class="text-xl">Privacy Policy</h2>
                <a
                    :href="privacyLink"
                    target="_blank"
                    class="privacy text-md"
                >{{ privacyLink }}</a>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: "Rickle",
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
            challengeLinks: [
                {
                    name: "Sunflower Race (May 2021)",
                    link: "/games/rickle/sunflowers",
                },
            ],
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
    background-image: url(../../../assets/images/games/rickle/desert-background.png);
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;

    /* text-shadow: 1px 1px 1px #123456, 3px 3px 5px #456789; */

    color: #36220c;
}

.main {
    padding-bottom: 100vh;
}

section,
.screenshots {
    background-color: rgba(255, 255, 255, 0.85);
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
