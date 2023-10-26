<template lang="">
  <div>
    <button @click = "decrement">-</button>
    {{count}}
    <button @click = "increment">+</button>
    <p v-if="limit">count 값이 최대값에 도달했습니다. </p>
    <p v-else-if="count == 15">count 값은 15입니다</p>
    <p v-else>20까지만 증가됩니다.</p>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex';
export default {
  computed: { 
    // 뷰가 브라우저에 렌더링을 할 때 알아서 만들어뒀다가 요청시 여러 곳에서 가져다 쓰게 함
    ...mapState(['count']), // 풀어두기.. ㅎㅎㅎ
    ...mapGetters(['limit'])
  },
  methods:{
    ...mapMutations(['changeCount']),
    ...mapActions(['requestCount']),
    increment(){
      //this.changeCount( this.count + 1 ) 
      this.requestCount({type: '+', num: this.count})
    },
    decrement(){
      //this.changeCount( this.count - 1 )
      this.requestCount({type: '-', num: this.count})
    }
  }
}
</script>
<style lang="">
  
</style>