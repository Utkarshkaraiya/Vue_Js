import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Kids from './components/NavbarItems/Kids.vue'
import Men from './components/NavbarItems/Men.vue'
import Offers from './components/NavbarItems/Offers.vue'
import Women from './components/NavbarItems/Women.vue'
import Home from './components/NavbarItems/Home.vue'

import Detail from  './components/Detail.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routes=[
  {path:'/kids',component:Kids},
  {path:'/Men',component:Men},
  {path:'/Offers',component:Offers},
  {path:'/Women',component:Women},
  {path:'/Home',component:Home}, 
  {path:"/detail/:id",component:Detail},
]
const router=new VueRouter({
  routes
})
Vue.config.productionTip = false
Vue.filter("50",function(val){
  return val/2;
})
// Vue.filter("10",function(val){
//   return val/10;
// })
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
