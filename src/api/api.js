import Vue from 'vue'

// 登录
export const login = data => Vue.axios.post(
    '/api/accounts/login/', data
);

// 获取新闻列表
export const getNews = params => Vue.axios.get(
    '/api/materials/newsflashmaterial/?ordering=-create_time', {params: params}
);

// 获取筛选字段
export const filterFields = params => Vue.axios.get(
    '/api/products/filter-fields/', {params: params}
);

// 获取独一产品列表
export const getUniqueList = params => Vue.axios.get(
    '/api/products/unique/', {params: params}
);
