import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/dashboard',
    component: Dashboard
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#app');
