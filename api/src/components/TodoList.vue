<template>
    <div>
   <h1>To Do List</h1>
       <input type="text" v-model="todo" /><br>
       <button @click="todosubmit">Submit</button>
       {{todo}}
       <br><br>
       <ul>
           <li v-for="item in itemlist" :key="item.id">
           {{item}}
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    name:'TodoList',
    data(){
     return{
         todo:'',
         itemlist:[]
     }

     },methods:{
         todosubmit(event){
             event.preventDefault();
             
           this.itemlist.push(this.todo)
           
         }
     }
}
</script>

