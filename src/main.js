import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  faHeart,
  faCode,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faGitlab,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

library.add(faHeart, faCode, faEnvelope, faFacebook, faGithub, faGitlab, faLinkedin)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");