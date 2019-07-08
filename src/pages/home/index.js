import Vue from 'vue';
import App from './index.vue';
const app = new Vue({
    render:h=> h(App)
}).$mount('#app');