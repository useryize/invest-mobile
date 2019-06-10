import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../Home/index.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
      { path: '/Home', component: Home },
      { path: '*', redirect: '/' }
  ]
});

export default router;
