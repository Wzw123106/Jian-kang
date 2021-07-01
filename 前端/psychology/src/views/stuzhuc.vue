<!--
 * @Author: chiLi
 * @Date: 2021-02-02 17:02:59
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="stuzhuce">
        <div class="nav">
            <ul class="kuan">
                <li><span class="head"><h3>注册</h3></span></li>
                <li><input type="username" name="" class="username" v-model="zname"  placeholder="请输入账号（账号即姓名）"></li>
                <li><input type="sex" name="" class="password" v-model="zsex" placeholder="请输入性别"></li>
                <li><input type="password" name="" class="password" v-model="zpassword" placeholder="请输入密码"></li>
                <li><button class="btn" @click="stuzcno">注册</button></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            zname:"",
            zsex:"",
            zpassword:""
        }
    },
    methods: {
        stuzcno:function(){
            if(this.zname!=="" && this.zsex!=="" && this.zpassword!==""){
            this.axios.post("http://localhost:3000/stuzhuces",{
                name:this.zname,
                sex:this.zsex,
                password:this.zpassword
            })
            .then((res)=>{
                if(res.data !== "已存在"){
                    alert("注册成功")

                    // 路由跳转到登录页面
                    this.$router.push({
                        path: "/studenlu",
                    })
                }else{
                    alert("此用户已存在,请检查是否填写正确")
                }
            })
            }else{
                alert("请完整填写注册信息")
            }
        }
    }
}
</script>
<style>
    @import '../css/stuzhuc.css'
</style>