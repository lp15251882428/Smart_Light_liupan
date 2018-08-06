// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style.css'
import LeftNav from './components/LeftNav'
import LeftNav2 from './components/LeftNav2'
import config from './config'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('leftnav', LeftNav)
Vue.component('leftnav2', LeftNav2)

// 配置网络请求

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.defaults.baseURL = Vue.HOST_SITE

// 配置应用全局方法与变量
Vue.use(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
