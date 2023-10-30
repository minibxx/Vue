<template>
  <div class="hello">
    <form @submit.prevent="insert">
      <p><input type="text" name="이름" v-model="name"/></p>
      <p><input type="submit" name="저장"/></p>
    </form>
  </div>
  <ul>
    <li v-for="item in data" :key="item.data">
      {{ item.name }} / {{ item.count }}
      <button class="like" @click="update(item.date, item.count)"> ♥</button>
      <button class="delete" @click="del(item.date)">-</button>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
export default {
  mounted(){
    this.select();
  },
  methods:{
    select(){
      axios.get("http://localhost:3000/api")
      .then(res=>{
        this.data = res.data;
        console.log(res.data)
      }) 
    },
    update(date, count){
      axios.put(`http://localhost:3000/api/update?date=${date}`,{count:count+1})
      .then(res=>{
        this.data = res.data;
      }) 
    },
    insert(){
      const data = {name:this.name, date:Date.now(), count:0}
      axios.post("http://localhost:3000/api/insert",data)
      .then(res=>{
        this.data = res.data;
      }) 
    }
    ,
    del(date){
      axios.delete(`http://localhost:3000/api/delete?date=${date}`)
      .then(res=>{
          this.data = res.data;
        }) 
    }
  },
  data(){
    return{ name:'', data:[] }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .like{background-color: rgb(255, 142, 159); border: none; color: white; border-radius: 50px;width: 20px; height: 20px; margin-right: 5px;}
  .delete{background-color: rgb(110, 184, 209); border: none; color: white; border-radius: 50px;width: 20px; height: 20px; margin-right: 5px;}

</style>
