<template>
    <div class="home screen">
        <img
            class="large-logo"
            src="../../assets/images/polyworks-icon-gradient-dark-xl.png"
        >
        <span class="polyworks">P O L Y W O R K S</span>

    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {};
    }
};
</script>
<style scoped>
.polyworks {
    font-family: brandon-grotesque, sans-serif;
    font-weight: 900;
    font-style: normal;
    font-size: 1.5em;
}

.large-logo {
    width: 256px;
    height: 256px;
    padding: 16px;
}
</style>
