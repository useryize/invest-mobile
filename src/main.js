
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './container/index.vue';
import Home from './container/home';
import List from './container/list';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/Home', component: Home, meta: { title: "首页" } },
        { path: '/List', component: List },
        { path: '*', redirect: '/' }
    ]
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
