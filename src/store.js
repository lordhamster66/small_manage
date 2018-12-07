import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: {
            username: "",  // 用户名
            Authorization: "",  // 用户登录的验证Token
        },
        activeMenuIndex: "/",  // 激活的菜单index
        menuIndexList: [],  // 面包屑对应的菜单index列表
    },
    mutations: {
        // 更新激活的菜单index
        updateActiveMenuIndex(state, index) {
            state.activeMenuIndex = index
        },
        // 更新菜单index列表
        updateMenuIndexList(state, currentMenuIndexList) {
            state.menuIndexList = currentMenuIndexList
        },
        // 更新用户信息
        updateUserInfo(state, userInfo) {
            state.userInfo.Authorization = userInfo.Authorization;
            state.userInfo.username = userInfo.username;
        }
    },
    actions: {
        updateActiveMenuIndex({commit}, index) {
            commit('updateActiveMenuIndex', index)
        },
        updateMenuIndexList({commit}, currentMenuIndexList) {
            commit('updateMenuIndexList', currentMenuIndexList)
        },
        updateUserInfo({commit}, userInfo) {
            commit('updateUserInfo', userInfo)
        }
    },
})
