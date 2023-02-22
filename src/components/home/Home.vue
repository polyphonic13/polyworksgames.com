<template>
    <div class="home screen">
        <img
            class="large-logo"
            src="../../assets/images/polyworks-logo-gradient-dark-2048x2048.png"
        >
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {};
    },
};
</script>
<style scoped>
.large-logo {
    width: 512px;
    height: 512px;
    padding: 32px;
    align-self: center;
}

@media screen and (max-width: 700px) {
    .large-logo {
        width: 364px;
        height: 364px;
        padding: 16px;
    }
}
</style>
