<template>
  <div id="tab-bar">
    <el-row :gutter="1" justify="center">
      <slot></slot>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "tabBar",
};
</script>

<style>

#tab-bar {
  font-size: 14px;
  text-align: center;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: -1px;
  padding: 5px 0;
  margin:0px;
  border: 0px;
  box-shadow: 1px 1px 3px 0 rgba(100, 100, 100, .5);
}
.el-row{
  display:flex
}
</style>
