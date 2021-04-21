<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 v-if="vif">v-if</h1>
    <h1 v-show="vshow">v-show</h1>
  </div>
</template>
<script>
export default {
name:'about',
data () {
  return {
    vif:true,
    vshow:true
  }
}
}
</script>

<style>

</style>
