<template>
 <div id="home">
   
    <nav-bar class="home-nav nav">
      <template #left>
        <div  v-show=isShow @click="back()">
          <i class="el-icon-arrow-left"></i>
        </div>
      </template>
      <template #center> 
        首页
      </template>
      <template #right>
        <i class="el-icon-chat-dot-round"></i>
      </template>
    </nav-bar>
 
    <div class="content">
      <home-swiper :banners="banners"></home-swiper>
      <el-button type="primary" size="default" @click="touch()">touch</el-button>
    </div>
 </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar.vue' 
import {getHomeMultiata,getHomeMultiata2} from 'network/home.js';
import homeSwiper from './childcomps/swiper'
export default {
  name:'Home',
  data(){
    return {
      isShow:true,
      banners:[]
    }
  },
  components:{
    navBar,homeSwiper
  }, 
  methods:{
    back(){
        this.$router.go(-1)
    },
    touch(){

    }
  },
  created(){//创建完成后请求页面数据
    getHomeMultiata().then(res=>{
      this.banners=res.data.banner.list
      console.log(res);
      console.log(this.banners);
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
  .carousel{
    margin-bottom: 7px;
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