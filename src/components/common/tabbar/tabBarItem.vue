<template>
  <el-col class="tab-bar-item" :class="{ active: is_active }">
    <div @click="itemClick" :style="active_style">
      <slot name="itemimg"></slot>
      <slot name="itemtitle"></slot>
    </div>
  </el-col>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    link: {
      type: String,
      default: "", //路由设置redirect路径为“”时为默认值
    },
    activecolor: {
      type: String,
      default: "#e6a23c",
    },
  },
  data() {
    return {
      isactive: true,
    };
  },
  computed: {
    is_active() {
      return this.$route.path.indexOf(this.link) !== -1; //当前活跃的路由path中找到tabbar点击的link
    },
    active_style() {
      //动态添加样式
      return this.is_active ? { color: this.activecolor } : {};
    },
  },

  methods: {
    itemClick() {
      this.isactive = !this.isactive;
      //   console.log(this.link);
      this.$router.push(this.link);
    },
  },
};
</script>

<style>
.el-icon-s-home,
.el-icon-s-order,
.el-icon-s-goods,
.el-icon-s-custom {
  font-size: 25px;
}
.active {
  color: #e6a23c;
}
.el-col {
  flex: 1;
}
</style>
