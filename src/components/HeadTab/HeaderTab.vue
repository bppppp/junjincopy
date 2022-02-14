<template>
  <div id="headerTab">
      <img id="main" src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg" alt="">
      <div id="mid" >
        <div id="bindMethds" @click="changeStyle()">
          <div id="first">首页</div>
          <div id="triangleup" v-if="upordown" ></div>
          <div id="triangledown" v-else ></div>
        </div>
        <input type="text" v-model="searchContent" id="search" @focus="clearSearch()" @blur="fullSearch()">
        <div id="searchImg">
          <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6401156ae5d55b2253b3d2351231f02c.svg" alt="">
        </div>
        <div id="login">
          <div id="inlineLogin">登录</div>
        </div>
      </div>
      <div id="tabChoose" v-show="showList">
        <ul>
          <li>首页</li>
          <li>沸点</li>
          <li>课程</li>
          <li>咨询</li>
          <li>活动</li>
          <li>开放社区</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent:'搜索稀土掘金',
      upordown:false,
      showList:false,
    }
  },
  components: {

  },
  methods:{
    changeStyle(){
      this.upordown = !this.upordown
      this.showList = !this.showList
    },
    clearSearch(){
      if(this.searchContent == '搜索稀土掘金'){
        this.searchContent = ''
      }
    },
    fullSearch(){
      if(this.searchContent == ''){
        this.searchContent = '搜索稀土掘金'
      }
    }
  }
}
</script>
<style scoped>
div[id="triangleup"]{
  height: 0px;
  width: 0px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 5px solid black;
}
div[id="triangledown"]{
  height: 0px;
  width: 0px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid black;
}
div[id^="triangle"]{
  float: left;
  margin-top: 21px;
  margin-left: 10px;
  margin-right: 10px;
}
img[id="main"]{
  height: 28px;
  width: 31px;
  margin: 10px 2px 10px 15px;
  float: left;

}
div[id="mid"]{
  height: 48px;
  line-height: 48px;
  border-bottom: 1px solid #f1f1f1;
}
div[id="first"]{
  float: left;
  margin-left: 10px;
  color: #1e80ff;
  font-size: 16px;
}

div[id="bindMethds"]{
  height: 48px;
  float: left;
}
input[id="search"]{
  outline: none;
  width: 105px;
  float: left;
  height: 32px;
  margin-left: 25px;
  margin-top: 7px;
  color: #666666;
  font-size: 14px;
  padding-left: 10px;
  background-color: #f4f5f5;
  border: 1px solid transparent;
  border-radius: 4px 0px 0px 4px;
}
div[id="searchImg"]{
  float: left;
  height:32px;
  width: 32px;
  margin-top: 7px;
  background-color: #f4f5f5;
  border-radius: 0px 4px 4px 0px;
}
div[id="searchImg"] img{
  margin-bottom: 6px;
  margin-left: 5px;
}
div[id="login"]{
  float: right;
  margin-right: 16px;

}
div[id="login"] #inlineLogin{
  display: inline-block;
  line-height: 32px;
  width: 65px;
  background-color: pink;
  text-align: center;
  background-color: #1d7dfa;
  color: #FFF;
  border-radius: 4px;
}
div[id="tabChoose"]{
  float: left;
  position: absolute;
  width: 150px;
  height: 360px;
  background-color: #fff;
  box-shadow: 0 8px 24px rgb(81 87 103 / 16%);
  z-index: 50;
}
div[id="tabChoose"] ul{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
ul li{
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
}
</style>
