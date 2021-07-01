<!--
 * @Author: chiLi
 * @Date: 2021-01-19 16:33:42
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="bosspinces">
        <table border="1px solid #EBEEF5"  >
                <!-- 表头 -->
                <colgroup style="width:80px">
                </colgroup>
                <thead>
                <tr>
                    <th>id</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>管理</th>
                    <th>操作</th>
                </tr>
                </thead>
                <!-- 表体 -->
                <tbody>
                    <tr v-for="(item,i) in bopc" :key="i">
                    <td class="xh">{{item.id}}</td>
                    <td class="name">{{item.name}}</td>
                    <td class="no">{{item.sex}}</td>
                    <td class="btn"><button class="bj" @click="bopcbj(item)">编辑</button><button class="sc" @click="bopcsc(item)">删除</button></td>
                    <td class="btn"><button class="bj" @click="bopctj">添加</button><button class="sc" @click="bopccz">查找</button></td>
                    </tr>
                </tbody>
            </table>

            <!-- 账号编辑弹出框 -->
            <div class="boo" v-show="isbospcxx" >
                <div class="boo-x"><i class="el-icon-close" @click="bopcx"></i></div>
                <div class="boo-a"><h4>评测信息编辑</h4></div>
                <ul>
                    <li><input type="text" placeholder="请输入账号(姓名)" v-model="name"></li>
                    <li><input type="text" placeholder="请输入性别" v-model="sex"></li>
                    <li><input type="text" placeholder="请输入id" v-model="id"></li>
                    <li><button @click="bopctja">提交</button></li>
                </ul>
            </div>


             <!-- 账号添加弹出框 -->
            <div class="boo" v-show="ispinces">
                <div class="boo-x"><i class="el-icon-close" @click="bopcxo"></i></div>
                <div class="boo-a"><h4>当前总评测人数为:{{this.bopc.length}}</h4><i></i></div>
                <ul>
                    <li><input type="text" placeholder="请输入id" v-model="bopcid"></li>
                    <li><input type="text" placeholder="请输入账号(姓名)" v-model="bopcname"></li>
                    <li><input type="text" placeholder="请输入性别" v-model="bopcsex"></li>
                    <li><button @click="bopctjs">提交</button></li>
                </ul>
            </div>


            <!-- 账号信息查找弹出框 -->
            <div class="boinput" v-show="isbopcczs">
                <div class="boinputa">
                    查找信息
                    <i class="el-icon-close" @click="bopcxo"></i>
                </div>
                <input type="text" name="" id="" placeholder="请输入姓名" v-model="bopcnames">
                <div class="btn"><button @click="bopctjse">提交</button></div>
            </div>
        </div>
</template>
<script>
export default {
    data () {
        return {
            bopc:[],
            bopcs:[],
            isbospcxx:false,
            ispinces:false,
            
            // 编辑
            name:"",
            sex:"",
            id:"",

            // 添加
            bopcid:"",
            bopcname:"",
            bopcsex:"",

            // 查找
            isbopcczs:false,
            bopcnames:""
        }
    },
    methods: {
        // 弹框
        bopcbj:function(item){
            this.id = item.id
            this.sex = item.sex
            this.name = item.name
            this.isbospcxx = true
        },
        bopcx:function(){
            this.isbospcxx = false
        },

        // 编辑
        bopctja:function(){
            this.axios.post('http://localhost:3000/bopcbj',{
                 name:this.name,
                 sex:this.sex,
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
        bopcsc:function(item){
            this.axios.post('http://localhost:3000/bopcsc',{
                bosdelect:item.id
            })
            .then((res)=>{
                alert("删除成功")
                this.$router.go(0)
            })
        },

        // 添加
        bopctj:function(){
            this.ispinces = true
        },
        bopcxo:function(){
             this.ispinces = false
        },
        bopctjs:function(){
            this.axios.post('http://localhost:3000/bopctjs',{
                id : this.bopcid,
                name : this.bopcname,
                sex :this.bopcsex,
            })
            .then((res)=>{
                if(res.data.length !== 1){
                    alert("添加成功")
                    this.$router.go(0)
                }else{
                    alert("请不要添加重复信息")
                    this.bopcid = "",
                    this.bopcname = "",
                    this.bopcsex = ""
                }
            })
        },


        // 查找
        bopccz:function(){
            this.isbopcczs = true
        },
        bopcxo:function(){
            this.bopc = this.bopcs
            this.isbopcczs = false
            this.bopcnames= ""

        },
        bopctjse:function(){
            this.axios.post('http://localhost:3000/bopcs',{
                stu:this.bopcnames
            })
            .then((res)=>{
                this.bopc = res.data
            })
        }



    },
    created () {
    this.axios.post('http://localhost:3000/bopc')
        .then((res)=>{
           this.bopc = res.data
           this.bopcs = this.bopc
        })
    },
    watch: {
        bopcnames:function(){
            this.bopc = this.bopcs
        }
    }

}
</script>
<style>
    @import '../css/bosspinces.css'
</style>