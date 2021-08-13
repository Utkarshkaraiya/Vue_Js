<template>
    <div>
        <h1>User1</h1>
        <h1>User id is{{userid}}</h1>
    </div>
</template>
<script>
export default {
    name:'User1',
    data(){
        return{
         userid:this.$route.params.id
        }
    }
}
</script>