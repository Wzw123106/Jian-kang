<!--
 * @Author: chiLi
 * @Date: 2021-01-19 17:54:06
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="bosscj">
        <table border="1px solid #EBEEF5"  >
                <!-- 表头 -->
                <colgroup style="width:80px">
                </colgroup>
                <thead>
                <tr>
                    <th>id</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>成绩</th>
                    <th>管理</th>
                    <th>操作</th>
                </tr>
                </thead>
                <!-- 表体 -->
                <tbody>
                    <tr v-for="(item,i) in boscj" :key="i">
                    <td class="xh">{{item.id}}</td>
                    <td class="name">{{item.name}}</td>
                    <td class="no">{{item.gender}}</td>
                    <td class="no">{{item.fuder}}</td>
                    <td class="btn"><button class="bj" @click="boscjs(item)">编辑</button><button class="sc" @click="bossc(item)">删除</button></td>
                    <td class="btn"><button class="bj" @click="boscjtj">添加</button><button class="sc" @click="bocjcz">查找</button></td>
                    </tr>
                </tbody>
            </table>

             <!-- 账号编辑弹出框 -->
            <div class="boo" v-show="iscja">
                <div class="boo-x"><i class="el-icon-close" @click="boscjx"></i></div>
                <div class="boo-a"><h4>评测信息编辑</h4></div>
                <ul>
                    <li><input type="text" placeholder="请输入账号(姓名)" v-model="bocjname"></li>
                    <li><input type="text" placeholder="请输入性别" v-model="bocjgender"></li>
                    <li><input type="text" placeholder="请输入成绩" v-model="bocjfunder"></li>
                    <li><input type="text" placeholder="请输入id" v-model="bocjid"></li>
                    <li><button @click="boscjtjas">提交</button></li>
                </ul>
            </div>

           <!-- 账号添加弹出框 -->
            <div class="boo" v-show="isbjt">
                <div class="boo-x"><i class="el-icon-close" @click="bopcxo"></i></div>
                <div class="boo-a"><h4>当前总评测人数为:{{this.boscj.length}}</h4><i></i></div>
                <ul>
                    <li><input type="text" placeholder="请输入id" v-model="id"></li>
                    <li><input type="text" placeholder="请输入账号(姓名)" v-model="name"></li>
                    <li><input type="text" placeholder="请输入性别" v-model="gender"></li>
                    <li><input type="text" placeholder="请输入分数" v-model="fuder"></li>
                    <li><button @click="bocjtj">提交</button></li>
                </ul>
            </div>

            <!-- 账号信息查找弹出框 -->
            <div class="boinput" v-show="isc">
                <div class="boinputa">
                    查找信息
                    <i class="el-icon-close" @click="bocjxoi"></i>
                </div>
                <input type="text" name="" id="" placeholder="请输入姓名" v-model="cjname">
                <div class="btn" @click="bocjtijio"><button >提交</button></div>
            </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            boscj:[],
            boscjsa:[],
            iscja:false,
            isbjt:false,
            isc:false,

            // 编辑
            bocjname:"",
            bocjgender:"",
            bocjfunder:"",
            bocjid:"",

            // 添加
            id:"",
            name:"",
            gender:"",
            fuder:"",

            // 查找
            cjname:""

        }
    },
    methods: {
        // 编辑弹框
        boscjs:function(item){
            this.bocjid = item.id
            this.bocjname = item.name
            this.bocjgender = item.gender
            this.bocjfunder = item.fuder
            this.iscja = true
        },
        boscjx:function(){
            this.iscja = false
        },
        // 编辑
        boscjtjas:function(){
            this.axios.post('http://localhost:3000/bocjbj',{
                name:this.bocjname,
                gender:this.bocjgender,
                fuder:this.bocjfunder,
                id:this.bocjid
            })
            .then((res)=>{
                if(res.data.length !== 0){
                   alert("修改成功")
                  this.$router.go(0)
               }
            })
        },
        // 删除
        bossc:function(item){
            this.axios.post('http://localhost:3000/bocjsc',{
                bosdelect:item.id
            })
            .then((res)=>{
                alert("删除成功")
                this.$router.go(0)
            })
        },
        // 添加
        boscjtj:function(){
            this.isbjt = true
        },
        bopcxo:function(){
            this.isbjt = false
        },
        bocjtj:function(){
            this.axios.post('http://localhost:3000/bopctj',{
                id:this.id,
                name:this.name,
                gender:this.gender,
                fuder:this.fuder
            })
            .then((res)=>{
                 if(res.data.length !== 1){
                    alert("添加成功")
                    this.$router.go(0)
                }else{
                    alert("请不要添加重复信息")
                    this.id= "",
                    this.name = "",
                    this.gender = "",
                    this.fuder = ""
                }
            })
        },

        // 查找
        bocjcz:function(){
            this.isc = true
        },
        bocjxoi:function(){
            this.isc = false
            this.boscj = this.boscjs
            this. cjname = ""
        },
        bocjtijio:function(){
            this.axios.post('http://localhost:3000/bocjss',{
                stu:this.cjname
            })
            .then((res)=>{
               this.boscj = res.data
            })
        }
    },
    created () {
        this.axios.post('http://localhost:3000/bocj')
        .then((res)=>{
            this.boscj = res.data
            this.boscjsa = this.boscj
        })
    },
    watch: {
        cjname:function(){
            this.boscj = this.boscjsa
        }   
    }
}
</script>
<style>
    @import '../css/bosscj.css'
</style>