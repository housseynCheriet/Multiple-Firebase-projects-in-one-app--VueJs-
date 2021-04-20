// /src/routes.js


//component: () => import('@/component/A.vue'),

//import Home from '@/components/Home'
//import Login from '@/components/Login'
//import Register from '@/components/Register'
//import Page1 from '@/components/Page1'
//import Page2 from '@/components/Page2'
import App2 from '@/components/App2'

//import Dashboard from '@/components/Dashboard'
import rouutes from './rouutes'
import childLogin from './ChildrenLogin'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
 
export default new VueRouter({
  mode: 'history',
  routes:[
   {
      path: '*',
      redirect: '/'
   }/*,{
      path: '*',
      redirect: '/login'
   },{
      path: '/',
      name: 'Home',
      component: Home
   },{
      path: '/login',
      name: 'login',
      component: Login
   },{
      path: '/register',
      name: 'registe',
      component: Register
   },{
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
         requiresAuth: true
      }
   }*/,{
      path: '/hahahaahaahaaha',
   children: rouutes
   }




   ,
   {
      //path: '/app2/:uid',
      path: '/app2',
      name: 'Home1',
      component: App2,
       
    children: childLogin
   },{
      path: '/login/app2',
      name: 'logreg1',
      component: App2,
      children: childLogin
   },{
      path: '/dashboard/app2',
      name: 'Dashboard1',
      component: App2,
       
    children: childLogin,
      meta: {
         requiresAuth: true
      }
   }
]
})