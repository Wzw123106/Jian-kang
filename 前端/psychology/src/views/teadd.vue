<!--
 * @Author: chiLi
 * @Date: 2021-01-09 18:07:24
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<!--
 * @Author: chiLi
 * @Date: 2021-01-09 18:07:24
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div>
        <!-- 向数据库题库添加数据 -->
        <div class="inpus">
            <div class="navsa"> 
              <ul class="inpuls">
                   <li><span>请输入测试题目:</span><input type="text" name="" id="" class="title" v-model="title"></li>
                   <li><span>选项(是),设置分值:</span><input type="text" name="" id="" class="yes" v-model="yes"></li>
                   <li><span>选项(偶尔),设置分值:</span><input type="text" name="" id="" class="tes" v-model="tes"></li>
                   <li><span>选项(否),设置分值:</span><input type="text" name="" id="" class="no" v-model="no"></li>
                   <button class="bts" @click="btns">提交</button> 
               </ul> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            title:"",
            yes:"",
            tes:"",
            no:""
        }
    },
    methods: {
        btns:function(){
         this.axios.post("http://localhost:3000/add",{
              title:this.title,
              yes:this.yes,
              tes:this.tes,
              no:this.no
        })
        .then((res)=>{
            if(res.data.length !== 0){
                alert("添加成功")
                this.title = ""
                this.yes = "",
                this.no = "",
                this.tes = ""
            }else{
                alert("已存在")
            }
        })
        }
    },

}
</script>
<style>
     @import '../css/teadd.css';
</style>