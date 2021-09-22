<template>
    <div class="items">
<div class="paddi"  v-for="item in list" :key="item.id">

  <div class="card">
  <img :src="item.image" alt="Denim Jeans" style="width:200px; height:200px;">
  <h2>{{item.title}}</h2>
  <p class="price">${{item.price}}</p>
  <p>Best Offer</p>
  <p><button>Add to Cart</button></p>
</div>
</div>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
    name:'Options',
    data() {
      return {
        list:undefined,
      }
    },
    mounted(){
      Vue.axios.get('https://fakestoreapi.com/products')
      .then((res)=>{
        this.list=res.data
        console.warn(res.data)
      })
    }
}
</script>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 400px;
  
  margin: auto;
  text-align: center;
  font-family: arial;

}
.paddi{
  padding: 20px;
  border: 2px solid white
}
.items{
  width: 1/6;

 flex-wrap: wrap;
  display:flex;
  justify-content: space-between;
  margin-bottom: 100px
}

.price {
  color: grey;
  font-size: 22px;
}
img{margin: auto}
.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: rgb(255, 80, 80);
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>

