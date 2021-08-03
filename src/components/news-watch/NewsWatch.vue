<template>
</template>
<script>
export default {
    name: "NewsWatch",
    created() {
        var ua = navigator.userAgent.toLowerCase();

        if (ua.match(/iphone|ipad/i)) {
            window.location.replace(
                "https://apps.apple.com/us/app/rickle/id1560862955"
            );
            return;
        }

        if (ua.match(/android/i)) {
            window.location.replace(
                "https://play.google.com/store/apps/details?id=com.polyworksgames.Rickle"
            );
            return;
        }

        window.location.replace("http://www.polyworksgames.com/games/rickle");
    },
};
</script>
<style scoped>
</style>
