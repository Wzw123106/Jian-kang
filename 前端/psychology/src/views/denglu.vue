<!--
 * @Author: chiLi
 * @Date: 2021-01-02 20:13:52
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
        <!-- 登录界面 -->
        <div class="user">
            <div class="nav">
                <ul class="kuan">
                  <li><span class="head">校园心理咨询系统(教师端)</span></li>
                  <li><input type="username" name="" class="username" v-model="username"  placeholder="请输入账号"></li>
                  <li><input type="password" name="" class="password" v-model="password" placeholder="请输入密码"></li>
                  <li><button class="btn" @click="ok">登录</button></li>
                </ul>
            </div>
        </div>
</template>
<script>



// 引用axios
import axios from 'axios'
export default {
    // 数据部分
    data () {
        return {
            username:"",
            password:"",
        }
    },
    // 方法部分
    methods: {
        ok:function(){
            // 登录接口地址  
            this.axios.post("http://localhost:3000/login",{
              username:this.username,
              password:this.password
             })
            .then((res)=>{
                let resDate = res.data[0]
                if(this.username == resDate.username || this.password == resDate.password){
                    // 通过 vuex 传递到公共仓库当中去
                    this.$store.state.name = "姓名:"+resDate.username
                    this.$store.state.tx = "职务:老师"
                    // 路由跳转到主页面
                    this.$router.push({
                        path: "/teacher",
                    })
                    // console.log(document.cookie)
                }else{
                    alert("账号或密码错误")
                }
            })
        }
    },

}
</script>
<style>
    @import '../css/denglu.css';
    @import '../css/reset.css'
</style>

