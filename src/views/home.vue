<template>
 <div id="home">
    <nav-bar class="home-nav">
      <template #left>
        back
      </template>
      <template #center> 
        首页
      </template>
    </nav-bar>
    home 
 </div>
</template>

<script>
import navBar from 'components/common/navbar/navBar.vue' 
export default {
  name:'Home',
  components:{
    navBar
  }

}
</script>

<style>
 .home-nav{
   background-color: pink;
   color: white;
 }
</style>