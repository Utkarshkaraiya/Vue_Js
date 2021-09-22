<template>
  <div>
    <div class="container-fluid">

    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3  bg-white ">
        <a class="navbar-brand" href="">
            <img src="https://imgeng.jagran.com/images/2021/jan/Myntra-805x530-1-700x4611611985286383.jpg" alt="Mynta" class="coco mr-5" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto flex-grow-1">
                <li class="nav-item ">
                    <!-- <a class="nav-link mr-2" href="#">MEN</a> -->
                    <router-link class="nav-link mr-2" to="/Men">MEN</router-link>
                  
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link mr-2" href="#">WOMEN</a> -->
                </li>
                <li class="nav-item">
                    <!-- <a  href="#"></a> -->
                      <router-link class="nav-link mr-2" to="/kids">KIDS</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link mr-2" href="#">HOME & LIVING</a> -->
                    <router-link class="nav-link mr-2" to="/">HOME</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link mr-2" href="#">OFFERS</a> -->
                    <router-link class="nav-link mr-2" to="/Offers">OFFERS</router-link>
                </li>

            </ul>
            <router-view></router-view>

            <div class="form-group has-search flex-grow-1">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" class="form-control" placeholder="Search for Products Branda and More" />
            </div>
        </div>

    </nav>
</div>
  </div>
</template>

<script>
export default {
  name: 'Api',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 1200px) {
    .container{
        max-width: 1400px;
    }
}

.coco{
    width: 60px;
    /*border: 1px solid blue;*/
}

.nav-item{
    font-weight: bold;
    color: black;
}

.nav-item, .nav-link {
    font-size: 17px;
    color: black;
}


.has-search .form-control {
    padding-left: 2.375rem;
}
.coco mr-5{
  height: 20px;
  width: 20px;
}
.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;

}

input[type="text"] {
    outline: none;
    box-shadow:none !important;
    border:1px solid #ccc !important;
}
</style>
