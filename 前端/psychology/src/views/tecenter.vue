<!--
 * @Author: chiLi
 * @Date: 2021-01-11 21:15:21
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
       <div class="center">
        <ul class="cen-l">
            <li><span class="el-icon-s-custom"></span><i>学生注册人数:{{this.$store.state.stus}}</i></li>
            <li><span class="el-icon-s-platform"></span><i>学生测评人数:{{this.$store.state.pcs}}</i></li>
            <li><span class="el-icon-s-flag"></span><i>试题数量:{{this.$store.state.stes}}</i></li>
        </ul>
        <div class="tezx">
            
        </div>
       </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    methods: {
        
    },
     // 异步执行函数
    created () {
        // 获取数据得出注册学生的人数
        this.axios.post("http://localhost:3000/tongji")
        .then((res)=>{
            // 获取数据
            this.students = res.data
            this.$store.state.stus= this.students.length
        }),

        // 获取学生评测的人数
        this.axios.post("http://localhost:3000/pcs")
        .then((res)=>{
            // 获取数据
            this.students = res.data
            this.$store.state.pcs= this.students.length
        })

        // 获取题库的数据条数
        this.axios.post('http://localhost:3000/shitis')
        .then((res)=>{
            // 获取数据
            // console.log(res.data.length)
            this.$store.state.stes= res.data.length
        })
    }
}
</script>
<style>
 @import '../css/tecenter.css';
</style>