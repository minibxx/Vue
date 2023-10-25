<template lang="">
    <h3>LIST ITEM</h3>
    <div>
        <figure v-for="(obj, k) in items" :key="k" @click="pageMove(k)">
            <img src="/lottso.png" />
            <figcaption>{{ obj }}</figcaption>
        </figure>
    </div>
</template>
<script>
export default {
    name:"ListV",
    data(){
        return{
            items : ['아이템1', '아이템2', '아이템3']
        }
    },
    methods:{
        pageMove(n){
            console.log(n)
            this.$router.push({name: 'ClassView', params:{num:300}})
        }
    },
    mounted(){
        console.log (this.$route)
    },
}
</script> 
<style lang="">
</style>