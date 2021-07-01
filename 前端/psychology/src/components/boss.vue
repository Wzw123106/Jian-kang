<!--
 * @Author: chiLi
 * @Date: 2021-01-16 01:35:42
 * @LastEditors: Small electric motor
 * @Description: For reference only
 * @FilePath:: 当乌云散去，自会有繁星出现
-->
<template>
    <div class="boss">
        <div class="boss-a">
            <!-- heade头 -->
            <div class="bo-head">
            <img src="../assets/bossimg/2.png" alt="">
            <div class="bosshz">
                 <sapn>{{$store.state.bossname}}</sapn>
            </div>
            </div>
            <!-- 左边部分 -->
            <div class="bo-left">
                <ul>
                    <router-link to="/boss/bosstux" tag="li" class="bo-three"><h4>学生信息管理:</h4></router-link> 
                    <router-link to="/boss/bossteacher" tag="li"><h4>教师信息管理:</h4></router-link> 
                    <router-link to="/boss/bosspinces" tag="li"><h4>评测信息管理:</h4></router-link> 
                    <router-link to="/boss/bosscj" tag="li"><h4>学生成绩管理:</h4></router-link> 
                    <router-link to="/boss/bossst" tag="li"><h4>试题信息管理:</h4></router-link> 
                </ul>
            </div>

            <!-- 中间部分 -->
            <div class="bo-center">
               <router-view></router-view>
            </div>
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
    created () {
        let sum = document.querySelector(".bo-left li")
        console.log(sum)
    },

}
</script>
<style>
@import '../css/boss.css';
@import '../css/reset.css'
</style>