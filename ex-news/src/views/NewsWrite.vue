<template lang="">
    <div>
        <form class="form" @submit="dataSave">
            <input type='text' name='username' v-model="username" placeholder="이름"/>
            <input type="text" name='subject' v-model="subject" placeholder="제목"/>
            <textarea name="contents" v-model="contents" placeholder="내용"></textarea>
            <input type='submit' value='저장'/>
        </form>
        {{ contents }}
    </div>
</template>
<script>
export default {
    data(){
        return{
            username: '',
            subject: '',
            contents: ''
        }
    },
    methods:{
        dataSave(e){
            e.preventDefault();
            this.$emit('parent',{
                mode:'list',
                value:{
                    id: Date.now(), 
                    name: this.username, 
                    subject: this.subject, 
                    contents: this.contents}
                }
            )            
            console.log('sdf')
        }
    }
}
</script>
<style lang="scss">
    .form{
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 400px;
        margin: 0 auto;
    }
</style>