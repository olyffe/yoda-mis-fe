import Vue from 'vue';
import Router from 'vue-router';
import App from '../App.vue';

const Inter = r => require.ensure([],
    () => r(require('../components/interface')),
     'Inter');
const home = r => require.ensure([],
    () => r(require('../components/home')),
     'home');

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: App,
        // 顶级路由
        children: [
        // 二级路由
            {
                path: '',
                redirect: '/home'
            },
            {
                path: '/home',
                component: home
            },
            {
                path: '/interface',
                component: Inter
            }]
    }]
});
