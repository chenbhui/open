import request from "./request";

// export const GetPosts = () => request.get('posts/1')

// export const GetsearchData = (params) => request.get('/list', { params })

/*  用户模块 */
// 登录
export const Login = (params) => request.post('/api/login', params);
// 注册
export const Register = (params) => request.post('/api/register', params);
/* knowledge模块  */
//New获取
export const getNew = () => request.get('/knowledge/News');
// Books获取
export const getBook = (params) => request.post('/knowledge/Books', params);