<!--
 * @Author: chiLi
 * @Date: 2021-01-24 16:04:19
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="student">
        <!-- 表头 -->
        <div class="stude-head">
            <div class="studen-d">
                 <router-link to="/studenlu" tag="span">立即登录</router-link><span class="dl">/</span>  <router-link to="/stuzhuc" tag="span">注册</router-link>
            </div>
              <img src="../assets/stuimg/stulogo.png" alt="">
        </div>

        <!-- 左边 -->
        <div class="studen-left">
            <!-- 头像 -->
            <!-- <div class="stu-tx"><img src="../assets/stuimg/gir.jpg" alt=""></div> -->
              <div class="stu-tx"><img src="../assets/stuimg/a.jpg" alt=""></div>
            <div class="stu-name">
            <ul>
                <li>{{$store.state.hi}}</li>
                <li>{{$store.state.dl}}</li>
            </ul>
            </div>
            <!-- 分割线 -->
            <span class="hrs"></span>

            <ul class="stu-lieb">
                <router-link to="/stuces" tag="li"><h4><i class="el-icon-position"></i>测试心理健康</h4></router-link>
                <router-link to="/stuxiugai" tag="li"><h4><i class="el-icon-edit"></i>修改个人资料</h4></router-link>
                 <router-link to="/stuck" tag="li"><h4><i class="el-icon-view"></i>查看心理成绩</h4></router-link>
                <router-link to="/" tag="li" ><h4><i class="el-icon-star-off"></i>返回首页内容</h4></router-link>
            </ul>

        </div>
        

        <!-- 右边 -->
        <div class="student-right">
            
            <!-- 其他端登录 -->
            <div class="stubote">
                <ul>
                    <router-link to="/teacher/denglu" tag="li">教师端登录</router-link>
                    <router-link to="/boss/denglu" tag="li">管理端登录</router-link>
                </ul>
            </div>
        </div>

        <!-- 中间 -->
        <div class="student-center">
            <router-link to="/stuone"><div class="student-d"><h3>10个缓解压力和焦虑的有效方法</h3></div></router-link> 
            <router-link to="/stuthree"><div class="student-t"><h3>怎样缓解巨大的压力和焦虑感？</h3></div></router-link> 
            <router-link to="/stutwo"><div class="student-c"><h3>如何处理学生考试来临前的焦虑症</h3></div></router-link>
            <router-link to="/stufor"><div class="student-x"><h3>心理疑问留言板块</h3></div></router-link>
            <router-view></router-view>
        </div>


    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {

    },
    created () {
    }
}
</script>

<script>
export default {
    mounted () {
      this.axios.post("/whoami").then((res)=>{
          console.log(res);
          this.$store.state.hi = res.data.name
          this.$store.state.dl = res.data.password
      },(err)=>{
          console.log(err);
      })  
    },
}
</script>

<style>
    @import '../css/student.css';
</style>