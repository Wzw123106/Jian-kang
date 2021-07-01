<!--
 * @Author: chiLi
 * @Date: 2021-01-19 20:28:36
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="bossst">
        <table border="1px solid #EBEEF5"  >
              <!-- 表头 -->
               <colgroup style="width:80px">
              </colgroup>
            <thead>
              <tr>
                <th>序号</th>
                <th>题目</th>
                <th>(是)分值</th>
                <th>(偶尔)分值</th>
                <th>(否)分值</th>
                <th>操作</th>
                <th>管理</th>
              </tr>
            </thead>
            <!-- 表体 -->
              <tbody>
                <tr v-for="(item,i) in sulents" :key="i">
                  <td class="xh">{{item.id}}</td>
                  <td class="tm">{{item.title}}</td>
                  <td class="yes">{{item.yes}}</td>
                  <td class="tes">{{item.tes}}</td>
                  <td class="no">{{item.no}}</td>
                  <td class="btn"><button class="bj" @click="bostbj(item)">编辑</button><button class="sc" @click="bostsc(item)">删除</button></td>
                   <td class="btn"><button class="bj" @click="bosttj">添加</button><button class="sc" @click="bostczs">查找</button></td>
                </tr>
              </tbody>
        </table>
            
            <!-- 试题编辑弹出框 -->
             <div class="boo" v-show="bostbo" >
                <div class="boo-x"><i class="el-icon-close" @click="bostxo"></i></div>
                <div class="boo-a"><h4>试题信息编辑</h4></div>
                <ul>
                    <li><input type="text" placeholder="请输入题目" v-model="bosatitle"></li>
                    <li><input type="text" placeholder="请输入是（分值）" v-model="bosayes"></li>
                    <li><input type="text" placeholder="请输入偶尔（分值）" v-model="bosates"></li>
                    <li><input type="text" placeholder="请输入不是 （分值）" v-model="bosano"></li>
                    <li><input type="text" placeholder="请输入id" v-model="bosaid"></li>
                    <li><button @click="bosttjaw">提交</button></li>
                </ul>
            </div>

            
             <!-- 试题添加 -->
            <div class="boo" v-show="istruesss">
                <div class="boo-x"><i class="el-icon-close" @click="bostxoss"></i></div>
                <div class="boo-a"><h4>当前试题总数为为:{{this.sulents.length}}</h4><i></i></div>
                <ul>
                    <li><input type="text" placeholder="请输入id" v-model="bostid"></li>
                    <li><input type="text" placeholder="请输入题目" v-model="bosttitle"></li>
                    <li><input type="text" placeholder="请输入是（分值）" v-model="bostyes"></li>
                    <li><input type="text" placeholder="请输入偶尔（分值）" v-model="bosttes"></li>
                    <li><input type="text" placeholder="请输入不是 （分值）" v-model="bostno"></li>
                    <li><button @click="bosjtjm">提交</button></li>
                </ul>
            </div>

             <!-- 账号信息查找弹出框 -->
            <div class="boinput" v-show="isboui">
                <div class="boinputa">
                    查找信息
                    <i class="el-icon-close" @click="bostcz"></i>
                </div>
                <input type="text" name="" id="" placeholder="请输入试题ID" v-model="bostaid">
                <div class="btn"><button @click="bosttjuio">提交</button></div>
            </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            sulents:[],
            suletsa:[],
            bostbo:false,
            istruesss:false,
            isboui:false,

            // 编辑
            bosatitle:"",
            bosayes:"",
            bosates:"",
            bosano:"",
            bosaid:"",

            // 添加
            bostid:"",
            bosttitle:"",
            bostyes:"",
            bosttes:"",
            bostno:"",

            // 查找
            bostaid:"",
        }
    },
    methods: {
        // 编辑
        bostbj:function(item){
            this.bostbo = true
            this.bosaid = item.id
            this.bosatitle = item.title,
            this.bosayes = item.yes,
            this.bosano = item.no,
            this.bosates = item.tes
        },
        bostxo:function(){
             this.bostbo = false
        },
        bosttjaw:function(){
            this.axios.post('http://localhost:3000/bosstbj',{
                title:this.bosatitle,
                yes:this.bosayes,
                tes:this.bosates,
                no:this.bosano,
                id:this.bosaid
            }).then((res)=>{
               if(res.data.length !== 0){
                   alert("修改成功")
                  this.$router.go(0)
               }
            })
        },

        // 删除
        bostsc:function(item){
            this.axios.post("http://localhost:3000/bostsc",{
                delect:item.id
            })
            .then((res)=>{
                alert("删除成功")
                this.$router.go(0)
            })
        },

        // 添加
        bosttj:function(){
            this.istruesss = true
        },
        bostxoss:function(){
            this.istruesss = false
        },
        bosjtjm:function(){
            this.axios.post("http://localhost:3000/bostadd",{
            id:this.bostid,
            title:this.bosttitle,
            yes:this.bostyes,
            tes:this.bosttes,
            no:this.bostno
            })
            .then((res)=>{
                if(res.data.length !== 1){
                    alert("添加成功")
                    this.$router.go(0)
                }else{
                    alert("请不要添加重复信息")
                    this.bostid="",
                    this.bosttitle="",
                    this.bostyes="",
                    this.bosttes="",
                    this.bostno=""
                }
            })
        },

        // 查找
        bostczs:function(){
            this.isboui = true
        },
        bostcz:function(){
            this.isboui = false
            this.sulents =  this.suletsa
            this.bostaid = ""
        },
        bosttjuio:function(){
            this.axios.post('http://localhost:3000/bosstss',{
                stu:this.bostaid
            })
            .then((res)=>{
                this.sulents = res.data
            })
        }
    },
    created () {
        // 渲染
        this.axios.post("http://localhost:3000/bost")
        .then((res) => {
        this.sulents = res.data;
        this.suletsa =  this.sulents 
        });
    },
    watch: {
        bostaid:function(){
            this.sulents =  this.suletsa
        }
    }

}
</script>
<style>
    @import '../css/bossst.css'
</style>