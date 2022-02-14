<template>
  <div id="information">
    <div id="noHistory" v-if="this.$store.state.historyData.length === 0">您还没有预览任何内容</div>
    <div v-for="(value,index) in this.$store.state.historyData" :key="index + value['authorName']" @click="clickSingleArticle(value)">
      <div id="container">
        <div>
          <div id="maker">{{value['authorName']}}</div>
          <div id="date">{{value['time']}}前</div>
        </div>
        <div id="outContent">
          <div id="content">
            <h3>{{value['title']}}</h3>
            <p>{{value['briefContent']}}</p>
            <div id="third">
              <div id="bottomview">
                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/view.1eda8fa.png" alt="">
                <div>{{value['viewCount']}}</div>
              </div>
              <div id="bottomgood">
                <img src="~assets/imgs/good.png" alt="">
                <div>{{value['viewCount']}}</div>
              </div>
              <div id="bottomcommit">
                <img src="~assets/imgs/commit.png" alt="">
                <div>{{value['commentCount']}}</div>
              </div>
          </div>
          </div>
          <div v-show="value['coverImage']!==''" id="imgContainer"><img :src="value['coverImage']" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
    }
  },
  components: {

  },
  methods:{
    clickSingleArticle(value){
      this.$store.commit('addHistoryData',value)
      this.$store.commit('changeArticleId',value.articleId)
      this.$router.push('/detail')
    }
  }
}
</script>
<style scoped>
div[id="noHistory"]{
    background-color: #f4f5f5;
    text-align: center;
    font-size: 20px;
    padding-top: 20px;
    color: burlywood;
}
div[id="information"]{
  margin-bottom: 49px;
}
div[id="container"]{
  /* background-color: pink; */
  margin: 10px 20px 0px 20px;
  position: relative;
  border-bottom: 1px solid #e5e6eb;
  color: #4e5969;
  font-size: 13px;
}
div[id="maker"]{
  margin: 5px 0px;
  padding-right: 10px;
  border-right: 1px solid #e5e6eb;
  float: left;
}
div[id="date"]{
  margin: 5px 0px;
  display: inline-block;
  margin-left: 10px;

}
div[id="outContent"]{
  display: flex;
}
div[id="content"]{
  flex: 1;
  width: 200px;
  height: 93px;
  padding-bottom: 10px;
}
h3{
  font-size: 16px;
  margin: 10px 0px;
  color: #1d2129;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
p{
  margin: 5px 0px;
  font-size: 13px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
div[id="imgContainer"]{
  height: 80px;
  width: 120px;
  bottom: 10px;
  right: 0px;
  margin-left: 10px;
}
div[id="imgContainer"] img{
  height: 100%;
  width: 100%;
}

div[id="third"]{
  margin-top: 10px;
}
div[id^="bottom"]{
  float: left;
}
div[id^="bottom"] img{
  height: 16px;
  width: 16px;
  vertical-align: text-bottom;
}
div[id^="bottom"] div{
  display: inline-block;
  margin-left: 5px;
  height: 16px;
  margin-right: 10px;
  color: #4e5969;
  font-size: 13px;
}

</style>>