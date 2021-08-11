<template>
  <div id="app">
 
    <!-- <Api msg="Welcome to Your Vue.js App Get Your Api"/>
    <Post/> -->
<router-view></router-view>
  </div>
</template>

<script>
// import Api from './components/Api.vue'
// import Post from './components/Post.vue'

export default {
  name: 'App',
  // components: {
  //   Api
  //   ,Post
  // }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
