<template>
  <div id="app">
    <router-view></router-view>
    <use-tab></use-tab>
  </div>
</template>

<script>
import useTab from 'components/content/tabbar/useTab.vue'
export default {
  ame: "app",
  components: {
    useTab,
  },
  data() {
    return {

    };
  },
  methods:{

  },
  computed:{

  }
}

</script>

<style>
@import './assets/css/bass.css';

</style>
