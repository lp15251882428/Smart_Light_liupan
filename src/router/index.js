import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 登录
const LogIn = resolve => require(['../pages/LogIn.vue'], resolve)
// 数据统计
const DataCount = resolve => require(['../pages/Count/DataCount.vue'], resolve)
// 虚拟城区
const VirtualBlock = resolve => require(['../pages/City/VirtualBlock.vue'], resolve)
// 路灯管控
const Light = resolve => require(['../pages/Control/Light.vue'], resolve)
const LightControl = resolve => require(['../pages/Control/LightControl.vue'], resolve)
const ControlStrategy = resolve => require(['../pages/Control/ControlStrategy.vue'], resolve)
const LedList = resolve => require(['../pages/Control/LedList.vue'], resolve)
const Warning = resolve => require(['../pages/Control/Warning.vue'], resolve)
// 信息发布
const NewMessage = resolve => require(['../pages/Release/NewMessage.vue'], resolve)
// 系统管理
const System = resolve => require(['../pages/System/System.vue'], resolve)
const Personal = resolve => require(['../pages/System/Personal.vue'], resolve)
const Subuser = resolve => require(['../pages/System/Subuser.vue'], resolve)
const Notice = resolve => require(['../pages/System/Notice.vue'], resolve)
const Log = resolve => require(['../pages/System/Log.vue'], resolve)

let routes = [
  // 登录
  { name: 'LogIn', path: '/login', component: LogIn },
  // 数据统计
  { name: 'DataCount', path: '/datacount', component: DataCount },
  // 虚拟城区
  { name: 'VirtualBlock', path: '/virtualblock', component: VirtualBlock },
  // 路灯管控
  // { name: 'LightControl', path: '/light', component: LightControl },
  // { name: 'ControlStrategy', path: '/light/control', component: ControlStrategy },
  // { name: 'LedList', path: '/light/led-list', component: LedList },
  // { name: 'Warning', path: '/light/warning', component: Warning },
  {
    name: 'Light',
    path: '/light',
    component: Light,
    children: [
      {
        name: 'LightControl',
        path: 'lightcontrol',
        component: LightControl
      },
      {
        name: 'ControlStrategy',
        path: 'control',
        component: ControlStrategy
      },
      {
        name: 'LedList',
        path: 'led-list',
        component: LedList
      },
      {
        name: 'Warning',
        path: 'warning',
        component: Warning
      }
    ]
  },
  // 信息发布
  { name: 'NewMessage', path: '/newmessage', component: NewMessage },
  // 系统管理
  { name: 'System',
    path: '/system',
    component: System,
    children: [
      {
        name: 'Personal',
        path: 'personal',
        component: Personal
      },
      {
        name: 'Subuser',
        path: 'subuser',
        component: Subuser
      },
      {
        name: 'Notice',
        path: 'notice',
        component: Notice
      },
      {
        name: 'Log',
        path: 'log',
        component: Log
      }
    ]
  }
]

let router = new Router({
  routes: routes
})

// router.beforeEach((to, from, next) => {
//   // 打开新页面时，滚动到页面顶部
//   window.scrollTo(0, 0)
//   // 判断非登录页面，是否已登录
//   let token = window.sessionStorage.getItem('token')
//   if (!token || token === 'null') {
//     if (to.name !== 'LogIn') {
//       return next({
//         name: 'LogIn'
//       })
//     }
//   }
//   next()
// })

export default router
