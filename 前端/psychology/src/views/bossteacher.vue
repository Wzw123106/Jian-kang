<!--
 * @Author: chiLi
 * @Date: 2021-01-19 13:48:09
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="boteacher">
        <div class="boshead">
            <table border="1px solid #EBEEF5"  >
                <!-- 表头 -->
                <colgroup style="width:80px">
                </colgroup>
                <thead>
                <tr>
                    <th>id</th>
                    <th>账号(姓名)</th>
                    <th>密码</th>
                    <th>管理</th>
                    <th>操作</th>
                </tr>
                </thead>
                <!-- 表体 -->
                <tbody>
                    <tr v-for="(item,i) in bote" :key="i">
                    <td class="xh">{{item.id}}</td>
                    <td class="name">{{item.username}}</td>
                    <td class="no">{{item.password}}</td>
                    <td class="btn"><button class="bj" @click="botebj(item)">编辑</button><button class="sc" @click="botesc(item)">删除</button></td>
                    <td class="btn"><button class="bj" @click="botetjs">添加</button><button class="sc" @click="boteczs">查找</button></td>
                    </tr>
                </tbody>
            </table>
        </div>

            <!-- 账号编辑弹出框 -->
            <div class="boo" v-show="istrues">
                <div class="boo-x"><i class="el-icon-close" @click="botex"></i></div>
                <div class="boo-a"><h4>教师信息编辑</h4></div>
                <ul>
                    <li><input type="text" placeholder="请输入账号(姓名)" v-model="username"></li>
                    <li><input type="text" placeholder="请输入密码" v-model="password"></li>
                    <li><input type="text" placeholder="请输入id" v-model="id"></li>
                    <li><button @click="botetj">提交</button></li>
                </ul>
            </div>

             <!-- 账号添加弹出框 -->
            <div class="boo" v-show="isbotes">
                <div class="boo-x"><i class="el-icon-close" @click="botetjx"></i></div>
                <div class="boo-a"><h4>当前总注册人数为:{{this.bote.length}}</h4><i></i></div>
                <ul>
                    <li><input type="text" placeholder="请输入id" v-model="boteid"></li>
                    <li><input type="text" placeholder="请输入账号(姓名)" v-model="boteusername"></li>
                    <li><input type="text" placeholder="请输入密码" v-model="botepassword"></li>
                    <li><button @click="bitestja">提交</button></li>
                </ul>
            </div>

            <!-- 账号信息查找弹出框 -->
            <div class="boinput" v-show="isboteboo">
                <div class="boinputa">
                    查找信息
                    <i class="el-icon-close" @click="botexo"></i>
                </div>
                <input type="text" name="" id="" placeholder="请输入姓名" v-model="botescs">
                <div class="btn"><button @click="botetjsui">提交</button></div>
            </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            bote:[],
            botes:[],
            istrues:false,
            isbotes:false,
            isboteboo:false,

            // 编辑
            username:"",
            password:"",
            id:"",

            // 添加
            boteid:"",
            boteusername:"",
            botepassword:"",

            // 查找
            botescs:""
        }
    },
    methods: {
        // 弹框出现
        botebj:function(item){
            this.istrues = true
            this.id = item.id
            this.username = item.username
            this.password = item.password
        },
        // 弹框消失
        botex:function(){
            this.istrues = false
        },
        // 编辑
        botetj:function(){
            this.axios.post('http://localhost:3000/bostebj',{
                    username:this.username,
                    password:this.password,
                    id:this.id
            })
            .then((res)=>{
                if(res.data.length !== 0){
                   alert("修改成功")
                  this.$router.go(0)
               }
            })
        },
        // 删除
        botesc:function(item){
            this.axios.post('http://localhost:3000/bostesc',{
                 bosdelect:item.id
            })
            .then((res)=>{
                alert("删除成功")
                this.$router.go(0)
            })
        },
        // 添加
        botetjs:function(){
            this.isbotes = true
        },
        botetjx:function(){
            this.isbotes = false
        },
        bitestja:function(){
            this.axios.post('http://localhost:3000/boteadd',{
                id:this.boteid,
                username:this.boteusername,
                password:this.botepassword
            })
            .then((res)=>{
                if(res.data.length !== 1){
                    alert("添加成功")
                    this.$router.go(0)
                }else{
                    alert("请不要添加重复信息")
                    this.boteid = "",
                    this.boteusername = "",
                    this.botepassword = ""
                }
            })
        },
        // 查找
        boteczs:function(){
            this.isboteboo = true
            this.botescs = ""
        },
        botexo:function(){
            this.isboteboo = false
            this.bote = this.botes
        },
        botetjsui:function(){
            this.axios.post('http://localhost:3000/botes',{
                stu:this.botescs
            })
            .then((res=>{
                this.bote = res.data
            }))
        }

    },
    created () {
        this.axios.post('http://localhost:3000/bote')
        .then((res)=>{
            this.bote = res.data
            this.botes = this.bote
        })
    },
    watch: {
        botescs:function(){
            this.bote = this.botes
        }
    }

}
</script>
<style>
@import '../css/bossteacher.css'
</style>