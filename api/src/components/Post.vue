<template>
<div>
    <div>Post Api</div>
    <form @submit="submitdata" method="post">

<input type="text" name="title" v-model="post.title"/><br>
<input type="text" name="Authore" v-model="post.author"/><br>
<button type="submit">Post</button>

    </form>
    </div>
</template>
<script>
 import Vue from 'vue'   // in Vue 2

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
export default {
    name:'Post',data(){
        return{
            post:{
                title:null,
                author:null
            }
        }

    },methods:{
        
submitdata(e){
    this.axios.post("http://localhost:3000/posts",this.post)
    .then(res=>
    console.warn(res)
    )
    e.preventDefault();
    console.warn(this.post)


}
    }
}
</script>