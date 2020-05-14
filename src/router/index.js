/**
 * 路由配置(主路由直接引入，其他路由必须懒加载)
 */
import Vue from 'vue';
import Router from 'vue-router';

// 主容器组件
import Layout from '../layout';

const Dashboard = ()=>import("@/views/dashboard")
// 路由集合
const routes = [
  {
    path: '/',
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
  {
    path: '*',
    redirect: '/'
  }
];

Vue.use(Router);
export default new Router({
  // mode: 'history',
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes
});
