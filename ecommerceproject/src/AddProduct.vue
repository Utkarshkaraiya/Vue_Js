<template>
    <div >
<b-col md="4" class="m-3">
 <b-card
   header="Add Product" >
   <b-card-body class="box">
    <b-form autocomplete="off">
         <label>Brand</label>
     <b-form-input  v-model="form.brand" v-validate="{required:true,min:3}"  name="brand" placeholder="Enter  Brand"></b-form-input>
    <!-- <div class="mt-4"> {{errors.first('brand')}}</div> -->
     <label>Price</label>
      <b-form-input v-model="form.price"  placeholder="Enter Amount"></b-form-input>
    <div class="mt-4"></div>
     <label>Name</label>
      <b-form-input v-model="form.name"  placeholder="Enter name"></b-form-input>
    <div class="mt-4"></div>
    <div class="box">
     <b-form-group label="Individual radios" v-slot="{ ariaDescribedby }">
      <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.radio" value="Stock" >In Stock</b-form-radio>
      <b-form-radio :aria-describedby="ariaDescribedby" v-model="form.radio" value="Outofstock" >Out Of Stock</b-form-radio>
    </b-form-group>
    </div>

    </b-form>
   </b-card-body>
    <b-button block variant="primary" @click="show">Add Product</b-button>
  </b-card>
</b-col>
    </div>
</template>
<script>
export default {
    name:"AddProduct",
    data(){
        return {
            form:{
                brand:"",
                name:"",
                price:"",
                radio:""
            }
        }
    },methods:{
        show(){
            console.log(this.form)
        }
    }
}
</script>
<style>
.box{
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
}
</style>