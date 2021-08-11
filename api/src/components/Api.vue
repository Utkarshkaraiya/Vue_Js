<template>
<div>
  <div>{{ msg | upper }}</div>
{{firstname }}
<h5>{{list}}</h5>
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
  },
  mounted() {
    Vue.axios
      .get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/16")
      .then((res) => {
         this.list=res
        console.warn(res);
      });
  },
};
</script>