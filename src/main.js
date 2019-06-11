import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import VueRouter from 'vue-router';
import storeData from './store';
import App from './container/main';
import Home from './container/home';
import List from './container/list';
import 'lib-flexible';

// Vue.config.productionTip = false;
// 生产禁止debug
const debug = process.env.NODE_ENV !== 'production';

// 注册vuex
typeof window.Vue !== 'function' && Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        storeData
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
window.__store = store;

// 注册路由
Vue.use(VueRouter);

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
    store,
    render: h => h(App)
});
