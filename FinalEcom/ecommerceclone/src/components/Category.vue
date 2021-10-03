<template>
    <div>
<div class="col-sm-4" v-for="list in items" :key="list"> 
      <div class="panel panel-danger">
        <div class="panel-heading">{{list.title}}</div>
        <div class="panel-body">  <router-link :to="{ name: 'DetailPage', params: { id: list.id } }">
                <div>
                    <img :src="list.image" style="height:200px; width:200px; border-radius:20px;">
                </div>
            </router-link></div>
        <div class="panel-footer">Buy 50 mobiles and get a gift card</div>
      </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Singleproduct',
        props: ["category"],
  data() {
    return {
      items: undefined,
    };
  },
  async mounted() {
    let res = await axios.get("https://fakestoreapi.com/products/category/"+this.category);
    this.items = res.data;
  },
}
</script>
