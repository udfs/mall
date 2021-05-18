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
  bottom: -2px;
  padding: 5px 0;
  margin:0px;
  border: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.el-row{
  display:flex
}
</style>
