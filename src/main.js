import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import moment from "moment";

Vue.config.productionTip = false;

// Add bootstrap to vue
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.filter("formatInMMMDDYYYY", function (value) {
  if (value) {
    return moment(value).format("MMM DD, YYYY");
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
