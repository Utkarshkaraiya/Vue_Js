<template v-cloak>

    <div >
        <h1>Category</h1>
       <div class="container">
<div class="container" v-for="item in list" :key="item">    
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading">{{item.category}}</div>
        <div class="panel-body"><img :src="item.image" class="img-responsive" style="width:100%" alt="Image"></div>
        <div><h3>Price  {{item.price}} $</h3>
        
        </div>
        <div class="panel-footer">{{item.description}}</div>
      </div></div></div>
    
    
     
  </div>
</div><br>
 
    </div>
</template>
<script>
export default {
    data(){
        return{list:undefined
        
        }
    },mounted() {
 fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then((json)=>{
                this.list=json
                console.log(json)})
                

        },
}
</script>
<style>
.container{
    width: 1/6;

 flex-wrap: wrap;
  display:flex;
  justify-content: space-between;
  margin-bottom: 100px
}
</style>

