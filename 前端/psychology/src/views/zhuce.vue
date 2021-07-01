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
                  <li><button class="btn" @click="ok">注册</button></li>
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
            username:"张三",
            password:"222211",
        }
    },
    // 方法部分
    methods: {
        ok:function(){
            // 登录接口地址
            this.axios.post("http://localhost:3000/zhuche",{
                username:this.username,
                password:this.password
             })
            .then((res)=>{
                if(res.data[0]){
                    alert("账号已存在")
                }else{
                    alert("注册成功")
                }
            })
        }
    },

}
</script>
<style>
    @import '../css/zhuce.css';
    @import '../css/reset.css';
</style>

