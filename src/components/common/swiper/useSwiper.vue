<template>
  <swiper>
    <swiper-item v-for="(item,ind) in lists"  :key='ind'>
      <a :href="item.link">
        <img :src="item.src" alt="" srcset="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  components: {
    Swiper, SwiperItem
  },
  data () {
    return {
      lists:[
        {src:'assets/image/logo.img',link:''},
        {src:'assets/image/logo.img',link:''},
      ]
    }
  }
}
</script>

<style>

</style>