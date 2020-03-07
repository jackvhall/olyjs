import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import "./main.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMeetup, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSpinner, faMeetup, faGithub, faSlack);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App)
}).$mount("#app");
