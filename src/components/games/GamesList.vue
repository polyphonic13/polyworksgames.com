<template>
    <div class="games screen scrolling-screen">
        <h1 class="brandon title text-xxl">G A M E S</h1>

        <div class="main">
            <section class="intro-section">
                <p class="text-lg">
                    From fast-paced mobile games to deep narrative experiences, we create games that are fun,
                    challenging, and memorable. Each project is an opportunity to explore new ideas and push
                    creative boundaries.
                </p>
            </section>

            <section class="games-section">
                <h2 class="text-xl section-title">In Development</h2>
                <div class="games-grid">
                    <component
                        v-for="(game, g) in inDevelopmentGames"
                        :key="g"
                        :is="'router-link'"
                        :to="game.path"
                        class="game-card"
                    >
                        <div class="game-logo-container">
                            <img
                                class="game-logo"
                                :src="game.logo"
                                :alt="game.name"
                            />
                        </div>
                        <div class="game-info">
                            <h3 class="game-name">{{ game.name }}</h3>
                            <p v-if="game.tagline" class="game-tagline">{{ game.tagline }}</p>
                        </div>
                    </component>
                </div>
            </section>

            <section class="games-section">
                <h2 class="text-xl section-title">Released Games</h2>
                <div class="games-grid">
                    <component
                        v-for="(game, g) in releasedGames"
                        :key="g"
                        :is="'router-link'"
                        :to="game.path"
                        class="game-card"
                    >
                        <div class="game-logo-container">
                            <img
                                class="game-logo"
                                :src="game.logo"
                                :alt="game.name"
                            />
                        </div>
                        <div class="game-info">
                            <h3 class="game-name">{{ game.name }}</h3>
                            <p v-if="game.tagline" class="game-tagline">{{ game.tagline }}</p>
                        </div>
                    </component>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: "GamesList",
    data() {
        return {
            games: [
                {
                    name: "FALLEN METAL",
                    logo: require("../../assets/images/games/fallen-metal/fallen-metal-logo04a.png"),
                    path: "games/fallen-metal/",
                    tagline: "A cyberpunk noir RPG",
                    inDevelopment: true,
                },
                {
                    name: "Dreams of Yesterday",
                    logo: require("../../assets/images/games/doy/logo01.png"),
                    path: "games/dreams-of-yesterday/",
                    tagline: "",
                    inDevelopment: true,
                },
                {
                    name: "Rickle",
                    logo: require("../../assets/images/games/rickle/logo01.png"),
                    path: "games/rickle/",
                    tagline: "Physics-based arcade puzzle",
                    inDevelopment: false,
                },
                {
                    name: "Farkle Safari",
                    logo: require("../../assets/images/games/farkle-safari/logo01.png"),
                    path: "games/farkle-safari/",
                    tagline: "Dice rolling adventure",
                    inDevelopment: false,
                },
                {
                    name: "Crown Crunch",
                    logo: require("../../assets/images/games/crown-crunch/logo01.png"),
                    path: "games/crown-crunch/",
                    tagline: "Match-3 puzzle game",
                    inDevelopment: false,
                },
                {
                    name: "Keke and The Grey Expanse",
                    logo: require("../../assets/images/games/keke/logo01.png"),
                    path: "games/keke/",
                    tagline: "Platformer adventure",
                    inDevelopment: false,
                },
            ],
        };
    },
    computed: {
        inDevelopmentGames() {
            return this.games.filter(game => game.inDevelopment);
        },
        releasedGames() {
            return this.games.filter(game => !game.inDevelopment);
        },
    },
};
</script>
<style scoped>
.games {
    background: transparent;
}

.main {
    width: 100%;
    max-width: 1200px;
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

.games-section {
    background: rgba(15, 25, 40, 0.45);
}

.section-title {
    color: #a0c8e8;
    margin-bottom: 1.5em;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-align: center;
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2em;
}

.game-card {
    background: rgba(10, 20, 35, 0.5);
    border: 2px solid rgba(70, 110, 150, 0.2);
    border-radius: 12px;
    padding: 1.5em;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    position: relative;
    cursor: pointer;
}

.game-card:hover {
    background: rgba(15, 30, 50, 0.6);
    border-color: rgba(130, 200, 255, 0.5);
    box-shadow: 0 8px 24px rgba(130, 200, 255, 0.15);
    transform: translateY(-4px);
}

.game-logo-container {
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: 8px;
    padding: 1em;
    margin-bottom: 1em;
}

.game-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.game-info {
    width: 100%;
    text-align: center;
}

.game-name {
    color: #82c8ff;
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 0.5em;
}

.game-tagline {
    color: #c0d8f0;
    font-size: 0.9em;
    line-height: 1.4;
    margin: 0;
}

@media screen and (max-width: 700px) {
    .main {
        padding: 1em;
    }

    section {
        padding: 1.5em;
        margin-bottom: 2em;
    }

    .games-grid {
        grid-template-columns: 1fr;
        gap: 1.5em;
    }
}
</style>
