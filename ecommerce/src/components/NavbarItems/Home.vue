<template>
  <div id="app">
   <!-- <Navbar/> -->
   <Slidingbanner/>
   <Catagory/>
   <Options/>
   <router-view> </router-view>
<Footer/>
  </div>
</template>

<script>
import Slidingbanner from '../Slidingbanner.vue'
import Footer from '../Footer.vue'
import Catagory from '../Catagory.vue'
// import Navbar from '../Navbar.vue'
import Options from '../Options.vue'

export default {
  name: 'Home',
  components: {
 Footer,Slidingbanner,Options,Catagory
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;

}
</style>
