<template>
    <div>
        <h1>Welcome !!</h1><br>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  v-model="dataa.email">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-5">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="dataa.password">
  </div>
  <button type="submit" class="btn btn-primary" @click="submitdata">Login</button>
</form>

    </div>
</template>
<script>
import "./index.css"

export default {
    name:'Signin',
    data() {
        return {
            dataa:{
                email:undefined,
                password:undefined,

            },
        }
    },methods:{
     submitdata(e){
         e.preventDefault();
         

        console.warn(this.dataa)
    }
    }
}
</script>