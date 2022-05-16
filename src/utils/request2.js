// request函数封装

/*
1.创建一个新的axios实例
2.请求拦截器，如果有token进行头部携带
3.响应拦截器:1.剥离无效数据 2.处理token失效
4.导出一个函数，调用当前的axsio实例发请求，返回值promise
 */
import axios from "axios";
import store from '@/store'
import router from "@/router";
// 导出基准地址，原因:其他地方不是通过axios发请求的地方用上基准地址
export const baseURL = 'http://127.0.0.1/';
const instance = axios.create({
    baseURL,
    timeout: 50000,
})

// 请求拦截器
instance.interceptors.request.use(config => {
    /* 
    拦截业务逻辑
    进行请求配置的修改
    如果本地又token就在头部携带
    */
    // 1.获取用户信息对象
    const { profile } = store.state.user
    // 2.判断是否有token
    if (profile.token) {
        //3.设置token
        config.headers.Authorization = `Bearer &{profile.token}`
    }
    return config
}, err => {
    return Promise.reject(err)  //返回错误
})

// 响应拦截器
// res=>res.data 取出res.data的数据，将来调用接口的时候直接拿到的就是后台的数据
instance.interceptors.response.use(res => res.data, err => {
    // 401状态码，进入该函数
    if (err.response && err.response.status === 401) {
        /*  1.清空无效用户信息
         2.跳转到登录页
         3.跳转需要传参(当前路由地址)给登录页码 */
        store.commit('user/setUser', {})
        /* 当前路由地址
        组件里头: `/user?a=10`$route.path === /user $route.fullPath === /user ? a = 10
        js模块中: router.currentRoute.value.fullPath就是当前地址   router.currentRoute是ref响应式，所以要有value
        */
        // 转成编码，是因为URL中有些字符会引起歧义。encodeURIComponen
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)  //返回错误
})
// 请求工具函数
export default (url, method, submitData) => {
    // 负责发请求：请求地址，请求方式，请求数据
    /* 
    1.如果是get请求 需要使用params来传递submitData
    2.如果不是get请求 需要使用data来传递submitData
    []设置一个动态的key，写js表达式，js表达式的执行结果当作KEY
    method参数: get，Get, GET 转换成消息再来判断 
    */
    return instance({
        url,
        method,
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData,
    })
}
