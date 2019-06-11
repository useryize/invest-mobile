<template>
    <div class="box">{{homeData}}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
    data: () => ({
    }),
    created () {},
    computed: {
        ...mapState(["storeData"]),
        homeData () {
            return this.storeData;
        }
    },
    methods: {},
    components: {},
    filters: {},
    updated: {},
    beforeDestroy: {}
};
</script>
<style lang="less" scoped>
@import "./home.less";
</style>
