/**
 * 路由配置(主路由直接引入，其他路由必须懒加载)
 */
import Vue from 'vue';
import Router from 'vue-router';

// 主容器组件
const Layout = () => import('../layout');
const Dashboard = () => import('views/dashboard/index');
const Login = () => import('views/Login');
const Register = () => import('views/Register');
const Error404 = () => import('views/404');
// const Hello = () => import('views/Hello');

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/layout',
    name: 'root',
    component: Layout,
    // 子模块的路由注册
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      }
    ]
  },
  // {
  //   path: '/hello',
  //   name: 'hello',
  //   component: Hello
  // },
  {
    path: '*',
    name: 'error',
    component: Error404
  }
];

// router.beforeEach((to, from, next) => {
// //获取store里面的token
// let token = this.$store.state.token;
// //判断要去的路由有没有requiresAuth
// if (to.meta.requiresAuth) {
//   if (token) {
//     next();
//   } else {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//     });
//   }
// } else {
//   next(); //如果无需token,那么随它去吧
// }
// });

Vue.use(Router);
export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
});
