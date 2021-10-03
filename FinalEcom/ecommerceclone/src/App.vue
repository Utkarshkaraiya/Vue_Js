<template>
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Logo</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <!-- <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li class="logo">
          <router-link to="/">LOGO</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Singleproduct', params: { category: men } }" :key="$route.path">MEN</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Singleproduct', params: { category: women } }" :key="$route.path">WOMEN</router-link>
        </li>
        
        <li>
          <router-link :to="{ name: 'Singleproduct', params: { category: 'jewelery' } }" :key="$route.path">JEWELLERY</router-link>
        </li>
      </ul> -->
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Your Account</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
      </ul>
    </div>
  </div>
</nav>

</template>
<script>
export default {
  data() {
    return {
       men: "men's clothing",
      women: "women's clothing"
    }
  },
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
