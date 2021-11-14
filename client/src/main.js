import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import './assets/tailwind.css'


const base = axios.create({
  baseURL: "http://localhost:8000"
});

Vue.prototype.$http = base;
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
