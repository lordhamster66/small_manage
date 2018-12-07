export default [
    // 无布局
    {
        path: '/login',
        name: '登录',
        component: () => import('../views/Login.vue')
    },
    // 有布局
    {
        path: '',
        component: () => import('../views/MyApp.vue'),
        children: [
            {
                path: '/',
                name: '首页',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/news',
                name: '实时短讯',
                component: () => import('../views/News.vue')
            },
            {
                path: '/products',
                name: '产品列表',
                component: () => import('../views/ProductList.vue')
            },
            {
                path: '/statics',
                name: '统计页面',
                component: () => import('../views/Statics.vue')
            },
            {
                path: '/about',
                name: '关于',
                component: () => import('../views/About.vue')
            }
        ]
    },
]