<template>
    <div class="robots screen scrolling-screen">
        <h1 class="brandon title text-xxl">I O T</h1>

        <div class="main">
            <section class="intro-section">
                <p class="text-lg">
                    Building intelligent systems that bridge the digital and physical worlds. From smart home automation
                    to robotic assistants, we're exploring how technology can make everyday life more intuitive and connected.
                </p>
            </section>

            <section class="project-section polyhome-section">
                <h2 class="text-xl section-title">Polyhome</h2>
                <div class="project-content">
                    <p class="text-lg">
                        <strong>Polyhome</strong> is our comprehensive smart home platform designed for seamless automation
                        and control. Unlike typical smart home systems that rely on cloud services and third-party integrations,
                        Polyhome emphasizes local control, privacy, and reliability.
                    </p>
                    <div class="features-grid">
                        <div class="feature-item">
                            <h3 class="feature-title">Local-First Architecture</h3>
                            <p>Runs on your network without requiring cloud connectivity. Your data stays yours.</p>
                        </div>
                        <div class="feature-item">
                            <h3 class="feature-title">Unified Control</h3>
                            <p>Manage lights, climate, security, and more from a single, intuitive interface.</p>
                        </div>
                        <div class="feature-item">
                            <h3 class="feature-title">Automation Engine</h3>
                            <p>Create complex routines and rules that respond intelligently to your patterns and preferences.</p>
                        </div>
                        <div class="feature-item">
                            <h3 class="feature-title">Open Integration</h3>
                            <p>Works with standard protocols and devices—no proprietary lock-in required.</p>
                        </div>
                    </div>
                    <p class="text-lg status-note">
                        <strong>Status:</strong> In active development. Core automation and device management features are functional
                        with ongoing work on the mobile interface and advanced scheduling.
                    </p>
                </div>
            </section>

            <section class="project-section polybot-section">
                <h2 class="text-xl section-title">Polybot</h2>
                <div class="project-content">
                    <router-link
                        to="/robots/jorge5000/"
                        class="polybot-link"
                    >
                        <div class="polybot-card">
                            <img
                                class="polybot-logo"
                                :src="polybotLogo"
                                alt="Polybot Jorge 5000"
                            />
                            <div class="polybot-info">
                                <h3 class="polybot-name">Jorge 5000</h3>
                                <p class="text-lg">
                                    <strong>Polybot</strong> is our robotic assistant that integrates with the Polyhome ecosystem.
                                    More than just a smart speaker on wheels, Jorge 5000 is designed to be a physical presence in your
                                    home—capable of monitoring spaces, responding to voice commands, and performing automated tasks.
                                </p>
                                <div class="capabilities">
                                    <div class="capability">Voice interaction and natural language processing</div>
                                    <div class="capability">Autonomous navigation and room awareness</div>
                                    <div class="capability">Environmental monitoring (temperature, air quality, presence detection)</div>
                                    <div class="capability">Integration with Polyhome automation routines</div>
                                </div>
                                <p class="text-lg status-note">
                                    <strong>Status:</strong> Hardware prototype in progress. Developing navigation algorithms
                                    and integration with Polyhome's automation engine.
                                </p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: "RobotsList",
    data() {
        return {
            polybotLogo: require("../../assets/images/robots/jorge5000/logo01.png"),
        };
    },
};
</script>
<style scoped>
.robots {
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

.section-title {
    color: #a0c8e8;
    margin-bottom: 1.5em;
    font-weight: 600;
    letter-spacing: 0.05em;
}

.project-section {
    background: rgba(15, 25, 40, 0.45);
}

.project-content {
    color: #d0e0f0;
}

.project-content p {
    line-height: 1.7;
    margin-bottom: 1.5em;
}

.project-content strong {
    color: #82c8ff;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5em;
    margin: 2em 0;
}

.feature-item {
    background: rgba(10, 20, 35, 0.5);
    padding: 1.5em;
    border-radius: 6px;
    border: 1px solid rgba(70, 110, 150, 0.2);
    transition: all 0.3s ease;
}

.feature-item:hover {
    background: rgba(15, 30, 50, 0.6);
    border-color: rgba(90, 140, 190, 0.4);
    transform: translateY(-2px);
}

.feature-title {
    color: #82c8ff;
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 0.5em;
}

.feature-item p {
    color: #c0d8f0;
    font-size: 0.95em;
    line-height: 1.6;
    margin: 0;
}

.status-note {
    font-style: italic;
    color: #a0c8e8;
    margin-top: 1.5em;
    margin-bottom: 0;
}

.polybot-link {
    text-decoration: none;
    display: block;
}

.polybot-card {
    background: rgba(10, 20, 35, 0.5);
    border: 2px solid rgba(70, 110, 150, 0.2);
    border-radius: 12px;
    padding: 2em;
    display: flex;
    gap: 2em;
    align-items: flex-start;
    transition: all 0.3s ease;
}

.polybot-card:hover {
    background: rgba(15, 30, 50, 0.6);
    border-color: rgba(130, 200, 255, 0.5);
    box-shadow: 0 8px 24px rgba(130, 200, 255, 0.15);
    transform: translateY(-4px);
}

.polybot-logo {
    width: 200px;
    height: 200px;
    object-fit: contain;
    background: #ffffff;
    border-radius: 8px;
    padding: 1em;
    flex-shrink: 0;
}

.polybot-info {
    flex: 1;
}

.polybot-name {
    color: #82c8ff;
    font-size: 1.5em;
    font-weight: 600;
    margin-bottom: 0.5em;
}

.polybot-info p {
    color: #d0e0f0;
    line-height: 1.7;
    margin-bottom: 1em;
}

.capabilities {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75em;
    margin: 1.5em 0;
}

.capability {
    color: #c0d8f0;
    font-size: 0.9em;
    padding: 0.75em 1em;
    background: rgba(5, 15, 30, 0.6);
    border-left: 3px solid rgba(130, 200, 255, 0.4);
    border-radius: 3px;
}

@media screen and (max-width: 900px) {
    .polybot-card {
        flex-direction: column;
        align-items: center;
    }

    .polybot-logo {
        width: 150px;
        height: 150px;
    }
}

@media screen and (max-width: 700px) {
    .main {
        padding: 1em;
    }

    section {
        padding: 1.5em;
        margin-bottom: 2em;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .capabilities {
        grid-template-columns: 1fr;
    }
}
</style>
