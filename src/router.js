import Vue from 'vue'
import Router from 'vue-router'
import MyApp from './views/MyApp.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: '登录',
            component: () => import('./views/Login.vue')
        },
        {
            path: '',
            component: MyApp,
            children: [
                {
                    path: '/',
                    name: '首页',
                    component: () => import('./views/Home.vue')
                },
                {
                    path: '/about',
                    name: '关于',
                    component: () => import('./views/About.vue')
                }
            ]
        },
    ]
})
