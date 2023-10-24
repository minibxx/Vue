<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img class="test" v-bind:src="reUrl"/>
    <div>{{ num }}</div>
    <button @click="imgChange">이미지 변경</button>
  </div>
</template>

<script>
export default {
  data(){
    return {num: 10000, reUrl:'/img/2.png'}
  },
  name:'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    imgChange(){
      this.num = 300;
      this.reUrl = '/img/3.png';
      console.log(  this.num  )
    }
  },
  mounted(){
    const ele = document.querySelector('.hello');
    console.log(ele)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import "/src/assets/css/test.scss";
</style>
