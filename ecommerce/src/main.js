import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Kids from './components/NavbarItems/Kids.vue'
import Men from './components/NavbarItems/Men.vue'
import Offers from './components/NavbarItems/Offers.vue'
import Women from './components/NavbarItems/Women.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routes=[
  {path:'/kids',component:Kids},
  {path:'/Men',component:Men},
  {path:'/Offers',component:Offers},
  {path:'/Women',component:Women} 
]
const router=new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
