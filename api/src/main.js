import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Api from "./components/Api.vue"
import Post from "./components/Post.vue"
Vue.use(VueRouter);
const routes=[
  {path:'/',component:Api},
  {path:'/post',component:Post}
]
const router=new VueRouter({
  routes
})

Vue.config.productionTip = false
Vue.filter("upper",function(val){
  return val.toUpperCase()
})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
