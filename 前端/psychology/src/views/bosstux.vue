<!--
 * @Author: chiLi
 * @Date: 2021-01-18 18:08:03
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="bosstu">
        <div class="boshead">
            <table border="1px solid #EBEEF5"  >
                <!-- 表头 -->
                <colgroup style="width:80px">
                </colgroup>
                <thead>
                <tr>
                    <th>id</th>
                    <th>账号(姓名)</th>
                    <th>性别</th>
                    <th>账号</th>
                    <th>密码</th>
                    <th>管理</th>
                    <th>操作</th>
                </tr>
                </thead>
                <!-- 表体 -->
                <tbody>
                    <tr v-for="(item,i) in bosstug" :key="i">
                    <td class="xh">{{item.id}}</td>
                    <td class="name">{{item.name}}</td>
                    <td class="yes">{{item.sex}}</td>
                    <td class="tes">{{item.name}}</td>
                    <td class="no">{{item.password}}</td>
                    <td class="btn"><button class="bj" @click="bobj(item)">编辑</button><button class="sc" @click="boxsc(item)">删除</button></td>
                    <td class="btn"><button class="bj" @click="add">添加</button><button class="sc" @click="bocz">查找</button></td>
                    </tr>
                </tbody>
            </table>

            <!-- 账号编辑弹出框 -->
            <div class="boo" v-show="istrue">
                <div class="boo-x"><i class="el-icon-close" @click="box"></i></div>
                <div class="boo-a"><h4>学生信息编辑</h4></div>
                <ul>
                    <li><input type="text" placeholder="请输入账号(姓名)" v-model="name"></li>
                    <li><input type="text" placeholder="请输入性别" v-model="sex"></li>
                    <li><input type="text" placeholder="请输入密码" v-model="password"></li>
                    <li><input type="text" placeholder="请输入id" v-model="id"></li>
                    <li><button @click="botj">提交</button></li>
                </ul>
            </div>

        <!-- 账号添加弹出框 -->
            <div class="boo" v-show="isbo">
                <div class="boo-x"><i class="el-icon-close" @click="boxs"></i></div>
                <div class="boo-a"><h4>当前总注册人数为:{{this.bosstug.length}}</h4><i></i></div>
                <ul>
                    <li><input type="text" placeholder="请输入id" v-model="boid"></li>
                    <li><input type="text" placeholder="请输入账号(姓名)" v-model="boname"></li>
                    <li><input type="text" placeholder="请输入性别" v-model="bosex"></li>
                    <li><input type="text" placeholder="请输入密码" v-model="bopassword"></li>
                    <li><button @click="bostutj">提交</button></li>
                </ul>
            </div>

        <!-- 账号信息查找弹出框 -->
        <div class="boinput" v-show="iste">
            <div class="boinputa">
                查找信息
                <i class="el-icon-close" @click="boczx"></i>
            </div>
            <input type="text" name="" id="" placeholder="请输入姓名" v-model="boczs">
            <div class="btn"><button @click="bobtn">按钮</button></div>
        </div>
        
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            bosstug:[],
            bosstugs:[],
            istrue:false,
            isbo:false,
            iste:false,

            // 账号编辑
            id:"",
            name:"",
            sex:"",
            txt:"",
            password:"",

            // 账号添加
            boid:"",
            boname:"",
            bosex:"",
            bopassword:"",

            // 账号搜索
            boczs:""

        }
    },
    methods: {
        // (使弹框弹出)
        bobj:function(item){
            this.istrue= true
            this.id = item.id
            this.name = item.name
            this.sex = item.sex
            this.password = item.password
        },
        // (使弹框消失)
        box:function(){
            this.istrue = false
        },
        // (编辑内容)
        botj:function(){
                this.axios.post('http://localhost:3000/bostub',{
                name:this.name,
                sex:this.sex,
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
        // (删除当前数据)
        boxsc:function(item) {
            this.axios.post('http://localhost:3000/bostubsa',{
                bosdelect:item.id
            })
            .then((res)=>{
                alert("删除成功")
                this.$router.go(0)
            })
        },
        // (添加账号(弹框出现))
        add:function(){
            this.isbo = true
        },
        boxs:function(){
            this.isbo = false
        },
        // (添加账号(提交),依据id来判断)
        bostutj:function(){
            this.axios.post('http://localhost:3000/bostuadd',{
                id : this.boid,
                name : this.boname,
                sex : this.bosex,
                password : this.bopassword
            })
            .then((res)=>{
                if(res.data.length !== 1){
                    alert("添加成功")
                    this.$router.go(0)
                }else{
                    alert("请不要添加重复信息")
                    this.boid = "",
                    this.boname = "",
                    this.bosex = "",
                    this.bopassword = ""
                }
                
            })
        },
        // (查找账号信息)
        bocz:function(){
            this.iste = true
        },
        boczx:function(){
            this.bosstug = this.bosstugs
            this.boczs = ""
            this.iste = false
        },
        bobtn:function(){
            this.axios.post('http://localhost:3000/bostuso',{
                stu:this.boczs
            }).then((res)=>{
                this.bosstug = res.data
            })
        }

    },
    created () {
        // 渲染
        this.axios.post('http://localhost:3000/bostu')
        .then((res)=>{
            this.bosstug = res.data
            this.bosstugs = this.bosstug
        })
    },
    watch: {
        // 监听
         boczs:function(){
              this.bosstug =  this.bosstugs
         }
    }
}
</script>
<style>
@import '../css/bosstux.css'
</style>