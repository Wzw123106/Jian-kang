/*
 * @Author: chiLi
 * @Date: 2021-01-02 20:12:02
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 教师端
import denglu from '../views/denglu.vue'
import teacher from '../components/teacher.vue'
import zhuce from '../views/zhuce.vue'
import teadd from '../views/teadd.vue'
import tecenter from '../views/tecenter.vue'
import telook from '../views/telook.vue'
import teguanli from '../views/tegunali.vue'
import testu from '../views/testu.vue'

// 管理员端
import boss from '../components/boss.vue'
import bosstux from '../views/bosstux.vue'
import bossteacher from '../views/bossteacher.vue'
import bosspinces from '../views/bosspinces.vue'
import bosscj from '../views/bosscj.vue'
import bossst from '../views/bossst.vue'
import bossdenglu from '../views/bossdenglu.vue'


// 学生端
import student from '../components/student.vue'
import stuone from '../views/stuone.vue'
import stuthree from '../views/stuthree..vue'
import stutwo from '../views/stutwo.vue'
import stufor from '../views/stufor.vue'
import stuces from '../views/stuces.vue'
import studenlu from '../views/studenlu.vue'
import stuzhuc from '../views/stuzhuc.vue'
import stuxiugai from '../views/stuxiugai.vue'
import stuck from '../views/stuck.vue'

Vue.use(VueRouter)

const routes = [
  // 教师端路由
  {
    path:'/teacher',
    name:'teacher',
    component:teacher,
    redirect: '/',
    children: [
      {
        path:'/',
        name:tecenter,
        component:tecenter
      },
      {
        path:'teadd',
        name:teadd,
        component:teadd
      },
      {
        path:'telook',
        name:telook,
        component:telook
      },
      {
        path:'teguanli',
        name:teguanli,
        component:teguanli
      },
      {
        path:'testu',
        name:testu,
        component:testu
      }
    ]
  },
  // 教师端登录路由
  {
    path:'/teacher/denglu',
    name:'denglu',
    component:denglu
  },
  // 教师端注册路由
  {
    path:'/teacher/zhuce',
    name:'zhuce',
    component:zhuce
  },

  // 管理员端路由
  {
    path:'/boss',
    name:'boss',
    component:boss,
    children:[
      // 学生信息管理
      {
        path:'bosstux',
        name:bosstux,
        component:bosstux
      },
      // 教师信息管理
      {
        path:'bossteacher',
        name:bossteacher,
        component:bossteacher
      },
      // 评测信息管理
      {
        path:'bosspinces',
        name:bosspinces,
        component:bosspinces
      },
      // 成绩信息管理
      {
        path:'bosscj',
        name:bosscj,
        component:bosscj
      },
      // 试题信息管理
      {
        path:'bossst',
        name:bossst,
        component:bossst
      },
    ]
  },
  // 管理员端登录路由
  {
    path:'/boss/denglu',
    name:'bossdenglu',
    component:bossdenglu
  },


  // 学生端路由
  {
    path:'/',
    name:'student',
    component:student,
    children: [
      // 首页内容1
      {
      path:'stuone',
      name:stuone,
      component:stuone
      },
      // 首页内容2
      {
        path:'stuthree',
        name:stuthree,
        component:stuthree
      },    
        // 首页内容3
      {
        path:'stutwo',
        name:stutwo,
        component:stutwo
      },       
       // 首页内容4
      {
        path:'stufor',
        name:stufor,
        component:stufor
      },
        //心理测试 
      {
        path:'stuces',
        name:stuces,
        component:stuces
      },
        // 修改个人资料
      {
        path:'stuxiugai',
        name:stuxiugai,
        component:stuxiugai
      },       
       // 查看个人成绩
      {
        path:'stuck',
        name:stuck,
        component:stuck
      } 
        

      
    ]
  },

  //学生端登录
  {
    path:'/studenlu',
    name:'studenlu',
    component:studenlu,
  },

    //学生端注册
  {
      path:'/stuzhuc',
      name:'stuzhuc',
      component:stuzhuc,
  },

  
]

const router = new VueRouter({
  routes
})

export default router
