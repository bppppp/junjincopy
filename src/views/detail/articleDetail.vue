<template>
  <div id="articleDeatil">
      <button id="goBack" @click="back2main()">返回</button>
      <div v-html="articleContent"></div>
      <comment :articleComments="articleComments" @addComments="addComments()"></comment>
  </div>
</template>

<script>

import {getArticleById,getCommentsByArticleId} from 'fake-api/index'

import comment from 'views/detail/comment'

export default {
  data() {
    return {
      articleContent:'',
      currentIndex: 0,
      onceLength:10,
      articleComments: [],
    }
  },
  components: {
    comment,
  },
  created(){
      getArticleById(this.$store.state.articleId).then((value)=>{
        let article = value.data.article
        this.articleContent = article.article_content
      }),
      this.getComment()
  },
  methods:{
      back2main(){
        this.$router.go(-1)
      },
      addComments(){
        getCommentsByArticleId(this.$store.state.articleId,this.currentIndex,this.onceLength).then((value)=>{ this.saveMessages(value) })
      },
      getComment(){
        this.currentIndex = 0
        getCommentsByArticleId(this.$store.state.articleId,this.currentIndex,this.onceLength).then((value)=>{ this.saveMessages(value) })
      },
      saveMessages(value){
          let comments = value.data.comments
          for(let comment of comments){
            let articleComment = {}
            articleComment.userName = comment.user_info.user_name
            articleComment.avatarLarge = comment.user_info.avatar_large
            articleComment.description = comment.user_info.description
            articleComment.commentContent = comment.comment_info.comment_content
            articleComment.diggCount = comment.comment_info.digg_count
            articleComment.replyCount = comment.comment_info.reply_count
            articleComment.replys = []
            if(comment.reply_infos.length !== 0){
              for(let reply of comment.reply_infos){
                let singleReply = {}
                singleReply.userName = reply.user_info.user_name
                singleReply.avatarLarge = reply.user_info.avatar_large
                singleReply.replyContent = reply.reply_info.reply_content
                singleReply.diggCount = reply.reply_info.digg_count
                articleComment.replys.push(singleReply)
              }
            }
            this.articleComments.push(articleComment)
          }
          this.currentIndex = this.currentIndex + 10
      }
  }
}
</script>
<style scoped>
button[id="goBack"]{
  position: absolute;
  top: 50px;
  right: 10px;
  height: 50px;
  width: 50px;
  color: black;
  line-height: 100%;
  text-align: center;
  background-color: rgb(170, 197, 255);
  border: none;
}
div[id="articleDeatil"]{
  margin-top: 40px;
  margin-bottom: 50px;
}
</style>
