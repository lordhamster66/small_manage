import Vue from 'vue'
import Router from 'vue-router'
import routes from "./routes"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
});

// 导航守卫设置
router.beforeEach((to, from, next) => {
    // 顶部进度条
    NProgress.start();  // 进度条开始
    next();  // 必须执行next，不然无法加载界面
});
// 导航结束之后做一些收尾工作
router.afterEach(() => {
    NProgress.done();  // 结束进度条
});

export default router
