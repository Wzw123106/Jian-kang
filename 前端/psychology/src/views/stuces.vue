<!--
 * @Author: chiLi
 * @Date: 2021-01-28 16:05:18
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="stuces"> 
        <div class="the"><h3>大学生心理健康测试</h3></div>
          <table border="1px solid #EBEEF5" class="tables" >
              <!-- 表头 -->
               <colgroup style="width:80px" >
              </colgroup>
            <!-- 表体 -->
              <tbody>
                <tr v-for="(item,i) in this.stusta" :key="i">
                  <td class="xh"><h4 class="stuaok">{{item.id}}</h4></td>
                  <td class="tm"><div class="stuspana">{{item.title}}</div></td>
                  <td class="yes">
                      <button  @click="yes($event,item,i)" :disabled=yesa class="pl">是</button>
                      <button  @click="tes($event,item,i)" :disabled=tesa class="pl">偶尔</button>
                      <button   @click="no($event,item,i)" :disabled=noa class="pl">否</button>
                  </td>
                </tr>
              </tbody>
         </table>
         <div class="xm"><button @click="tjo">提交</button></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            // 试题
            stusta:[],
            // 分数
            indexsa:0,
            // 点击次数
            indexok:0,

            // 是点击状态
            yesa:false,
            yesint:1,

            // 偶尔点击状态
            tesa:false,

            // 否点击状态
            noa:false,
      
        }
    },
    methods: {
        // 是
        yes:function(e,item,i){
            this.indexok++
            this.indexsa +=  parseInt(item.yes)
            e.target.disabled = "true"


            // 获取下一个兄弟元素 使其按钮禁用
            let a =  e.target.nextElementSibling
            a.disabled = "true"
            // 获取下下个兄弟元素 使其按钮禁用
            let b =  a.nextElementSibling
            b.disabled = "true"

            //  console.log(this.indexsa)
            //  console.log(this.indexok)
             
            // 选中改变其颜色
             e.target.style.backgroundColor = "red";
             e.target.style.color = "white";
            
        },

        // 偶尔
        tes:function(e,item,i){
            this.indexok++
            this.indexsa +=  parseInt(item.tes)
            console.log(this.indexsa)
            e.target.disabled = "true"

            // 获取上一个兄弟元素 使其按钮禁用
            let a =  e.target.previousElementSibling
            a.disabled = "true"
            // 获取下一个兄弟元素 使其按钮禁用
            let b =  e.target.nextElementSibling
            b.disabled = "true"

             e.target.style.backgroundColor = "rgb(76, 73, 224)";
             e.target.style.color = "white";
            
        },

        // 否
        no:function(e,item,i){
            this.indexok++
            this.indexsa +=  parseInt(item.no)
            console.log(this.indexsa)
            e.target.disabled = "true"

            // 获取上一个兄弟元素 使其按钮禁用
            let a =  e.target.previousElementSibling
            a.disabled = "true"
            // 获取上上个兄弟元素 使其按钮禁用
            let b =  a.previousElementSibling
            b.disabled = "true"


             e.target.style.backgroundColor = "rgb(168, 224, 104)";
             e.target.style.color = "white";


        },

        // 提交
        tjo:function(){
            if(this.$store.state.hi == "Hi！你好"){
                alert("未登录,请登录")
            }else{
                if(this.indexok !== this.stusta.length){
                    alert("提交失败,请确认是否全部选择完毕")
                }else{
                    this.axios.post("http://localhost:3000/stucjtj",{
                    name:this.$store.state.hi,
                    gender:this.$store.state.dl,
                    fuder:this.indexsa
                    })
                    .then((res)=>{
                        // alert("提交成功")
                        if(this.indexsa <= 8){
                            alert("心理非常健康，请你放心。")
                            this.$router.go(0)
                        }else if(this.indexsa >= 9 && this.indexsa <= 16  ){
                            alert("大致还属于健康的范围，但应有所注意，可以找老师或同学聊聊，心情应保持愉快、乐观。")
                            this.$router.go(0)
                        }else if(this.indexsa >= 17 &&  this.indexsa <= 30  ){
                            alert("你在心理方面有了一些障碍，应采取适当的方法进行调适，或找心理辅导老师帮助你。")
                            this.$router.go(0)
                        }else if(this.indexsa >= 31 &&  this.indexsa <= 40){
                            alert("黄牌警告，您有可能患了某些心理疾病，应找专门的心理医生进行检查治疗。")
                            this.$router.go(0)
                        }else{
                            alert("您有较严重的心理障碍，应及时找专门的心理医生治疗")
                            this.$router.go(0)
                        }
                    })
                }
            }
  
        }
    },
    created () {
        this.axios.post('http://localhost:3000/stust')
        .then((res)=>{
           this.stusta = res.data
        })   
    }
}
</script>
<style >
    @import '../css/stuces.css';
    
    
</style>