import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps" // Import package
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAQpOr4y8Guai4M1Jl78PYJWSZnsxpEoIQ",
    libraries: "places"
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
