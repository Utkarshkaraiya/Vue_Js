<template>

  <div class="w3-content" style="max-width:1600px">

  <!-- Header -->
  <header class="w3-container w3-center w3-padding-48 w3-white">
    <h1 class="w3-xxxlarge"><b>VUE ONLINESHOP</b></h1>
    <h6>Welcome to the shop of vue <span class="w3-tag">Vue's world</span></h6>
  </header>

  <!-- Image header -->
  <header class="w3-display-container w3-wide" id="home">
    <img class="w3-image" src="https://assets.vogue.com/photos/603803e95ae7c2a11fa114eb/16:9/w_1280,c_limit/social-holding.jpg" alt="Fashion Blog" width="1600" height="1060">
    <div class="w3-display-left w3-padding-large">
      <h1 class="w3-text-white">VUE</h1>
      <h1 class="w3-jumbo w3-text-white w3-hide-small"><b>FASHION </b></h1>
      <h6><button class="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off" onclick="document.getElementById('subscribe').style.display='block'">LOGIN</button></h6>
    </div>
  </header>

 
  </div>
</template>
<script>
export default {
    name:'Slider'
}
</script>
<style scoped>
.w3-content{
  margin-bottom: 100px; 
}
</style>

