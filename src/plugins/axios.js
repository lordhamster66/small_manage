import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from '../store'

Vue.use(VueAxios, axios);

// base url
// Vue.axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5c09d6bdadfd15165c9cba44';

// 请求超时时间
Vue.axios.defaults.timeout = 10000;

// 请求拦截器
Vue.axios.interceptors.request.use(
    config => {
        // 设置登录验证token
        const token = store.state.userInfo.Authorization;
        if (token) {
            config.headers.Authorization = token;
        }
        // 设置csrftoken
        const csrftoken = Vue.cookies.get('csrftoken');
        if (csrftoken) {
            config.headers['X-CSRFTOKEN'] = csrftoken;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    });


// 响应拦截器
Vue.axios.interceptors.response.use(
    // 请求成功
    res => Promise.resolve(res)
    ,
    // 请求失败
    error => {
        // 请求已发出，但是不在2xx的范围
        return Promise.reject(error);
    });
