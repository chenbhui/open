import { createRouter, createWebHistory } from 'vue-router'
//引入路由组件
import Home from '@/pages/Home';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Knowledge from '@/pages/Knowlege';
import Chatroom from '@/pages/Chatroom';
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
    {
        path: '/chatroom',
        component: Chatroom
    },
    //重定向：当项目运行时，首先访问首页
    {
        path: '/',
        redirect: '/home'
    },
];
const router = createRouter({
    // 使用hash的路由模式
    history: createWebHistory(process.env.BASE_URL),
    routes: routers
});
/*
保存登录状态！！！
通过使用导航守卫的全局前置守卫来实现保持登录状态下，用户重新访问页面时直接进入主页，无需再次登录。
大致语法如下：
router.beforeEach((to,from,next)=>{
//这里执行具体操作
//next调用
})
*/
router.beforeEach((to, from, next) => {
    // 登陆注册页面可以直接加入，主页面需要分情况
    if (to.path == '/login') {
        next();
    } else {
        let userId = sessionStorage.getItem('userId');
        console.log(JSON.stringify(userId));
        if (userId === null || userId === '') {
            // 没有userId
            console.log("userId=== null || userId === ''");
            next('./login');
        } else {
            next();
        }
    }
})


export default router;
