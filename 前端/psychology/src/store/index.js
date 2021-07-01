/*
 * @Author: chiLi
 * @Date: 2021-01-02 20:12:02
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建整个项目的的数据仓库对象，将多组件公用的数据放置到此对象里
export default new Vuex.Store({
  // 公用数据，用户的头像和姓名
  state: {
    name:"",
    tx:"",
    stus:"",
    pcs:"",
    stes:"",
    bossname:"",
    hi:"Hi！你好",
    dl:"请登录!",

    // 保存 id
    id:"",
    // 保存 密码
    pa:""

  },
  // methods
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
