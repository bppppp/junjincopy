<template>
  <div>
    <second-tab-bar @getNewData="getNewData()"></second-tab-bar>
    <div id="leave"></div>
    <information :articleDataArray="articleDataArray" @addArticles="addArticles"></information>
  </div>
</template>

<script>

import secondTabBar from 'components/SecondTabBar/SecondTabBar'
import information from 'views/information/information'

import {getArticles} from 'fake-api/index'

export default {
  data() {
    return {
      currentStatus:'new',
      currentNumber:0,
      onceAmount:10,
      articleDataArray:[],
    }
  },
  components: {
    secondTabBar,
    information,
  },
  created(){
    this.asyncGetArticle()
    document.documentElement.scrollTop = 0
  },
  methods:{
    // 将请求到的数据进行分类
    localGetArticles(value){
        this.currentNumber = this.currentNumber + 10
        let articles = value.data.articles
        for(let article of articles){
          let second = article.article_info.rtime - article.article_info.ctime
          let articleContent = {}
          articleContent.briefContent = article.article_info.brief_content
          articleContent.viewCount = article.article_info.view_count
          articleContent.collectCount = article.article_info.collect_count
          articleContent.commentCount = article.article_info.comment_count
          articleContent.title = article.article_info.title
          articleContent.authorName = article.author_user_info.user_name
          articleContent.coverImage = article.article_info.cover_image
          articleContent.time = this.getDate(second)
          articleContent.articleId = article.article_id
          this.articleDataArray.push(articleContent)
        }
    },
    // 请求数据
    asyncGetArticle(){
      this.$store.commit('changeSort',this.currentStatus)
      getArticles(this.$store.state.categoryId,this.$store.state.sortBy,this.currentNumber,this.onceAmount)
      .then(value=>{
        this.localGetArticles(value)
      })
    },
    // 时间区分
    getDate(second){
      if(parseInt(second/3600) === 0){
        if(parseInt(second/60) === 0){
          return second + '秒'
        }else{
          return parseInt(second/60) + '分钟'
        }
      }else if(parseInt(second/3600) >= 24){
        return parseInt(second/86400) + '天'
      }else{
        return parseInt(second/3600) + '小时'
      }
    },
    getNewData(){
      this.currentNumber = 0
      this.clearData()
      this.asyncGetArticle()
    },
    addArticles(){
      this.asyncGetArticle()
    },
    clearData(){
      this.articleDataArray.splice(0,this.articleDataArray.length)
    }
  }
}
</script>
<style scoped>
div[id="leave"]{
  height: 7px;
  background-color: #f4f5f5;
}
</style>
