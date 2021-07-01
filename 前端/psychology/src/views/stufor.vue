<!--
 * @Author: chiLi
 * @Date: 2021-01-25 19:32:29
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="stufor">
        <h3>如何改善自己的心理问题？</h3>
        <ul>
            <li>人们总是问我，焦虑，抑郁，躁郁……这些心理问题的解决方法是什么。本来是没有办法给一个简单的答案的，但是总是有人问，我就不得不去想。
心理问题的一个共同的特点，是一个人的无力感，而这无力感是由于他失去了从宇宙自然获得能量的通道。人是自然的一部分，生来完好，通透，连接着自然的能量。就像森林里的树木，生机勃勃。如果环境不允许他做自然的自己，他就必须把真实的自己扭曲成一个伪装的自己，这种扭曲，就别住了能量循环的气场，让他与宇宙自然的纽带无法畅通，无法获取自然的能量。
我们生来什么样，必须保持什么样，我们生来是谁，必须成为谁。没有其它的可能。任何其它的方式，都会造成心理问题，都会损失能量，都会让我们高兴不起来。
所以改善心理问题，就是要恢复我们本来的状态，与宇宙同频率，内外一致，坦荡勇敢。与宇宙同频率，因为宇宙是完好的，所以我们是完好的，因为宇宙是有力量的，所以我们是有力量的。
去找到这样一种通透的感觉，最好的方式并不是静坐，正念，瑜伽，而是寻找自然的生存模式。渔樵耕读，朴素的生存，越是接近自然，接近土地，接近生命，就越有力量。
一个人会盖房子的人，不会抑郁，因为他每天都在建设。一个会种植的人不会焦虑，因为他确定会看见结果。如果非要给一个如何改善心理问题的建议，那就是自然和劳动。我们的问题是因为浮在空中，解决它当然是落到土地。</li>

            <li><img src="../assets/steimg/12.jpg" alt=""></li>
        </ul>
        <!-- 留言板块 -->
        <div class="stufa">
            <!-- 假 -->
            <div class="stu-k"></div>
            <!-- 留言区域 -->
            <p class="over">{{this.pl.length}}条评论</p>
            <ul>
                <li class="stu-li" v-for="(iteml,sz) in pl" :key="sz">
                    <h4 class="nameaaq">{{iteml.name}}</h4>
                    <p class="rq">{{iteml.sj}}</p>
                    <p class="wz">{{iteml.title}}</p>
                    <p class="stuhf"><button @click="stuohf">回复</button></p>
                    
                </li>
                <hr class="sthrs">
                <p class="over">统一{{this.hf.length}}条回复</p>
                </ul>
                    <ul class="stu-three" v-for="(itema,ios) in hf" :key="ios">
                    <h4 class="nameaaq">{{itema.name}}</h4>
                    <p class="rq">{{itema.sj}}</p>
                    <p  class="wz">{{itema.title}}</p>
                    <!-- <p class="stuhf"><button></button></p> -->
                </ul>
            <div class="fblya"></div>
            <!-- 假 -->
            <div class="stu-k"></div>
            <!-- 发布评论板块 -->
            <p class="fbst">发表评论</p>
            <ul class="fba">
                <li><p class="nan">评论 <i class="el-icon-bicycle"></i></p></li>
                <li><input type="text" name="" id="" class="hska" placeholder="评论内容(必填)" v-model="bkpl"></li>
                <li>
                    <p class="nan">名称 <i class="el-icon-bicycle"></i></p>
                    <input type="text" name="" id="" class="ktwo" placeholder="姓名或昵称必填" v-model="bknc">
                </li>
                <li><button class="yan" @click="fbplk">发表评论</button></li>
            </ul>
        </div>




        <!--弹框版回复留言板块 -->
        <div class="fblytk"  v-if="tkm">
            <p class="fbst">发表评论</p>
            <ul class="fba">
                <li><p class="nan">评论 <i class="el-icon-bicycle"></i></p></li>
                <li><input type="text" name="" id="" class="hska" placeholder="评论内容(必填)" v-model="plnrbt"></li>
                <li>
                    <p class="nan">名称 <i class="el-icon-bicycle"></i></p>
                    <input type="text" name="" id="" class="ktwo" placeholder="姓名或昵称必填" v-model="xmnc"> 
                </li>
                <li><button class="yan" @click="plgoto">发表评论</button> <button class="qxa" @click="sqx">取消</button></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            pl:[],
            hf:[],
            ls:[],
            tkm:false,

            // 发布留言区域
            bknc:"",
            bkpl:"",
            strs:"",

            // 回复区域
            plnrbt:"",
            xmnc:""
        }
    },
    methods: {
        fbplk:function(){
            if(this.bknc !== "" && this.bkpl !== ""){
            var d = new Date();
			var str = '';
			str += d.getFullYear() + '年'; //获取当前年份 
			str += d.getMonth() + 1 + '月'; //获取当前月份（0——11） 
            str += d.getDate() + '日';
            this.strs = str
           
           this.axios.post("http://localhost:3000/stupladd",{
               name:this.bknc,
               sj:this.strs,
               title:this.bkpl
           })
           .then((res)=>{
               if(res.data == "评论成功"){
                   this.pl.push({
                        name:this.bknc,
                        sj:this.strs,
                        title:this.bkpl
                   })
                  alert("发表评论成功")
                     this.bknc=""
                     this.strs=""
                     this.bkpl=""
               }
           })
        }else{
            alert("信息不完善无法发表")
        }
        },

        // 回复发布设置
        stuohf:function(){
            // this.tkm = true
            if(this.$store.state.hi == "老师"){
               this.tkm = true
            }else{
                alert("无权限回复")
            }
        },

        // 确认发布
        plgoto:function(){
            if(this.xmnc !== "" && this.plnrbt !== ""){
            var d = new Date();
			var str = '';
			str += d.getFullYear() + '年'; //获取当前年份 
			str += d.getMonth() + 1 + '月'; //获取当前月份（0——11） 
            str += d.getDate() + '日';
            this.strs = str

            this.axios.post("http://localhost:3000/stuhfadd",{
                name:this.xmnc,
                sj:this.strs,
                title:this.plnrbt
            })
            .then((res)=>{
                if(res.data == "回复成功"){
                    this.hf.push({
                        name:this.xmnc,
                        sj:this.strs,
                        title:this.plnrbt
                    })
                    alert("评论成功")
                    this.xmnc = ""
                    this.plnrbt = ""
                    this.strs = ""
                    this.tkm = false
                }
            })
            }else{
                alert("无法回复空信息")
            }
        },

        // 回复取消设置
        sqx:function(){
            this.tkm = false
        }
    },

    created () {
        // 评论渲染
        this.axios.post("http://localhost:3000/stupl")
        .then((res)=>{
           this.pl = res.data
        })
        // 回复渲染
        this.axios.post("http://localhost:3000/stuhf")
        .then((res)=>{
            this.hf = res.data
        })
    }
}
</script>>
<style>
    @import '../css/stufor.css'
</style>