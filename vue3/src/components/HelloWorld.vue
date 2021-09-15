<template>

<h1 >total count is{{heros.length}}</h1>
<ul>
<li v-for="(names,index) in heros" v-bind:key="names">
   {{names.name}} <div @click="remove(index)"><button>delete</button></div></li>

</ul>
<form @submit.prevent="adduser()">
<input v-model="newhero"/>
<button type="submit" >Add hero</button>

</form>





</template>

<script>
export default {
  data(){
    return{
      title:"utkarsh",
      newhero:"vipul",
      heros:[
        {name:'utkars'},
       {name:'utkars1'},
       {name:'utkars2'},
       {name:'utkars3'} 
      ]
    }},
    methods: {
      adduser(){
        if(this.newhero!==""){
        this.heros.push({name:this.newhero}) ;
        this.newhero='' 
      }},
      remove(index){
          this.heros= this.heros.filter((hero,i)=>i!=index)
      }
    },
  
}
</script>

 