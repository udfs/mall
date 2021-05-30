<template>
  <div class="carousel">
    <el-carousel indicator-position="outside" height="215px" >
      <el-carousel-item v-for="(item,ind) in banners" :key="ind">
        <a :href="item.image923">
          <el-image :src="item.image" fit="fill" ></el-image>
        </a> 
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
 name:'swiper',
 props: {
   banners:Array,
   default(){
     return []
   }
 }
}
</script>

<style>

</style>