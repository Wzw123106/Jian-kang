<!--
 * @Author: chiLi
 * @Date: 2021-02-02 19:32:57
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="stuxiugai">
        <div class="stuxg" v-if="sto">
            <div class="stuhead"><h3>修改个人资料</h3></div>
            <ul>
               <li><input type="text" name="" id="" v-model="name"  placeholder="请输入账号" readonly unselectable="on"></li>
                <li><input type="text" name="" id="" v-model="sex"  placeholder="请输入性别"></li>
                <li><input type="text" name="" id="" v-model="pas"  placeholder="请输入密码"></li>
                <li><button @click="stuutjl">提交</button></li>
            </ul>
        </div>
        <div class="stuxs" v-if="po">
            <p>未登录,如需修改个人资料请登录！</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            sto:true,
            po:true,
            name:this.$store.state.hi,
            // sex:this.$store.state.dl,
            sex:"",
            // pas:this.$store.state.pa,
            pas:"",
            id:this.$store.state.id
        }
    },
    methods: {
        stuutjl:function(){

            if(this.sex!=="" && this.pas!==""){
            this.axios.post("http://localhost:3000/stxg",{
                name:this.name,
                sex:this.sex,
                password:this.pas,
                id:this.id
            })
            .then((res)=>{
                if(res.data[0].sum == "修改成功"){
                    alert("修改成功,请重新登录")

                   // 路由跳转到主页面
                    this.$router.push({
                        path: "/studenlu",
                    })
                }else{
                    alert("出现未知错误,请联系管理员")
                }
            })
            }
            else{
                alert("信息不完整")
            }
        }
    },
    created () {
        if(this.$store.state.dl == "请登录!"){
            this.sto = false
            this.po = true
        }else{
            this.po = false
            this.sto = true
        }
    }
}
</script>
<style >
    @import '../css/stuxiugai.css'
</style>