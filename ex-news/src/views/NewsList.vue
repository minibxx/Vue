<template lang="">
    <div>
        <h2>뉴스리스트</h2>
        <div>
            <ul v-if="mode ==='list'">
                <li v-for="item in newsData" :key="item.id" @click="detail(item.contents)">
                    {{ item.subject }}<button class="delete">삭제</button>
                </li>
            </ul>
            <NewsWrite v-else-if="mode === 'write'" @parent="insert"/>
            <NewsDetail v-else :contects="content"/>
        </div>
        <button class="write" @click="modeChange('write')">글쓰기</button>
    </div>
</template>
<script>
    import { mapState, mapMutations } from 'vuex';
    import NewsWrite from './NewsWrite.vue';
    import NewsDetail from './NewsDetail.vue';

    export default {
        data(){
            return {content: ''} //변수는 데이터 안에 만들면 됨(?)
        },
        components: { NewsWrite, NewsDetail },
        computed: {
            ...mapState(['newsData', 'mode'])
        },
        methods:{
            ...mapMutations(['modeEdit', 'insertNews']),
            modeChange(str){
                this.modeEdit(str);
            },
            insert(v){
                this.insertNews(v.value);
                this.modeChange(v.mode);
            },
            detail(str){
                this.content = str;
                this.modeChange('detail');
            }
        }
    }

</script>
<style lang="scss">
    ul{list-style: none;}
    .delete{background-color: orange; border-style: none; border-radius: 50px; padding: 5px 10px; color: white; margin-left: 10px;}
    .write{background-color: rgb(132, 205, 86); border-style: none; border-radius: 50px; padding: 5px 10px; color: white; margin-top: 10px;}
</style>