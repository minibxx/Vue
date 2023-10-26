<template lang="">
    <div>
        <li @click="itemAction(item.id)" :class="{active:isActive}">
        <!-- li 클릭시 아이템 액션 함수 실행 -->
            {{item.title}}
        </li>
    </div>
</template>
<script>
export default {
    props: ['item', 'check'],
    data(){
        return{
            isActive: false
        }
    },
    methods: {
        itemAction(id){ //해당 아이디를 나중에 부모에 넘겨줄 수도 있음
            this.$emit('parent', id)
        }
    }
}
</script>
<style lang="scss">
    .active{color: red;}
</style>