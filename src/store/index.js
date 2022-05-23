import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
// 模块
import user from './modules/user'
// 创建仓库
export default createStore({
    state: {
        //存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
    },
    mutations: {
        // 修改token
        changeLogin(state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        }
    },
    actions: {

    },
    modules: {
        user,
    },
    // 配置插件
    plugins: [
        // 默认存储在localStorage
        createPersistedState({
            // 本地存储名字
            key: 'client-pc-124-store',
            // 指定需要存储的模块
            paths: ['user']
        })
    ]
})