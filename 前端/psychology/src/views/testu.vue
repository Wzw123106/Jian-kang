<!--
 * @Author: chiLi
 * @Date: 2021-01-14 21:48:27
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="stu">
               <el-table
            :data= this.stuen
             height="515"
             border
         style="width: 100%">
            <el-table-column
                prop="id"
                label="编号"
                width="180">
             </el-table-column>
            <el-table-column
                 prop="name"
                 label="名字"
                 width="180">
            </el-table-column>
            <el-table-column
                 prop="sex"
                 label="性别">
            </el-table-column>
        </el-table>
        <!-- 查找学生信息 -->
        <div class="stux"><input type="text" name="" id=""  placeholder="请输入查询的名字" v-model="stus"><button @click="gos">搜索</button></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            stuen:[],
            stun:[],
            stus:"",
        }
    },
    methods: {
        gos:function(){
            this.axios.post('http://localhost:3000/stus',{
                sao:this.stus
            })
            .then((res)=>{
                console.log(res.data)
                this.stuen = res.data
            })
        }
    },
    created () {
        this.axios.post('http://localhost:3000/stuxu')
        .then((res)=>{
            this.stuen = res.data
            this.stun = this.stuen
        })
    },


    watch: {
        stus:function(){
            this.stuen = this.stun
        }
    }
}
</script>
<style>
@import '../css/testu.css';
</style>