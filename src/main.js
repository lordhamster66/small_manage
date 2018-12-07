import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import './plugins/element-ui'
import './plugins/cookies'
import './plugins/axios'
import './plugins/echarts'

Vue.config.productionTip = false;

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
