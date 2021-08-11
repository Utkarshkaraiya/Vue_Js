<template>
<div>
 
  <div>{{ msg | upper }}</div>
<table border="1px">
<tr>
  <td>id</td>
  <td>State name</td>
  <td>Action</td>
</tr>
<tr v-for="item in list" :key="item.id">

  <td>{{list.data.districts[0].district_id}}</td>
  <td>{{list.data.districts[0].district_name}}</td>
  <td><button @click="deletee(list.data.districts[0].district_id)">Delete</button></td>
  
  



  </tr>

</table>

</div>
</template>
<script >
import Vue from "vue"; // in Vue 2
Vue.use(VueAxios, axios);
import axios from "axios";
import VueAxios from "vue-axios";
export default {
  name: "Api",
  props: ["msg"],
  data(){
return {
    list:undefined,
    firstname:"utkarsh"
    }
  },methods:{
deletee(id){
  this.axios.delete("https://cdn-api.co-vin.in/api/v2/admin/location/districts/1"+id)
.then(res=>{
  this.list=res
  this.getuser()
})



},getuser(){
   Vue.axios
      .get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/1")
      .then((res) => {
         this.list=res
        console.warn(res);
      });

}

  },
  mounted() {
this.getuser()

   
  },
};
</script>