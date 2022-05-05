import { createRouter, createWebHistory } from 'vue-router'
//引入路由组件
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Knowledge from '@/pages/Knowlege';
// 配置路由
const routers = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/knowledge',
        component: Knowledge
    },
    //重定向：当项目运行时，首先访问首页
    {
        path: '/',
        redirect: '/home'
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routers
});


export default router;
