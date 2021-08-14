import Vue from 'vue'
import App from './App.vue'
import './assets/css/app.css'
import Header from "./components/Header";
import store from './store'
import router from './router'
import VModal from "vue-js-modal";

Vue.config.productionTip = false

//Uses
Vue.use(VModal);


//Components
Vue.component('Header', Header)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
