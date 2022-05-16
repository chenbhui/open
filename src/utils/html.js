import request from "./request";

// export const GetPosts = () => request.get('posts/1')

// export const GetsearchData = (params) => request.get('/list', { params })
// 登录
export const Login = (params) => request.post('/api/login', params)
// 注册
export const Register = (params) => request.post('/api/register', params)