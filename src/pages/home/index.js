import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './index.vue';
import routes from './route';

Vue.use(VueRouter);
const router = new VueRouter({
    routes
});
const app = new Vue({
    router,
    render:h=> h(App)
}).$mount('#app');