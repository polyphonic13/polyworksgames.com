<template>
    <div class="screen game crown-crunch">
        <div class="main">
            <section class="text-center">
                <img
                    class="game-title-logo"
                    src="../../../assets/images/games/crown-crunch/logo01.png"
                />
            </section>
            <section>
                <h2 class="text-xl">Smash, slash and CRUNCH the invading CROWN Monsters!</h2>
                <p class="text-xl">Don't let them reach the ground. Tap, swipe and double-tap your way to through these enemies. Save the city, town, farm and beyond. Great fun for young and old. Take a journey around the world in this simple, arcade style casual game. </p>
                <h2 class="text-xl">Charities</h2>
                <p class="text-xl">It's all about giving back. For every ad viewed, or purchase of the premium version, we will donate 50% of the proceeds to charity.</p>
                <p class="text-xl text-left">The following charities will be receiving donations from Crown Crunch proceeds. Visit the links to find out more.</p>
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
            <section>
                <h2 class="text-xl">Reviews</h2>
                <p class="text-xl">Games 1 News July 11, 2020: <a
                        href="https://game1news.com/2020/07/11/crown-crunch/"
                        target="_blank"
                    >https://game1news.com/2020/07/11/crown-crunch/</a></p>
            </section>

            <section class="">
                <h2 class="text-xl">Credits</h2>
                <p class="soundtrack text-xl">Original Soundtrack from OGRE Sound <a
                        href="http://www.ogresound.co.uk/"
                        target="_blank"
                    >http://www.ogresound.co.uk/</a></p>
            </section>
            <section>
                <h2 class="text-xl">Store Links</h2>
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
                <h2 class="text-xl">Privacy Policy</h2>
                <a
                    :href="privacyLink"
                    target="_blank"
                    class="privacy text-xl"
                >{{ privacyLink }}</a>
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
    name: "CrownCrunch",
    data() {
        return {
            charities: [
                {
                    name: "World Health Organization",
                    link: "https://covid19responsefund.org/en/",
                },
                {
                    name: "UNICEF",
                    link:
                        "https://donate.unicefusa.org/page/contribute/crown-virus-gen?_ga=2.265138951.989147882.1591480955-2042016180.1591480955&_gac=1.192991839.1591481091.Cj0KCQjw_ez2BRCyARIsAJfg-ksKZONE8taaXjqcl5tN64uej2R3eFaLTgRJKAH6esQ1DtgwGVY9cpAaArCNEALw_wcB",
                },
                {
                    name: "CDC Foundation",
                    link:
                        "https://give.cdcfoundation.org/give/195963/#!/donation/checkout",
                },
                {
                    name: "Give2Asia",
                    link: "https://give2asia.org/donate-coronavirus-fund/",
                },
                {
                    name: "Partners In Health",
                    link:
                        "https://donate.pih.org/page/contribute/coronavirus-response?utm_content=corona3&source=20200511_pdgg_glb_em_DELVE_allidgePlan_COVID_fnd__donation_0_0_all&gclid=Cj0KCQjwuJz3BRDTARIsAMg-HxWnQDp6Vk-w0g6tRWuwKDB8P2AkwYFj1wqdaonj88-IbTYArs-TKDUaAmQCEALw_wcB",
                },
            ],
            storeLinks: [
                {
                    name: "google",
                    image: require("../../../assets/images/store-logos-google.png"),
                    url:
                        "https://play.google.com/store/apps/details?id=com.polyworksgames.CrownCrunch",
                },
                {
                    name: "apple",
                    image: require("../../../assets/images/store-logos-apple.png"),
                    url: "https://apps.apple.com/us/app/id1518914882",
                },
            ],
            privacyLink:
                "http://www.polyworksgames.com/games/crown-crunch/privacy",
            screenshots: [
                {
                    url: require("../../../assets/images/games/crown-crunch/title.png"),
                },
                {
                    url: require("../../../assets/images/games/crown-crunch/level08.png"),
                },
                {
                    url: require("../../../assets/images/games/crown-crunch/level14.png"),
                },
                {
                    url: require("../../../assets/images/games/crown-crunch/level25.png"),
                },
                {
                    url: require("../../../assets/images/games/crown-crunch/level45.png"),
                },
                {
                    url: require("../../../assets/images/games/crown-crunch/settings.png"),
                },
            ],
        };
    },
};
</script>
<style scoped>
.crown-crunch {
    background-image: url(../../../assets/images/games/crown-crunch/city.png);
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;

    text-shadow: 1px 1px 1px #123456, 3px 3px 5px #456789;
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
</style>
