import Vue from 'vue'

// 登录
export const login = data => Vue.axios.post(
    '/api/accounts/login/', data
);

// 获取新闻列表
export const getNews = params => Vue.axios.get(
    '/api/materials/newsflashmaterial/?ordering=-create_time', {params: params}
);