<template>
 <div id="home">
    <nav-bar class="home-nav">
      <template #left>
        <div  v-show=isShow @click="back()">
          back
        </div>
      </template>
      <template #center> 
        首页
      </template>
    </nav-bar>
    <el-carousel indicator-position="inside">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="aa" @click="touch()">touch</div>
    home 
 </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar.vue' 
import {getHomeMultiata} from 'network/home.js';
export default {
  name:'Home',
  data(){
    return {
      isShow:true,
      result:{}
    }
  },
  components:{
    navBar
  },
  methods:{
    back(){
        this.$router.go(-1)
    },
    touch(){
      var u={
        c:1,
        getc:function(){
          return this.c
        }
      }
      var fn=u.getc;

      console.log(u.getc());
      let logs=(a,b,c)=>{
        [a,b,c]=[a||1,2,3]
        console.log(a);
        console.log(b);
      }
      logs(5)
    }
  },
  created(){//创建完成后请求页面数据
    getHomeMultiata().then(res=>{
      this.result=res
      console.log(this.result);
    }).catch(err=>{
      console.log(err);
    })
  }


}
</script>

<style>
 .home-nav{
   background-color: pink;
   color: white;
 }
   .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .aa{
    height: 40px;
    width: 50px;
    padding: 5px;
    border: 3px solid red;
    /* box-sizing: content-box; */
  }
</style>