<template lang="">
    <div>
        class
        <div :class="`basic ${active}`">
            클래스 1 => "`basic ${active}`"
        </div>

        <div class="basic" :class="active">
            클래스 2 => class="basic" :class="active"
        </div>

        <div :class="['basic',active]" >
            클래스 3 => :class="['basic',active]"
        </div>

        <div :class="{active: false}" >
            클래스 4 => :class="{active: false}"
        </div>
        
        <div :class="['basic',{active:true}]" >
            클래스 5 => :class="['basic',{active:true}]"
        </div>

        <div :class=" active=='on'? 'active' : '' " >
            클래스 6 => :class=" active=='on'? 'active' : '' "
        </div>

        <div :class="true && 'active'" >
            클래스 7 => :class=" true && 'active'"
        </div>
    </div>
</template>
<script>
export default {
    name:"ClassV",
    mounted(){
        console.log(this.$route)
    }
}
</script>
<style lang="">
    
</style>