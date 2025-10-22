<template>
    <div class="screen scrolling-screen game fallen-metal">
        <div class="rain-container"></div>
        <div class="main">
            <section class="text-center logo-section">
                <img
                    class="game-title-logo fallen-metal-logo"
                    src="../../../assets/images/games/fallen-metal/fallen-metal-logo04a.png"
                />
            </section>

            <!-- Hero Screenshots -->
            <section class="hero-screenshots">
                <img
                    v-for="(screenshot, s) in heroScreenshots"
                    :key="s"
                    :src="screenshot.url"
                    class="screenshot hero-screenshot"
                />
            </section>

            <!-- Game Info -->
            <section class="game-info">
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Genre:</strong> Cyberpunk Action RPG
                    </div>
                    <div class="info-item">
                        <strong>Platform:</strong> PC (Windows/Mac/Linux)
                    </div>
                    <div class="info-item">
                        <strong>Engine:</strong> Unity HDRP
                    </div>
                    <div class="info-item status-badge">
                        <strong>Status:</strong> In Development
                    </div>
                </div>
            </section>

            <!-- Elevator Pitch -->
            <section class="pitch">
                <p class="text-lg">You're an ex-detective turned mercenary in a neon-drenched megacity where flesh and chrome blur together. Three years ago, your partner was killed in what was officially ruled as gang violence. You moved on. You tried to forget.</p>
                <p class="text-lg noir-emphasis">But when evidence surfaces linking your partner's death to a corporate conspiracy, the investigation begins. No grand heroics. Just one debt to settle in a city that's already rotten to the core.</p>
            </section>

            <!-- Key Features with interspersed screenshots -->
            <section>
                <h2 class="text-xl">Key Features</h2>
                <ul class="text-lg features-list">
                    <li>
                        <strong>Noir Investigation</strong> - Discover clues organically through side missions and exploration. Piece together the conspiracy at your own pace
                    </li>
                    <li>
                        <strong>Dual-Identity System</strong> - Play as Male/Female Cyborg or Full-Conversion Robot, each with unique voice acting and relationship dynamics with your deceased partner
                    </li>
                </ul>
            </section>

            <!-- Feature Screenshots 1 -->
            <section class="feature-screenshots">
                <img
                    :src="featureScreenshots1[0].url"
                    class="screenshot feature-screenshot"
                />
                <img
                    :src="featureScreenshots1[1].url"
                    class="screenshot feature-screenshot"
                />
            </section>

            <section>
                <ul class="text-lg features-list">
                    <li>
                        <strong>Advanced Hacking</strong> - Breach corporate terminals with puzzle-based protocols, quickhack enemies mid-combat, and commandeer security drones
                    </li>
                    <li>
                        <strong>Meaningful Choices</strong> - Multiple paths to resolve confrontations—violence, blackmail, exposure, or mercy. No perfect endings, only consequences
                    </li>
                    <li>
                        <strong>Cybernetic Augmentation</strong> - Install neural implants and combat enhancements. Every upgrade brings power at a cost
                    </li>
                </ul>
            </section>

            <!-- Feature Screenshots 2 -->
            <section class="feature-screenshots">
                <img
                    :src="featureScreenshots2[0].url"
                    class="screenshot feature-screenshot"
                />
                <img
                    :src="featureScreenshots2[1].url"
                    class="screenshot feature-screenshot"
                />
            </section>

            <section>
                <ul class="text-lg features-list">
                    <li>
                        <strong>Survival Systems</strong> - Manage trauma damage, energy depletion, and fatigue. Quick fixes keep you moving; proper rest restores you fully
                    </li>
                    <li>
                        <strong>Atmospheric Worldbuilding</strong> - Navigate neon-lit corporate towers, grimy motel rooms, and rain-soaked streets. Every location tells a story
                    </li>
                </ul>
            </section>

            <!-- The World -->
            <section>
                <h2 class="text-xl">The World</h2>
                <p class="text-lg">A cyberpunk megacity where humans are becoming obsolete. Corporate power structures dominate from gleaming towers above while the desperate struggle in camps below. You navigate both worlds—working contracts for fixers while unraveling the truth about your partner's murder.</p>
                <p class="text-lg">Prejudice runs deep: humans fear synthetic replacement, robots resent biological superiority. Your partnership challenged those divides. That made you controversial. It might have made you both targets.</p>
            </section>

            <!-- Remaining Screenshots -->
            <section class="screenshots">
                <img
                    v-for="(screenshot, s) in remainingScreenshots"
                    :key="s"
                    :src="screenshot.url"
                    class="screenshot"
                />
            </section>

            <!-- Final Note -->
            <section class="final-note">
                <p class="text-lg noir-emphasis">This is noir. The city doesn't change. The villain might die, but the system survives. All you can do is settle one score and maybe find closure.</p>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: "FallenMetal",
    data() {
        return {
            heroScreenshots: [
                {
                    url: require("../../../assets/images/games/fallen-metal/Screenshot_2025-10-09_at_1.10.00_PM.png"),
                },
            ],
            featureScreenshots1: [
                {
                    url: require("../../../assets/images/games/fallen-metal/Screenshot_2025-10-12_at_4.19.07_PM.png"),
                },
                {
                    url: require("../../../assets/images/games/fallen-metal/Screenshot_2025-10-12_at_4.19.41_PM.png"),
                },
            ],
            featureScreenshots2: [
                {
                    url: require("../../../assets/images/games/fallen-metal/Screenshot_2025-10-12_at_4.20.00_PM.png"),
                },
                {
                    url: require("../../../assets/images/games/fallen-metal/Screenshot_2025-10-12_at_4.20.24_PM.png"),
                },
            ],
            remainingScreenshots: [
                {
                    url: require("../../../assets/images/games/fallen-metal/Screenshot_2025-10-09_at_1.10.20_PM.png"),
                },
                {
                    url: require("../../../assets/images/games/fallen-metal/Screenshot_2025-10-12_at_4.21.59_PM.png"),
                },
            ],
        };
    },
    mounted() {
        this.createRainEffect();
    },
    methods: {
        createRainEffect() {
            const rainContainer = this.$el.querySelector('.rain-container');
            if (!rainContainer) return;

            // Create subtle rain drops
            for (let i = 0; i < 80; i++) {
                const drop = document.createElement('div');
                drop.className = 'rain-drop';
                drop.style.left = `${Math.random() * 100}%`;
                drop.style.animationDuration = `${Math.random() * 2 + 3}s`; // 3-5s (slower)
                drop.style.animationDelay = `${Math.random() * 5}s`;
                rainContainer.appendChild(drop);
            }
        },
    },
};
</script>
<style>
/* Rain effect - must be global for dynamically created elements */
.fallen-metal .rain-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10000;
    overflow: hidden;
}

.fallen-metal .rain-drop {
    position: absolute;
    top: -120px;
    width: 1px;
    height: 120px;
    background: linear-gradient(
        to bottom,
        rgba(130, 200, 255, 0) 0%,
        rgba(130, 200, 255, 0.075) 50%,
        rgba(130, 200, 255, 0) 100%
    );
    animation: rain-fall linear infinite;
}

@keyframes rain-fall {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(calc(100vh + 120px));
    }
}
</style>
<style scoped>
.fallen-metal {
    background-color: #000;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(10, 10, 15, 1) 50%,
        rgba(0, 0, 0, 1) 100%
    );
    color: #e0e0e0;
    position: relative;
}

.main {
    padding-bottom: 100vh;
}

section,
.screenshots,
.hero-screenshots,
.feature-screenshots {
    background-color: rgba(20, 20, 25, 0.85);
    border: 1px solid rgba(130, 200, 255, 0.25);
}

.game-info {
    background-color: rgba(30, 30, 40, 0.9);
    border: 1px solid rgba(130, 200, 255, 0.35);
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1em;
    padding: 0.5em 0;
}

.info-item {
    color: #b0b0b0;
    font-size: 1.2em;
}

.info-item strong {
    color: #82c8ff;
}

.status-badge {
    color: #82c8ff;
}

.status-badge strong {
    color: #82c8ff;
}

h2 {
    color: #82c8ff;
    text-shadow: 0 0 8px rgba(130, 200, 255, 0.3);
}

p {
    color: #d0d0d0;
    line-height: 1.7;
}

.pitch {
    background-color: rgba(15, 15, 20, 0.9);
    border: 1px solid rgba(130, 200, 255, 0.3);
}

.noir-emphasis {
    font-style: italic;
    color: #82c8ff;
    border-left: 3px solid #82c8ff;
    padding-left: 1em;
    margin-top: 1.5em;
}

.features-list {
    list-style: none;
    padding: 0;
}

.features-list li {
    padding: 0.75em 0;
    border-bottom: 1px solid rgba(130, 200, 255, 0.15);
    color: #d0d0d0;
    line-height: 1.7;
}

.features-list li:last-child {
    border-bottom: none;
}

.features-list strong {
    color: #82c8ff;
    font-weight: 600;
}

/* Hero Screenshots - Large display at top */
.hero-screenshots {
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
    justify-content: center;
    padding: 1em;
}

.hero-screenshot {
    width: 80%;
    max-width: 800px;
    border: 2px solid #82c8ff;
    box-shadow: 0 0 20px rgba(130, 200, 255, 0.4);
}

/* Feature Screenshots - Paired with features */
.feature-screenshots {
    display: flex;
    flex-direction: row;
    gap: 1em;
    align-items: center;
    justify-content: center;
    padding: 1em;
}

.feature-screenshot {
    width: 48%;
    border: 2px solid #82c8ff;
    box-shadow: 0 0 15px rgba(130, 200, 255, 0.3);
}

/* Regular screenshots gallery */
.screenshots {
    min-height: 300px;
}

.screenshot {
    border: 2px solid #82c8ff;
    box-shadow: 0 0 15px rgba(130, 200, 255, 0.3);
}

.final-note {
    background-color: rgba(10, 10, 15, 0.95);
    border: 1px solid rgba(130, 200, 255, 0.4);
}

a {
    color: #82c8ff;
    text-decoration: none;
    transition: color 0.3s ease;
}

a:hover {
    color: #a0d4ff;
    text-shadow: 0 0 8px rgba(130, 200, 255, 0.5);
}

@media screen and (max-width: 700px) {
    .info-grid {
        grid-template-columns: 1fr;
        gap: 0.5em;
    }

    .hero-screenshots,
    .feature-screenshots {
        flex-direction: column;
    }

    .hero-screenshot,
    .feature-screenshot {
        width: 100%;
    }
}
</style>
