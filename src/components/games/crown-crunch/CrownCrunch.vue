<template>
    <div class="game screen">
        <img
            class="game-title-logo"
            src="../../../assets/images/games/crown-crunch/logo01.png"
        />
        <section>
            <h2 class="text-xl">Smash, slash and CRUNCH the invading CROWN Monsters!</h2>
            <p class="text-xl">It's all about giving back. For every ad viewed, or purchase of the premium version, we will donate 50% of the proceeds to charity.</p>
            <h2 class="text-xl">Charities</h2>
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
        <section class="">
            <h2 class="text-xl">Credits</h2>
            <p class="soundtrack text-xl">Original Soundtrack from OGRE Sound <a
                    href="http://www.ogresound.co.uk/"
                    target="_blank"
                >http://www.ogresound.co.uk/</a></p>
        </section>
        <section>
            <h2 class="text-xl">Links</h2>
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
            <router-link
                to="/games/crown-crunch/privacy"
                class="privacy text-xl"
            >Privacy Policy</router-link>
        </section>
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
    name: "CrownCrunch",
    data() {
        return {
            charities: [
                {
                    name: "World Health Organization",
                    link: "https://covid19responsefund.org/en/"
                },
                {
                    name: "UNICEF",
                    link:
                        "https://donate.unicefusa.org/page/contribute/crown-virus-gen?_ga=2.265138951.989147882.1591480955-2042016180.1591480955&_gac=1.192991839.1591481091.Cj0KCQjw_ez2BRCyARIsAJfg-ksKZONE8taaXjqcl5tN64uej2R3eFaLTgRJKAH6esQ1DtgwGVY9cpAaArCNEALw_wcB"
                },
                {
                    name: "CDC Foundation",
                    link:
                        "https://give.cdcfoundation.org/give/195963/#!/donation/checkout"
                },
                {
                    name: "Give2Asia",
                    link: "https://give2asia.org/donate-coronavirus-fund/"
                },
                {
                    name: "Partners In Health",
                    link:
                        "https://donate.pih.org/page/contribute/coronavirus-response?utm_content=corona3&source=20200511_pdgg_glb_em_DELVE_allidgePlan_COVID_fnd__donation_0_0_all&gclid=Cj0KCQjwuJz3BRDTARIsAMg-HxWnQDp6Vk-w0g6tRWuwKDB8P2AkwYFj1wqdaonj88-IbTYArs-TKDUaAmQCEALw_wcB"
                }
            ],
            storeLinks: [
                {
                    name: "google",
                    image: require("../../../assets/images/store-logos-google.png"),
                    url:
                        "https://play.google.com/store/apps/details?id=com.polyworksgames.CrownCrunch"
                },
                {
                    name: "apple",
                    image: require("../../../assets/images/store-logos-apple.png"),
                    url:
                        "https://apps.apple.com/us/app/crown-crunch/id1517903477?mt=8"
                }
            ],
            screenshots: [
                {
                    url: require("../../../assets/images/games/crown-crunch/cc-ss-title.png")
                },
                {
                    url: require("../../../assets/images/games/crown-crunch/cc-ss-level12.png")
                },
                {
                    url: require("../../../assets/images/games/crown-crunch/cc-ss-level27.png")
                },
                {
                    url: require("../../../assets/images/games/crown-crunch/cc-ss-level38.png")
                },
                {
                    url: require("../../../assets/images/games/crown-crunch/cc-ss-level45.png")
                },
                {
                    url: require("../../../assets/images/games/crown-crunch/cc-ss-settings.png")
                }
            ]
        };
    }
};
</script>
<style scoped>
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
    border: 2px solid #abcdef;
    width: 100%;
    height: auto;
}

.privacy {
    margin-bottom: 1em;
}
</style>