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
                <p class="text-xl">Top your high score, earn gems, buy power-ups and unlock new locations while building the highest RICKLE of stones!</p>
                <h2 class="text-xl">Charities</h2>
                <p class="text-xl">It's all about giving back. For every ad viewed, or purchase of the premium version, we will donate 10% of the proceeds to charity.</p>
                <p class="text-xl text-left">The following charities will be receiving donations from Rickle proceeds. Visit the links to find out more.</p>
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
            </section>
            <!-- <section>
                <h2 class="text-xl">Challenges</h2>
                <p class="text-xl">Click <router-link
                        :to="challengesLink"
                        class="privacy text-md"
                    >here</router-link> to see current and upcoming Rickle challenges!</p>

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
                // {
                //     name: "apple",
                //     image: require("../../../assets/images/store-logos-apple.png"),
                //     url: "https://apps.apple.com/us/app/rickle/id1546560307",
                // },
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
    background-image: url(../../../assets/images/games/rickle/desert-background.png);
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
