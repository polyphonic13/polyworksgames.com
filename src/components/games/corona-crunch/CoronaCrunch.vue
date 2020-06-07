<template>
    <div class="game screen">
        <img
            class="title-logo"
            src="../../../assets/images/games/corona-crunch/logo01.png"
        />
        <h2 class="text-lg">Smash, slash and crush the invading Corona Viruses! Don't let them get to the ground.</h2>
        <p class="text-lg">Help battle the virus from the comfort of your phone--half of all proceeds will be donated to world-wide charities. Every ad viewed in the free version and procedes from sales of the premium version will help in the fight against the Corona Virus.</p>
        <h2 class="text-lg">Charities</h2>
        <p class="text-lg text-left">The following charities will be receiving donations. Visit there links to find out more</p>
        <ul class="text-lg text-left">
            <li
                v-for="(charity, c) in charities"
                :key="c"
            >
                <a
                    :href="charity.link"
                    target="_blank"
                >{{ charity.name }}</a>
            </li>
        </ul>
        <h2 class="text-lg">Install from the Play or App Store</h2>
        <p class="store-links">
            <a
                v-for="(link, l) in storeLinks"
                :key="l"
                href="link.url"
                target="_blank"
                class="store-link"
            >
                <img :src="link.image" />
            </a>
        </p>
        <h2 class="text-lg">Credits</h2>
        <p class="soundtrack text-lg">Original Soundtrack from OGRE Sound <a
                href="http://www.ogresound.co.uk/"
                target="_blank"
            >http://www.ogresound.co.uk/</a></p>
        <h2 class="text-lg">Screenshots</h2>
        <div class="screenshots">
            <img
                v-for="(screenshot, s) in screenshots"
                :key="s"
                :src="screenshot.url"
                class="screenshot"
            />
        </div>
        <router-link
            to="/games/corona-crunch/privacy"
            class="privacy text-xl"
        >Privacy Policy</router-link>
    </div>
</template>
<script>
export default {
    name: "CoronaCrunch",
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
                        "https://donate.unicefusa.org/page/contribute/corona-virus-gen?_ga=2.265138951.989147882.1591480955-2042016180.1591480955&_gac=1.192991839.1591481091.Cj0KCQjw_ez2BRCyARIsAJfg-ksKZONE8taaXjqcl5tN64uej2R3eFaLTgRJKAH6esQ1DtgwGVY9cpAaArCNEALw_wcB"
                },
                {
                    name: "CDC Foundation",
                    link:
                        "https://give.cdcfoundation.org/give/195963/#!/donation/checkout"
                }
            ],
            storeLinks: [
                {
                    name: "google",
                    image: require("../../../assets/images/store-logos-google.png"),
                    url: ""
                },
                {
                    name: "apple",
                    image: require("../../../assets/images/store-logos-apple.png"),
                    url: ""
                }
            ],
            screenshots: [
                {
                    url: require("../../../assets/images/games/corona-crunch/cc-ss-title.png")
                },
                {
                    url: require("../../../assets/images/games/corona-crunch/cc-ss-level12.png")
                },
                {
                    url: require("../../../assets/images/games/corona-crunch/cc-ss-level27.png")
                },
                {
                    url: require("../../../assets/images/games/corona-crunch/cc-ss-level38.png")
                },
                {
                    url: require("../../../assets/images/games/corona-crunch/cc-ss-level45.png")
                },
                {
                    url: require("../../../assets/images/games/corona-crunch/cc-ss-settings.png")
                }
            ]
        };
    }
};
</script>
<style scoped>
.title-logo {
    width: 50%;
    height: auto;
}

.store-links {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.store-link {
    width: 33%;
    height: auto;
}

.store-link > img {
    border: 2px solid #abcdef;
    width: 100%;
    height: auto;
}

.screenshots {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 1em;
    box-sizing: border-box;
}

.screenshot {
    border: 2px solid #abcdef;
    width: 25%;
    height: auto;
    margin: 1em;
}

.privacy {
    margin-bottom: 1em;
}

@media screen and (max-width: 850px) {
    .screenshot {
        width: 40%;
    }
}

@media screen and (max-width: 600px) {
    .screenshot {
        width: 90%;
    }
}
</style>