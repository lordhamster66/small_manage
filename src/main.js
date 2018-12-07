import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element-ui'
import './plugins/cookies'
import './plugins/axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false;

// 导航守卫设置
router.beforeEach((to, from, next) => {
    // 顶部进度条
    NProgress.start();
    next();
});
// 导航结束之后做一些收尾工作
router.afterEach(() => {
    NProgress.done();
});

new Vue({
    store,
    router,
    render: h => h(App),
    watch: {
        //监听路由变化
        "$route": ['checkLogin', 'updateMenu']  // 路由信息发生变化时检测登录状态以及更新菜单和面包屑
    },
    methods: {
        checkLogin() {
            const userInfo = this.$cookies.get('userInfo');  // 从cookie中获取用户信息
            if (userInfo) {
                this.$store.dispatch('updateUserInfo', userInfo)
            } else {
                this.$router.push('/login');
                this.$message.warning('请登录！');
            }
        },
        updateMenu() {

        }
    }
}).$mount('#app');
