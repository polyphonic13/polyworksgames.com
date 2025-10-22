<template>
    <div class="about screen scrolling-screen">
        <h1 class="brandon title text-xxl">A B O U T</h1>

        <div class="main">
            <section class="intro-section">
                <h2 class="text-xl section-title">Who We Are</h2>
                <p class="text-lg">
                    Polyworks is an independent software and hardware development company focused on creating
                    experiences that matter. We build games, tools, and smart systems that bring something
                    positive into people's lives—whether that's entertainment, utility, or just a moment of wonder.
                </p>
            </section>

            <section class="content-section">
                <h2 class="text-xl section-title">Our Focus Areas</h2>
                <div class="focus-grid">
                    <div class="focus-item">
                        <h3 class="text-lg focus-title">Polyworks Games</h3>
                        <p>
                            Creating immersive gaming experiences across mobile, desktop, and VR platforms.
                            From fast-paced arcade action to deep narrative RPGs, we explore diverse genres
                            and push creative boundaries.
                        </p>
                    </div>
                    <div class="focus-item">
                        <h3 class="text-lg focus-title">IoT & Smart Home</h3>
                        <p>
                            Developing intelligent home automation solutions that simplify daily life.
                            We believe smart technology should be intuitive, reliable, and genuinely useful—not
                            just connected for the sake of it.
                        </p>
                    </div>
                    <div class="focus-item">
                        <h3 class="text-lg focus-title">Robotics</h3>
                        <p>
                            Exploring the intersection of hardware and software through robotics projects.
                            From home assistants to experimental automation, we're interested in what happens
                            when code meets the physical world.
                        </p>
                    </div>
                </div>
            </section>

            <section class="content-section philosophy-section">
                <h2 class="text-xl section-title">Our Approach</h2>
                <p class="text-lg">
                    We're a small team that values quality over quantity. Every project we take on is something
                    we're genuinely excited about—whether it's a niche indie game or an experimental hardware prototype.
                    We believe the best work comes from passion and curiosity, not from following trends or chasing
                    metrics.
                </p>
                <p class="text-lg">
                    Our development philosophy is simple: build things we'd want to use ourselves, iterate based on
                    real feedback, and never ship something we're not proud of. We take risks on unconventional ideas
                    and learn from every experiment.
                </p>
            </section>

            <section class="content-section">
                <h2 class="text-xl section-title">What We're Working On</h2>
                <p class="text-lg">
                    Currently in development is <strong>FALLEN METAL</strong>, an ambitious desktop RPG set in a
                    cyberpunk noir universe. In parallel, we're building <strong>Polyhome</strong>, our IoT smart home
                    platform, which includes the <strong>Polybot</strong> assistance robot—bringing intelligent automation
                    into the physical world.
                </p>
                <p class="text-lg">
                    Each project teaches us something new, and we're always excited to see where the next idea leads.
                </p>
            </section>

        </div>
    </div>
</template>
<script>
export default {
    name: "About",
};
</script>
<style scoped>
.about {
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
}

.section-title {
    color: #a0c8e8;
    margin-bottom: 1em;
    font-weight: 600;
    letter-spacing: 0.05em;
}

.content-section p {
    line-height: 1.7;
    margin-bottom: 1em;
    color: #d0e0f0;
}

.content-section p:last-child {
    margin-bottom: 0;
}

.focus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2em;
    margin-top: 1.5em;
}

.focus-item {
    background: rgba(10, 20, 35, 0.5);
    padding: 1.5em;
    border-radius: 6px;
    border: 1px solid rgba(70, 110, 150, 0.2);
    transition: all 0.3s ease;
}

.focus-item:hover {
    background: rgba(15, 30, 50, 0.6);
    border-color: rgba(90, 140, 190, 0.4);
    transform: translateY(-2px);
}

.focus-title {
    color: #82c8ff;
    margin-bottom: 0.75em;
    font-weight: 600;
}

.focus-item p {
    color: #c0d8f0;
    line-height: 1.6;
    font-size: 0.95em;
}

.philosophy-section {
    background: rgba(25, 40, 60, 0.45);
}

.contact-section {
    background: rgba(15, 25, 40, 0.5);
    border: 1px solid rgba(130, 200, 255, 0.2);
}

.contact-section strong {
    color: #82c8ff;
}

@media screen and (max-width: 700px) {
    .main {
        padding: 1em;
    }

    section {
        padding: 1.5em;
        margin-bottom: 2em;
    }

    .focus-grid {
        grid-template-columns: 1fr;
        gap: 1.5em;
    }
}
</style>
