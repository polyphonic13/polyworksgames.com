<template>
    <div class="screen scrolling-screen game rickle">
        <div class="main">
            <section class="text-center">
                <img
                    class="game-title-logo"
                    src="../../../assets/images/games/rickle/logo01.png"
                />
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
            ],
            privacyLink: "http://www.polyworksgames.com/games/rickle/privacy",
            challengesLink: "/challenges",
            pressLinks: [
                {
                    name: "Android Games Review (Instagram)",
                    link: "https://www.instagram.com/p/CR57E2EHhDZ/?utm_medium=share_sheet",
                },
                {
                    name: "App Advice",
                    link: "https://appadvice.com/post/rickle-stacking-game-supports-charitable-causes/771139",
                },
                {
                    name: "App Advice (Review)",
                    link: "https://appadvice.com/post/rickle-review/1560862955/948439524",
                },
                {
                    name: "Droid Gamers",
                    link: "https://www.droidgamers.com/2021/06/10/rickle-is-an-addictive-tower-building-casual-game-out-now/",
                },
                {
                    name: "Droid Gamers (Interview)",
                    link: "https://www.droidgamers.com/2021/06/12/interview-how-rickle-sees-you-build-towers-and-help-fund-charities/",
                },
                {
                    name: "Gamezebo",
                    link: "https://www.gamezebo.com/2021/06/10/rickle-is-a-charitable-twist-on-the-tower-building-genre/",
                },
                {
                    name: "Gamezebo (Interview)",
                    link: "https://www.gamezebo.com/2021/06/12/interview-rickle-creator-paul-hoover-on-how-his-game-towers-over-the-competition/",
                },
                {
                    name: "iFanzine",
                    link: "https://ifanzine.com/rickle-is-a-casual-tower-building-game-with-an-environmental-mission/",
                },
                {
                    name: "Kongbakpao",
                    link: "https://kongbakpao.com/addictive-casual-game-rickle-is-raising-money-for-environmental-charities/",
                },
            ],
            challengeLinks: [
                {
                    name: "Sunflower Race (May 2021)",
                    link: "/games/rickle/sunflowers",
                },
            ],
            screenshots: [
                {
                    url: "/assets/images/games/rickle/ss01.png",
                },
                {
                    url: "/assets/images/games/rickle/ss02.png",
                },
                {
                    url: "/assets/images/games/rickle/ss03.png",
                },
                {
                    url: "/assets/images/games/rickle/ss04.png",
                },
                {
                    url: "/assets/images/games/rickle/ss05.png",
                },
                {
                    url: "/assets/images/games/rickle/ss06.png",
                },
                {
                    url: "/assets/images/games/rickle/ss07.png",
                },
                {
                    url: "/assets/images/games/rickle/ss08.png",
                },
                {
                    url: "/assets/images/games/rickle/ss09.png",
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

.privacy {
    margin-bottom: 1em;
}
</style>
