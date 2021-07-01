<!--
 * @Author: chiLi
 * @Date: 2021-02-01 18:18:16
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="studenlu">
            <div class="nav">
                <ul class="kuan">
                  <li><span class="head"><h3>登录</h3></span></li>
                  <li><input type="username" name="" class="username" v-model="name"  placeholder="请输入账号"></li>
                  <li><input type="password" name="" class="password" v-model="password" placeholder="请输入密码"></li>
                  <li><button class="btn" @click="studeno">登录</button></li>
                </ul>
            </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            name:"",
            password:""
        }
    },
    mounted () {
      this.axios.post("/whoami").then((res)=>{
          console.log(res);
      })  
    },
    methods: {
        studeno:function(){
            this.axios.post("/studenlu",{
                name:this.name,
                password:this.password
            })
            .then((res)=>{
               if(res.data !== "错误"){
                   console.log(res);
                   alert("登录成功")
                    // 通过 vuex 传递到公共仓库当中去
                    this.$store.state.hi =this.name
                    this.$store.state.dl =res.data[0].sex
                    this.$store.state.id =res.data[0].id
                    this.$store.state.pa =res.data[0].password
                    
                    // 路由跳转到主页面
                    this.$router.push({
                        path: "/",
                    })

               }else{
                   alert("密码或账号错误")
               }
            })
        }
    },
    created () {
        
    }
}
</script>
<style>
  @import '../css/studenlu.css'
</style>