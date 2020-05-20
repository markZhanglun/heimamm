import Vue from 'vue'
// 导入路由插件
import VueRouter from 'vue-router'
// 导入路由组件
import layout from '../views/layout'
import login from '../views/login'
import father from '../test1/father'
import son from '../test1/son'
// 导入token
import { getToken } from '../util/token'

// import layout from '../'
// 注册路由
Vue.use(VueRouter);
// 实例化路由
let router = new VueRouter({
    routes: [
        {
            path: '/',
            component: login
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/layout',
            component: layout
        },
        {
            path: '/father',
            component: father
        },
        {
            path: '/son',
            component: son
        },

        {
            // 路由重定向
            path: '*',
            redirect: '/'
        },
        // 测试插槽

    ]
});
// 全局导航守卫
router.beforeEach((to, from, next) => {
    if (to.fullPath == '/login') {
        next();
    } else {
        // 判断是否登录
        const token = getToken();
        if (token) {
            next();
        } else {
            console.log('token没有，请登录');
            next('/login');

        }
    }

})
//暴露出去
export default router;
