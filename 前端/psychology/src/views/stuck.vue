<!--
 * @Author: chiLi
 * @Date: 2021-02-03 15:03:17
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="stuck">
        <div class="stucks" v-if="biu">
        <table border="1px solid #EBEEF5"  >
              <!-- 表头 -->
               <colgroup style="width:80px">
              </colgroup>
            <thead>
              <tr>
                <th>姓名</th>
                <th>性别</th>
                <th>得分</th>
              </tr>
            </thead>
            <!-- 表体 -->
              <tbody>
                <tr v-for="(item,i) in stuck" :key="i">
                  <td class="xh">{{item.name}}</td>
                  <td class="yes">{{item.gender}}</td>
                  <td class="yes">{{item.fuder}}</td>
                </tr>
              </tbody>
        </table>
        </div>
        <div class="stua" v-if="c">
            <p>未登录,如需查看测验信息请登录！</p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            stuck:[],
            biu:false,
            c:true
        }
    },
    methods: {
        
    },
    created () {
        if(this.$store.state.dl == "请登录!"){
            this.biu = false
            this.c = true
        }else{
            this.biu = true
             this.c = false
            this.axios.post("http://localhost:3000/stuck",{
                name:this.$store.state.hi
            })
            .then((res)=>{
                // this.stuck = res.data
                if(res.data == ""){
                    alert("未进行任何测验")
                }else{
                    this.stuck = res.data
                }
            })
        }
    }
}
</script>
<style>
    @import'../css/stuck.css'
</style>