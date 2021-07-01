<!--
 * @Author: chiLi
 * @Date: 2021-01-20 17:51:55
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="bossdenglu">
            <div class="nav">
                <ul class="kuan">
                  <li><span class="head">校园心理咨询系统(管理员端)</span></li>
                  <li><input type="username" name="" class="username" v-model="bosz"  placeholder="请输入账号"></li>
                  <li><input type="password" name="" class="password" v-model="bosm" placeholder="请输入密码"></li>
                  <li><button class="btn" @click="bosgo">登录</button></li>
                </ul>
            </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            bosz:"",
            bosm:"",
            bossf:[]
        }
    },
    methods: {
        bosgo:function(){
            this.axios.post("http://localhost:3000/bossDen",{
                name:this.bosz,
                password:this.bosm
            })
            .then((res)=>{
                if(res.data == "错误" ){
                   alert("登录失败")
                }else{
                    this.bossf = res.data[0]
                    // 先传递公共数据
                    this.$store.state.bossname = "欢迎您:管理员"
                    alert("登录成功")
                    this.$router.push({
                        path: "/boss/bosstux",
                    })
                }
            })
        }
    },
    created () {
        
    },
    watch: {
        
    }
}
</script>
<style>
    @import '../css/bossdenglu.css'
</style>