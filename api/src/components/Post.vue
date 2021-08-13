<template>
<div>

    <div>Post Api Here</div>
    <router-link to="user/1">user1</router-link><br><br>
        <router-link to="user/2">user2</router-link><br><br>
    <router-link to="user/3">user3</router-link><br><br>
    <router-link to="user/4">user4</router-link><br><br>

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