<template>
  <tab-bar> 
      <tab-bar-item link="/home" activecolor="">
        <i class="el-icon-s-home" slot="itemimg"></i>
        <div slot="itemtitle">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category"  activecolor="">
        <i class="el-icon-s-order" slot="itemimg"></i>
        <div slot="itemtitle">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/cart" activecolor="">
        <i class="el-icon-s-goods" slot="itemimg"></i>
          <div slot="itemtitle">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile"  activecolor="">
        <i class="el-icon-s-custom" slot="itemimg"></i>
          <div slot="itemtitle">个人中心</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from '../../common/tabbar/tabBar.vue';
import tabBarItem from "../../common/tabbar/tabBarItem.vue";
export default {
  name:'useTab',
  components: {
    tabBar,
    tabBarItem
  }

}

</script>

<style>

</style>