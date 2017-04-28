
import 'normalize.css';
import 'babel-polyfill';

import Vue from 'vue';
import router from './router';
// import app from './app.vue';
import store from './vuex';

/* new Vue({
    el: '#app',
    router,
    store,
    render: h => h(app)
}); */

new Vue({
    router,
    store
}).$mount('#app');
