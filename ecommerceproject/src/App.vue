<template>
  <div id="app">
    <Navbar />
    <b-container>
      <b-row class="justify-content-center">
        <AddProduct />
        <ListProduct />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import AddProduct from "./AddProduct.vue";
import ListProduct from "./ListProduct.vue";
export default {
  name: "App",
  components: {
    Navbar,
    AddProduct,
    ListProduct,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
