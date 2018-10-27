// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App";
import VueRouter from "vue-router";

//toras
import Home from "./views/Home";
import Pets from "./views/Pets";
import About from "./views/About";
import Dogs from "./data/dogs";

//import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/pets", component: Pets },
  { path: "/about", component: About }
];
const router = new VueRouter({ routes });

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});
