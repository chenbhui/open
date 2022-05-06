// 1.创建一个新的axios实例
// 2.请求拦截器，如果有token进行头部携带
// 3.响应拦截器：1.剥离无用数据 2.处理token失效
import axios from 'axios'
import store from '@/store'
import { configure } from 'vee-validate'
import router from '@/router'
// 导出基准地址，原因：其他地方不是用axios发请求的地方用上基准地址
export default baseURL = 'http://127.0.0.1/'
const instance = axios.create({
    // axios的一些配置，baseURL timeout
    baseURL,
    timeout: 5000
})
instance.interceptors.request.use(config => {
    // 拦截业务逻辑
    // 进行请求配置的修改
    // 如果本地有token
    // 1.获取用户信息对象
    const { profile } = store.state.user;
    // 2.判断是否有token
    if (profile.token) {
        // 3.设置token
        config.headers.Authorization = `Bearer ${profile.token}`
    }
    return config
}, err => {
    return Promise.reject(err)
})
// res => res.data，取出data数据
instance.interceptors.response.use(res => res.data, err => {
    // 401
    if (err.response && err.response.status === 401) {
        // 清空无效用户信息，跳转到登录页面，跳转要传参（当前的路由地址）给登录页码
        store.commit('user/setUser', {})
        // 当前路由地址：``
        // 组件里头:$route.fullPath
        // js模块：router.currentRoute.value.fullPath  router.currentRoute是ref响应式，所以要加.value
        // encodeURIComponent转码
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath);
        router.push('./login?redirectUrl=' + fullPath);

    }
})

// 请求工具函数
export default (url, method, submitData) => {
    //负责发请求：请求地址，方式，提交的数据
    return instance({
        url,
        method,
        // 1.如果是get请求，需要用params传递
        // 如果不是get，需要用data传递
        // 设置一个动态的key，写js表达式，js表达式的执行结果当作KEY
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}
