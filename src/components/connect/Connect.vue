<template>
    <div class="connect screen scrolling-screen">
        <h1 class="brandon title text-xxl">S O C I A L</h1>

        <div class="main">
            <section class="intro-section">
                <p class="text-lg">
                    Stay connected with Polyworks Games. Follow our development journey, see behind-the-scenes updates,
                    and be the first to know about new releases and announcements.
                </p>
            </section>

            <section class="social-section">
                <h2 class="text-xl section-title">Follow Us</h2>
                <div class="networks">
                    <a
                        v-for="(network, n) in networks"
                        :key="n"
                        :href="network.link"
                        target="_blank"
                        class="network"
                    >
                        <div class="network-card">
                            <img
                                :src="network.logo"
                                :alt="network.name"
                            />
                            <div class="network-name">{{ network.displayName }}</div>
                        </div>
                    </a>
                </div>
            </section>

            <section class="contact-section">
                <h2 class="text-xl section-title">Get In Touch</h2>
                <p class="text-lg contact-intro">
                    Have questions, feedback, or interested in collaboration? We'd love to hear from you.
                </p>
                <div class="email-card">
                    <div class="email-label">Email</div>
                    <a
                        href="mailto:contact@polyworksgames.com"
                        target="_blank"
                        class="email-link text-xl"
                    >contact@polyworksgames.com</a>
                </div>
            </section>
        </div>
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
                    displayName: "Facebook",
                    link: "https://www.facebook.com/polyworksgames",
                    logo: require("../../assets/images/social/facebook03.png"),
                },
                {
                    name: "instagram",
                    displayName: "Instagram",
                    link: "https://www.instagram.com/polyworksgames/",
                    logo: require("../../assets/images/social/instagram03.png"),
                },
                {
                    name: "twitter",
                    displayName: "Twitter",
                    link: "https://www.twitter.com/PolyworksGames",
                    logo: require("../../assets/images/social/twitter01.png"),
                },
            ],
        };
    },
};
</script>
<style scoped>
.connect {
    background: transparent;
}

.main {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 2em;
    box-sizing: border-box;
}

section {
    margin-bottom: 3em;
    padding: 2.5em;
    background: rgba(15, 25, 40, 0.4);
    border-radius: 8px;
    border: 1px solid rgba(90, 140, 190, 0.15);
    backdrop-filter: blur(10px);
}

.intro-section {
    background: rgba(20, 35, 55, 0.5);
    border: 1px solid rgba(90, 140, 190, 0.25);
    text-align: center;
}

.intro-section p {
    color: #d0e0f0;
    line-height: 1.7;
    margin: 0;
}

.section-title {
    color: #a0c8e8;
    margin-bottom: 1.5em;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-align: center;
}

.social-section {
    background: rgba(15, 25, 40, 0.45);
}

.networks {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;
    gap: 2em;
}

.network {
    flex: 1 1 250px;
    max-width: 300px;
    text-decoration: none;
    transition: transform 0.3s ease;
}

.network:hover {
    transform: translateY(-8px);
}

.network-card {
    background: rgba(10, 20, 35, 0.6);
    border: 2px solid rgba(70, 110, 150, 0.2);
    border-radius: 12px;
    padding: 2em 1.5em;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.network:hover .network-card {
    background: rgba(15, 30, 50, 0.7);
    border-color: rgba(130, 200, 255, 0.5);
    box-shadow: 0 8px 24px rgba(130, 200, 255, 0.15);
}

.network-card img {
    width: 80%;
    max-width: 120px;
    height: auto;
    margin-bottom: 1em;
    filter: brightness(0.9);
    transition: filter 0.3s ease;
}

.network:hover .network-card img {
    filter: brightness(1.1);
}

.network-name {
    color: #82c8ff;
    font-size: 1.1em;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.05em;
}

.contact-section {
    background: rgba(20, 35, 55, 0.5);
    border: 1px solid rgba(130, 200, 255, 0.2);
}

.contact-intro {
    text-align: center;
    color: #d0e0f0;
    line-height: 1.7;
    margin-bottom: 2em;
}

.email-card {
    background: rgba(10, 20, 35, 0.5);
    border: 1px solid rgba(90, 140, 190, 0.3);
    border-radius: 8px;
    padding: 2em;
    text-align: center;
    transition: all 0.3s ease;
}

.email-card:hover {
    background: rgba(15, 30, 50, 0.6);
    border-color: rgba(130, 200, 255, 0.4);
}

.email-label {
    color: #a0c8e8;
    font-size: 0.9em;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 0.5em;
}

.email-link {
    color: #82c8ff;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;
    display: inline-block;
}

.email-link:hover {
    color: #a0d8ff;
    text-decoration: underline;
}

@media screen and (max-width: 700px) {
    .main {
        padding: 1em;
    }

    section {
        padding: 1.5em;
        margin-bottom: 2em;
    }

    .networks {
        flex-direction: column;
        gap: 1.5em;
    }

    .network {
        width: 100%;
        max-width: 300px;
    }

    .email-link {
        font-size: 1em;
        word-break: break-all;
    }
}
</style>
