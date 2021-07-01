/*
 * @Author: chiLi
 * @Date: 2021-01-02 20:12:02
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 一定记得安装 axios
import axios from 'axios'
Vue.prototype.axios = axios;

// 引用 element 组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


Vue.config.productionTip = false
// 实例 app 对象进行配置 store 对象 
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
