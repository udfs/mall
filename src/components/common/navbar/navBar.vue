<template>
    <div class="nav-bar">
       <div class="left">
           <slot name="left"></slot>
       </div>
       <div class="center">
           <slot name="center"></slot>
       </div>
       <div class="right">
           <slot name="right"></slot>
       </div>
    </div>
</template>
<script>
export default {
    name:"navBar",
    data(){
        return{
            isShow:true,//用于判断是否显示返回按钮
        }
    },
    methods:{
        
    }
    
}
</script>
<style scoped>
.nav-bar{
    font-size: 20px;
    display: flex;
    line-height: 44px;
    box-shadow: 1px 1px 3px 0 rgba(100, 100, 100, .5);

}
.left,.right{
    width: 60px;
}
.center{
    flex: 1;
}
</style>
