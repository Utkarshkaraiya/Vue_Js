import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueValidate from "vee-validate"
Vue.use(BootstrapVue)
Vue.use(VueValidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
