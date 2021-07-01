<!--
 * @Author: chiLi
 * @Date: 2021-01-12 06:26:03
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
  <div class="guanli">
      <!-- <ul v-for="(item,i) in sulent" :key="i">
          <li @click="sc(item)">{{item.id}}:{{item.yes}}</li>
          <li></li>
          <li></li>
      </ul> -->
      <div class="uio">
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
              </tr>
            </thead>
            <!-- 表体 -->
              <tbody>
                <tr v-for="(item,i) in sulent" :key="i">
                  <td class="xh">{{item.id}}</td>
                  <td class="tm">{{item.title}}</td>
                  <td class="yes">{{item.yes}}</td>
                  <td class="tes">{{item.tes}}</td>
                  <td class="no">{{item.no}}</td>
                  <td class="btn"><button class="bj" @click="bj(item)">编辑</button><button class="sc" @click="sc(item)">删除</button></td>
                </tr>
              </tbody>
            </table>
          <!-- 弹出框 -->
          <div class="navso" v-show="istrue">
           <ul>
             <li class="el-icon-close" @click="tui"></li>
             <li> <div class="ou">题目:</div> <input type="text" name="title" id="1" v-model="title" class="title"></li>
             <li> <div class="ou">选项(是):</div> <input type="text" name="yes" id="2"  v-model="yes"></li>
             <li> <div class="ou">选项(偶尔):</div> <input type="text" name="tes" id="3"  v-model="tes"></li>
             <li> <div class="ou">选项(否):</div><input type="text" name="no" id="4"  v-model="no"></li>
             <li> <div class="ou">试题ID:</div><input type="text" name="id" id="" v-model="id"></li>
             <li><button @click="ok">确定</button></li>
           </ul>
          </div>

      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sulent: [],
      id :"",
      title:"",
      yes:"",
      tes:"",
      no:"",
      istrue:false
    };
  },
  methods: {
    // 编辑
    bj: function (item) {
        this.id = item.id
        this.title = item.title
        this.yes = item.yes
        this.tes = item.tes
        this.no = item.no
        this.istrue = true
        document.documentElement.scrollTop === 0
    },

    // 删除
    sc: function (item) {
          this.axios.post("http://localhost:3000/shanchu",{
              delect:item.id
          })
          .then((res)=>{
            if(res.data.length !== 0){
              alert("删除成功")
              // 强制刷新
              this.$router.go(0)
            }else{
              alert("报错")
            }
          })
    },

    // 编辑确定
    ok:function(){
      this.axios.post("http://localhost:3000/bianji",{
        title:this.title,
        yes:this.yes,
        tes:this.tes,
        no:this.no,
        id:this.id
      })
      .then((res)=>{
        if(res.data !== 0){
          this.istrue = false
          alert("修改成功")
          // 强制刷新
          this.$router.go(0)
        }
      })

    },

    // 退出
    tui:function(){
      this.istrue = false
    }

   },

    // 异步处理函数
  created() {
    // 渲染
    this.axios.post("http://localhost:3000/xiugai").then((res) => {
      this.sulent = res.data;
      console.log(res.data)
    });
   },

   

};
</script>
<style>
@import "../css/teguanli.css";
</style>