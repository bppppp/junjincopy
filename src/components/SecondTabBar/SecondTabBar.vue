<template>
  <div>
      <ul id="secondTab1">
          <li @click="showSecondTab2(0)" :class="{active:outisActive== 0}">推荐</li>
          <li @click="showSecondTab2(1)" :class="{active:outisActive== 1}">后端</li>
          <li @click="showSecondTab2(2)" :class="{active:outisActive== 2}">前端</li>
          <li @click="showSecondTab2(3)" :class="{active:outisActive== 3}">Android</li>
          <li @click="showSecondTab2(4)" :class="{active:outisActive== 4}">iOS</li>
      </ul>
      <ul id="secondTab2">
          <li v-for="(value,index) in secondTabContent" :class="{active:innerisActive == index}" :key="value" @click="showDetail(index)">{{value}}</li>
      </ul>
  </div>
</template>

<script>

import {getCategories} from 'fake-api/index'

export default {
  data() {
    return {
        outisActive:0,
        innerisActive:0,
        secondTabContent:[],
        totalContents:{},
        category_id:0,
        number:0,
    }
  },
  components: {

  },
  created(){
    getCategories().then((value)=>{
        this.totalContents = value.data.categories
    })
  },
  methods:{
      showSecondTab2(index){
          this.outisActive = index
          this.innerisActive = 0
          this.number = index
          if(index === 0){
              this.category_id = 0
              this.secondTabContent = []
          }else{
              this.secondTabContent = []
              this.category_id = this.totalContents[index]['category_id']
              for(let value of this.totalContents[index]['children']){
                  this.secondTabContent.push(value['category_name'])
              }
              
          }
          this.$store.commit('changeCategoryId',this.category_id)
          this.$emit('getNewData')
      },
      showDetail(index){
          this.innerisActive = index
          this.category_id = this.totalContents[this.number].children[index]['category_id']
          this.$store.commit('changeCategoryId',this.category_id)// 此处把事件和参数发送到父组件父组件监听到事件后重新访问数据
          this.$emit('getNewData')
      },

  }
}
</script>
<style scoped>
ul[id="secondTab1"]{
    display: flex;
    flex-wrap: nowrap;
}
ul[id="secondTab1"] li{
    flex: 1;
    font-size: 13px;
    list-style: none;
    height: 46px;
    text-align: center;
    line-height: 46px;
}
ul[id="secondTab2"]{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    background-color: #f4f5f5;
    padding: 2px 10px;
    color: white;
}
ul[id="secondTab2"] li{
    font-size: 13px;
    margin: 5px 5px 5px 5px;
    padding: 2px 5px;
    border: 1px solid #007fff;
    border-radius: 1rem;
    background-color: #007fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%), 0 1px 2px 0 rgb(0 0 0 / 5%);
}
.active{
    color:red;
}
</style>
