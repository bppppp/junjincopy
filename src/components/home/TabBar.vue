<template>
  <div id="tabBar">
      <div class="type" id="hot" @click="changeColor($event)"><router-link :class="{innerStyle:true,active:isActive=='热门'}" to='/hot'>热门</router-link></div>
      <div class="type" id="newest" @click="changeColor($event)"><router-link :class="{innerStyle:true,active:isActive=='最新'}" to='/newest'>最新</router-link></div>
      <div class="type" id="history" @click="changeColor($event)"><router-link :class="{innerStyle:true,active:isActive=='历史'}" to='/history'>历史</router-link></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        isActive:'热门',
        currentStatus:'hot',
    }
  },
  components: {

  },
  methods:{
      changeColor($event){
          this.isActive = $event.target.text
      }
  }
}
</script>
<style scoped>
    #tabBar{
        position: fixed;
        bottom: 0px;
        display: flex;
        justify-content: center;
        text-align: center;
        height: 50px;
        width: 100%;
        border-top: 1px solid #f4f5f5;
        font-size: 17px;
        z-index: 100;
    }
    #hot{
        flex: 1;
        
    }
    #newest{
        flex: 1;
    }
    #history{
        flex: 1;
    }
    .type{
        line-height: 50px;
        text-decoration-line:none ;
        background-color: rgba(250, 250, 250, 100%);
        color: black;
    }
    .innerStyle{
        display: inline-block;
        height: 100%;
        width: 100%;
    }
    .active{
        color: red;
    }
</style>
