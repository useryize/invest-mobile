import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
      { path: '/', component: app },
      { path: '*', redirect: '/' }
  ]
});

export default new Router({
  mode: 'history',
  routes: []
});
