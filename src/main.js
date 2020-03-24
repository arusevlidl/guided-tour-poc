import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import { defaultStore } from "./store";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { routes } from "./router";
import VueRouter from "vue-router";

const router = new VueRouter({ routes });
Vue.use(VueRouter);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store(defaultStore);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
