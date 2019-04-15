import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// @ is an alias to /src  @是/src的别名，等价于/src
import Page1 from '@/views/Page1.vue';
import Page2 from '@/views/Page2.vue';
import Login from '@/views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';

Vue.use(Router)

function func({ params, query }) {
  return {
    id: params.id,
    msg: params.msg,
    foo: query.foo
  }
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: { foo: "static" }// 给组件传静态值
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      redirect:'/dashboard/page1/1/Lily',
      children: [
        {
          path: 'page1/:id/:msg',
          name: 'page1',
          component: Page1,
          props: true,// 将route.params中的参数做为属性传递
        },
        {
          path: 'page2/:id/:msg',
          name: 'page2',
          component: Page2,
          props: func
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
