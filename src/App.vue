<template>
  <div id="app">
    <header-tab></header-tab>
    <tab-bar></tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import tabBar from 'components/home/TabBar'
import headerTab from 'components/HeadTab/HeaderTab'

export default {
    name: 'App',
    data(){
        return {
        }
    },
    methods: {

    },
    components:{
      tabBar,
      headerTab,
    }
}
</script>

<style scoped>
:root{
  background-color: #f4f5f5;
  font-size: 15px
}
@import "assets/css/base.css";
</style>