<!--
 * @Author: chiLi
 * @Date: 2021-01-03 17:03:21
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div>
     <div class="min">
         <div class="min-s">
             <!-- 头部 -->
             <div class="headz"><h3>心理测评系统（教师端）</h3></div>
             <!-- 左边区域 -->
             <div class="left">
                 <!-- 头像 -->
                 <div class="price"><img src="../assets/0.jpg" alt=""></div>
                 <!-- 名字 -->
                 <div class="mz"><h4>{{$store.state.name}}</h4><h4>{{$store.state.tx}}</h4></div>
                 <!-- 列表区域 -->
                 <ul class="lb">
                     <router-link to="/teacher/teadd" tag="li" class="tj"> <p class="el-icon-edit"><span>添加试题</span></p></router-link>
                     <router-link to="/teacher/telook" tag="li"><p class="el-icon-view"><span>查看学生成绩</span></p></router-link>
                     <router-link to="/teacher/teguanli" tag="li"><p class="el-icon-collection-tag"><span>管理试题</span></p></router-link>
                     <router-link to="/teacher/testu" tag="li"><p class="el-icon-view"><span>查看学生信息</span></p></router-link>
                     <router-link to="/teacher" tag="li"><p class="el-icon-position"><span>返回首页</span></p></router-link>
                 </ul>
             </div>
             <!-- 右边区域 -->
             <div class="right">
                 <ul>
                     <li><img src="../assets/img/1.jpeg" alt=""></li>
                     <li><img src="../assets/img/2.jpeg" alt=""></li>
                     <li><img src="../assets/img/3.jpeg" alt=""></li>
                     <li><img src="../assets/img/4.jpeg" alt=""></li>
                     <li><img src="../assets/img/5.jpeg" alt=""></li>
                     <li><img src="../assets/img/6.jpeg" alt=""></li>
                     <li><img src="../assets/img/7.jpeg" alt=""></li>
                     <li><img src="../assets/img/8.jpeg" alt=""></li>
                     <li><img src="../assets/img/9.jpeg" alt=""></li>
                     <li><img src="../assets/img/10.jpeg" alt=""></li>
                 </ul>
             </div>
              <div class="router"><!-- 引入子组件的东西 --><router-view></router-view></div>
         </div>
     </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            //学生数量计算 
            students:[]
        }
    },
    methods: {
        
    },

}
</script>
<style>
  @import '../css/teacher.css';
</style>