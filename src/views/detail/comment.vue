<template>
  <div id="comment">
      <div id="commentTitle">评论</div>
      <input id="writeOwnComment" type="text" v-model="writeComment" @focus="clearComment()" @blur="fullComment()">
      <div id="hotLists">
          <div id="hotTitle">热门评论</div>
          <img src="" alt="">
          <div v-for="(value,index) in articleComments" :key="index+value" id="comments">
              <span id="commentsImg"><img :src="value.avatarLarge" alt=""></span>
              <div id="commentsContent">
                  <div id="userInfo">
                      <div id="userName">{{value.userName}}</div>
                      <div id="descript">{{value.discription}}</div>
                  </div>
                  <div id="commentContents">{{value.commentContent}}</div>
                  <div id="counts">
                      <div id="diggCount">
                          <img src="~assets/imgs/good.png" alt="">
                          <span>{{showDigg(value.diggCount)}}</span>
                      </div>
                      <div id="replyCount">
                          <img src="~assets/imgs/commit.png" alt="">
                          <span>{{showComment(value.replyCount)}}</span>
                      </div>
                  </div>
                  <div v-if="value.replyCount" id="replys">
                    <div v-for="(reply,index) in value.replys" :key="reply+index" id="reply">
                        <div id="replyImg"><img :src="reply.avatarLarge" alt=""></div>
                        <div id="replyContents">
                            <div id="replyName">{{reply.userName}}</div>
                            <div id="replyContent">{{reply.replyContent}}</div>
                            <div id="replyCounts">
                                <div id="replyDiggCount">
                                    <img src="~assets/imgs/good.png" alt="">
                                    <span>{{reply.diggCount}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        writeComment:'输入评论（Enter换行，Ctrl + Enter发送）',
    }
  },
  props:['articleComments'],
  components: {

  },
  methods:{
    clearComment(){
      if(this.writeComment === '输入评论（Enter换行，Ctrl + Enter发送）'){
          this.writeComment = ''
      }
    },
    fullComment(){
      if(this.writeComment === ''){
          this.writeComment = '输入评论（Enter换行，Ctrl + Enter发送）'
      }
    },
    showDigg(num){
        return num == 0? num : "点赞"
    },
    showComment(num){
        return num == 0? num : "评论"
    },
    debounce(ms,func){
      let timer = null
      return ()=>{
        clearTimeout(timer)
        timer = setTimeout(()=>{
          func()
        },ms)
      }
    },
    isButton(){
      if(document.documentElement.clientHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight - 1){
        this.$emit('addComments')
      }
    },
  },
  mounted(){
    document.addEventListener('scroll',this.debounce(50,this.isButton))
  }
}
</script>
<style scoped>
div[id="comment"]{
    margin-top: 10px;
    padding: 0px 30px;
}
div[id="comments"]{
    margin-bottom: 20px;
}
div[id="commentTitle"]{
    font-weight: 700;
    font-size: 18px;
    color: #252933;
    margin-bottom: 20px;
}
input[id="writeOwnComment"]{
    height: 75px;
    width: 100%;
    background-color: #f2f3f5;
    border: 1px solid #f2f3f5;
    padding: 15px;
    color: #666666;
    font-size: 15px;
}
div[id="hotLists"]{
    padding-top: 32px;
}
div[id="hotTitle"]{
    color: #252933;
    font-weight: 700;
    font-size: 18px;
}
span[id="commentsImg"]{
    float: left;
    height: 35px;
    width: 35px;
}
span[id="commentsImg"] img{
    border-radius: 50%;
    height: 35px;
    width: 35px;
}
div[id="commentsContent"]{
    margin-left: 40px;
}
div[id="userInfo"]{
    height: 20px;
}
div[id="userName"]{
    float: left;
}
div[id="descript"]{
    color:#8a919f;
    float: left;
    margin-left: 10px;
}
div[id="commentContents"]{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #515767;
    margin-top: 8px;
    font-size: 14px;
}
div[id="counts"]{
    margin-top: 8px;
    font-size: 14px;
}
div[id="counts"]::after{
    content: '';
    clear: both;
    height: 0px;
    visibility: hidden;
    display: block;
}
div[id="diggCount"]{
    float: left;
}
div[id="diggCount"] img{
    height: 20px;
    width: 20px;
    vertical-align: bottom;
    margin-right: 5px;
}
div[id="replyCount"]{
    float: left;
}
div[id="replyCount"] img{
    height: 20px;
    width: 20px;
    vertical-align: bottom;
    margin-left: 10px;
    margin-right: 5px;
}
div[id="replys"]{
    margin-top: 15px;
    background-color: rgba(247,248,250,.7);
    padding: 10px;
}
div[id="reply"]{
    display: flex;
    margin-bottom: 15px;
}
div[id="replyImg"]{
    margin-right: 5px;
}
div[id="replyImg"] img{
    border-radius: 50%;
    height: 25px;
    width: 25px;
}
div[id="replyContents"]{
    flex: 1;
}
div[id="replyName"]{
    display: inline-block;
}
div[id="replyContent"]{
    margin-top: 7px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
div[id="replyCounts"]{
    margin-top: 8px;
    font-size: 14px;
}
div[id="replyCounts"]::after{
    content: '';
    clear: both;
    height: 0px;
    visibility: hidden;
    display: block;
}
div[id="replyDiggCount"]{
    float: left;
}
div[id="replyDiggCount"] img{
    height: 20px;
    width: 20px;
    vertical-align: bottom;
    margin-right: 5px;
}
/* div[id="replyReplyCount"]{
    float: left;
}
div[id="replyReplyCount"] img{
    height: 20px;
    width: 20px;
    vertical-align: bottom;
    margin-left: 10px;
    margin-right: 5px;
} */
</style>
