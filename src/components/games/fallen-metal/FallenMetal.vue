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

            <!-- Soundtrack Preview -->
            <section class="soundtrack-section">
                <h2 class="text-xl section-title">Soundtrack Preview</h2>
                <div class="soundtrack-player">
                    <div
                        v-for="(track, index) in soundtracks"
                        :key="index"
                        class="track-item"
                        :class="{ 'now-playing': currentTrack === index }"
                    >
                        <div class="track-header">
                            <div class="track-title">
                                <span v-if="currentTrack === index" class="playing-indicator">▶</span>
                                {{ track.title }}
                            </div>
                            <div class="track-duration">{{ formatTime(trackDurations[index]) }}</div>
                        </div>

                        <!-- Hidden audio element -->
                        <audio
                            :ref="`audio${index}`"
                            preload="metadata"
                            @ended="onTrackEnded(index)"
                            @timeupdate="onTimeUpdate(index)"
                            @loadedmetadata="onMetadataLoaded(index)"
                        >
                            <source :src="track.url" type="audio/mpeg">
                        </audio>

                        <!-- Custom controls -->
                        <div class="custom-controls">
                            <button
                                class="control-btn play-pause-btn"
                                @click="togglePlayPause(index)"
                            >
                                <!-- Pause Icon -->
                                <svg v-if="currentTrack === index && isPlaying" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                                    <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                                </svg>
                                <!-- Play Icon -->
                                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="8 5 19 12 8 19"></polygon>
                                </svg>
                            </button>

                            <div class="progress-container" @click="seek(index, $event)">
                                <div class="progress-bar">
                                    <div
                                        class="progress-fill"
                                        :style="{ width: (currentTrack === index ? playbackProgress : 0) + '%' }"
                                    ></div>
                                </div>
                            </div>

                            <div class="time-display">
                                <span class="current-time">{{ formatTime(currentTrack === index ? currentTime : 0) }}</span>
                                <span class="separator">/</span>
                                <span class="total-time">{{ formatTime(trackDurations[index]) }}</span>
                            </div>

                            <div class="volume-container">
                                <button class="control-btn volume-btn" @click="toggleMute">
                                    <!-- Muted Icon -->
                                    <svg v-if="isMuted || volume === 0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                        <line x1="23" y1="9" x2="17" y2="15"></line>
                                        <line x1="17" y1="9" x2="23" y2="15"></line>
                                    </svg>
                                    <!-- Low Volume Icon -->
                                    <svg v-else-if="volume < 0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                    </svg>
                                    <!-- High Volume Icon -->
                                    <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                    </svg>
                                </button>
                                <input
                                    type="range"
                                    class="volume-slider"
                                    min="0"
                                    max="100"
                                    :value="volume * 100"
                                    @input="setVolume($event)"
                                />
                            </div>
                        </div>
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
            currentTrack: null,
            isPlaying: false,
            currentTime: 0,
            playbackProgress: 0,
            volume: 0.7,
            isMuted: false,
            trackDurations: [0, 0, 0],
            soundtracks: [
                {
                    title: "Neon Shadows II",
                    url: require("../../../assets/audio/fallen-metal/Neon Shadows II.mp3"),
                },
                {
                    title: "The Void Beckons",
                    url: require("../../../assets/audio/fallen-metal/The Void Beckons.mp3"),
                },
                {
                    title: "Echoes of the Abyss",
                    url: require("../../../assets/audio/fallen-metal/Echoes of the Abyss.mp3"),
                },
            ],
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
        togglePlayPause(index) {
            const audio = this.$refs[`audio${index}`][0];

            if (this.currentTrack === index && this.isPlaying) {
                // Pause current track
                audio.pause();
                this.isPlaying = false;
            } else {
                // Pause all other tracks
                this.soundtracks.forEach((_, i) => {
                    const otherAudio = this.$refs[`audio${i}`][0];
                    if (otherAudio && i !== index) {
                        otherAudio.pause();
                    }
                });

                // Play this track
                audio.play();
                this.currentTrack = index;
                this.isPlaying = true;
            }
        },
        onTrackEnded(index) {
            this.isPlaying = false;
            // Automatically play the next track in the playlist
            const nextIndex = index + 1;
            if (nextIndex < this.soundtracks.length) {
                this.$nextTick(() => {
                    this.togglePlayPause(nextIndex);
                });
            } else {
                // Playlist finished
                this.currentTrack = null;
            }
        },
        onTimeUpdate(index) {
            if (this.currentTrack === index) {
                const audio = this.$refs[`audio${index}`][0];
                this.currentTime = audio.currentTime;
                this.playbackProgress = (audio.currentTime / audio.duration) * 100;
            }
        },
        onMetadataLoaded(index) {
            const audio = this.$refs[`audio${index}`][0];
            this.$set(this.trackDurations, index, audio.duration);
            // Set volume on load
            audio.volume = this.volume;
        },
        seek(index, event) {
            const audio = this.$refs[`audio${index}`][0];
            const progressBar = event.currentTarget;
            const clickX = event.offsetX;
            const width = progressBar.offsetWidth;
            const seekTime = (clickX / width) * audio.duration;
            audio.currentTime = seekTime;
        },
        setVolume(event) {
            this.volume = event.target.value / 100;
            this.isMuted = false;
            // Update volume for all audio elements
            this.soundtracks.forEach((_, i) => {
                const audio = this.$refs[`audio${i}`][0];
                if (audio) {
                    audio.volume = this.volume;
                }
            });
        },
        toggleMute() {
            this.isMuted = !this.isMuted;
            const volumeToSet = this.isMuted ? 0 : this.volume;
            this.soundtracks.forEach((_, i) => {
                const audio = this.$refs[`audio${i}`][0];
                if (audio) {
                    audio.volume = volumeToSet;
                }
            });
        },
        formatTime(seconds) {
            if (!seconds || isNaN(seconds)) return '0:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
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

/* Soundtrack Section */
.soundtrack-section {
    background-color: rgba(25, 25, 35, 0.9);
    border: 1px solid rgba(130, 200, 255, 0.3);
    padding: 2em;
}

.section-title {
    color: #82c8ff;
    margin-bottom: 1.5em;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.05em;
}

.soundtrack-player {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(15, 15, 25, 0.7);
    border: 1px solid rgba(130, 200, 255, 0.3);
    border-radius: 12px;
    padding: 2em;
}

.track-item {
    padding: 1.25em 0;
    display: flex;
    flex-direction: column;
    gap: 0.75em;
    transition: all 0.3s ease;
    border-bottom: 1px solid rgba(130, 200, 255, 0.15);
}

.track-item:last-child {
    border-bottom: none;
}

.track-item.now-playing {
    background: rgba(25, 35, 45, 0.5);
    padding: 1.25em;
    margin: 0 -1em;
    border-radius: 8px;
    border-bottom: 1px solid rgba(130, 200, 255, 0.15);
}

.track-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75em;
}

.track-title {
    color: #82c8ff;
    font-size: 1.1em;
    font-weight: 600;
}

.track-duration {
    color: #7a9fc4;
    font-size: 0.9em;
}

.playing-indicator {
    color: #82c8ff;
    margin-right: 0.5em;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

/* Custom Audio Player Controls */
.custom-controls {
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 0.5em 0;
}

.control-btn {
    background: rgba(130, 200, 255, 0.15);
    border: 1px solid rgba(130, 200, 255, 0.3);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1.2em;
    color: #82c8ff;
    flex-shrink: 0;
}

.control-btn:hover {
    background: rgba(130, 200, 255, 0.25);
    border-color: rgba(130, 200, 255, 0.5);
    box-shadow: 0 0 10px rgba(130, 200, 255, 0.3);
}

.play-pause-btn {
    width: 45px;
    height: 45px;
}

.progress-container {
    flex: 1;
    cursor: pointer;
    padding: 0.5em 0;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(130, 200, 255, 0.2);
    border-radius: 3px;
    overflow: hidden;
    position: relative;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #82c8ff, #5a9fcf);
    border-radius: 3px;
    transition: width 0.1s linear;
}

.time-display {
    display: flex;
    align-items: center;
    gap: 0.5em;
    color: #82c8ff;
    font-size: 0.85em;
    font-variant-numeric: tabular-nums;
    min-width: 90px;
}

.separator {
    color: #5a7f9f;
}

.volume-container {
    display: flex;
    align-items: center;
    gap: 0.5em;
}

.volume-btn {
    width: 35px;
    height: 35px;
    font-size: 1em;
}

.volume-slider {
    width: 80px;
    height: 4px;
    -webkit-appearance: none;
    background: rgba(130, 200, 255, 0.2);
    border-radius: 2px;
    outline: none;
}

.volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    background: #82c8ff;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.volume-slider::-webkit-slider-thumb:hover {
    background: #a0d8ff;
    box-shadow: 0 0 8px rgba(130, 200, 255, 0.6);
}

.volume-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    background: #82c8ff;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
}

.volume-slider::-moz-range-thumb:hover {
    background: #a0d8ff;
    box-shadow: 0 0 8px rgba(130, 200, 255, 0.6);
}

@media screen and (max-width: 700px) {
    .custom-controls {
        flex-wrap: wrap;
    }

    .volume-container {
        order: 3;
        flex-basis: 100%;
        justify-content: center;
        margin-top: 0.5em;
    }

    .volume-slider {
        flex: 1;
        max-width: 200px;
    }
}

.info-item {
    color: #b0b0b0;
    font-size: 1.2em;
}

.info-item strong {
    color: #82c8ff;
}

.status-badge {
    color: #b0b0b0;
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
