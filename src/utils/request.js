// 简易版

import axios from "axios";

const service = axios.create({
    baseURL: 'http://127.0.0.1/',
    timeout: 50000,
})

// 请求拦截器
service.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)  //返回错误
})

// 响应拦截器
service.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)  //返回错误
})


export default service
