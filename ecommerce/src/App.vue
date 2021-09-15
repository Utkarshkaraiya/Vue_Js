<template>
  <div id="app">
   <Navbar/>
   <Slidingbanner/>
   <Options/>
   <router-view> </router-view>
<Footer/>
  </div>
</template>

<script>
import Slidingbanner from './components/Slidingbanner.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import Options from './components/Options.vue'

export default {
  name: 'App',
  components: {
   Navbar,Footer,Slidingbanner,Options
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

}
</style>
