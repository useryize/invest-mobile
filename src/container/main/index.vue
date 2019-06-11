<template>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</template>

<script>
export default {
    created () {
        let title = (this.$route && this.$route.meta && this.$route.meta.title) || "wapApp";
        document.title = title;
    }
};
</script>
<style lang="less">
 @import './main.less';
</style>
