import Vue from 'vue'
import Router from 'vue-router'


//一级路由
import Home from '@/components/Home';
import Admin from '@/components/Admin';
import Login from '@/components/Login';
import About from '@/components/About';
import Registe from '@/components/Registe';
import Menu from '@/components/Menu';

//二级路由
import Active from '@/components/about/Active';
import Contace from '@/components/about/Contact';
import Express from '@/components/about/Express';
import History from '@/components/about/History';

//三级路由
import Address from '@/components/about/contact/Address';
import Legal from '@/components/about/contact/Legal';
import Telephone from '@/components/about/contact/Telephone';




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/about',
      name:'About',
      component:About,
      //默认跳转contact页面
      redirect:'/contact',
      children:[
        {
          path:'/contact',
          name:'Contact',
          component:Contace,
          redirect:'/contact/address',
          children:[
            {
              path:'/contact/address',
              name:'Address',
              component:Address
            },
            {
              path:'/contact/legal',
              name:'Legal',
              component:Legal
            },{
              path:'/contact/telephone',
              name:'Telephone',
              component:Telephone
            }
          ]
        },
        {
          path:'/active',
          name:'Active',
          component:Active
        },
        {
          path:'/express',
          name:'Express',
          component:Express
        },
        {
          path:'/history',
          name:'History',
          component:History
        }
      ]
    },
    {
      path:'/registe',
      name:'Registe',
      component:Registe
    },
    {
      path:'/menu',
      name:'Menu',
      components:Menu
    }
  ],
  mode:'history'
})
