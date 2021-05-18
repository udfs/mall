// 该页面是navbar的使用方法

<template>
    <nav-bar>
        <template #left>
            left
        </template>
        <template #center>
            标题
        </template>
        <template #right>
            right 
        </template>
    </nav-bar>
</template>
<script>
import navBar from './navBar'
export default {
    name:'useNav',
    components:{
        navBar
    }

}
</script>