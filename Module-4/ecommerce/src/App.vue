<template>
  <div>
<Navbar/>
<Home/>
  </div>
</template>
<script>
import Home from  "./components/NavbarItems/Home.vue"
import Navbar from './components/Navbar.vue'
export default {
  name:'App',
  components:{
    Navbar,Home
  
  }
}
</script>
