<!--
 * @Author: chiLi
 * @Date: 2021-01-11 22:45:26
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="look">
        <el-table
            :data= this.reuurnz
             height="515"
             border
         style="width: 100%">
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
             </el-table-column>
            <el-table-column
                 prop="gender"
                 label="性别"
                 width="180">
            </el-table-column>
            <el-table-column
                 prop="fuder"
                 label="分数">
            </el-table-column>
        </el-table>
        <!-- 查询按钮 -->
        <div class="ones"><input type="text" name="ss" id="" placeholder="请输入查询的名字" v-model="sou"><span><button @click="sous">搜索</button></span></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            sou:"",
            reuurnz:[],
            run:[],
            renf:[]

        }
    },
    methods: {
        // 搜索查询
        sous:function(){
          this.axios.post("http://localhost:3000/sousuo",{
              sao:this.sou
          })
          .then((res)=>{
              // 当前数据  
              this.renf = res.data
              // 以前数据  
              this.reuurnz = this.renf
          })
        }
    },
    
    watch: {
        sou:function(){
             this.reuurnz = this.run
             console.log(this.reuurnz)
        }
    },


    // 异步处理函数
    created () {
        this.axios.get("http://localhost:3000/chengji")
        .then((res)=>{
            this.reuurnz = res.data
            this.run = this.reuurnz
        })
    }
}
</script>
<style>
    @import '../css/telook.css';
</style>