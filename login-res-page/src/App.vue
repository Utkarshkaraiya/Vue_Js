<template>
  <div id="app">
    <component v-bind:is="comp"></component>
    <button  class="btn btn-success" v-on:click="updatecmp('signin')">Login</button>
    <button  class="btn btn-primary" v-on:click="updatecmp('signup')">Register</button>
  </div>
</template>

<script>
import "../src/components/index.css"
import Signin from './components/Signin.vue'
import signup from './components/signup.vue'


export default {
  name: 'App',
  components: {
    'signin':Signin,
    'signup':signup
  },data() {
  return {
    comp:'signin'
  }
},methods:{
  updatecmp(item){
    this.comp=item
  }
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
  margin-top: 60px;
}
</style>
