import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps" // Import package
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import locale from 'element-ui/lib/locale/lang/en'
import * as API from '@/api'

Vue.component('font-awesome-icon', FontAwesomeIcon)
// Google maps API key: AIzaSyAQpOr4y8Guai4M1Jl78PYJWSZnsxpEoIQ
Vue.config.productionTip = false
//element ui plugin
Vue.use(ElementUI, {locale})

//google maps plugin
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAQpOr4y8Guai4M1Jl78PYJWSZnsxpEoIQ",
    libraries: "places"
  }
});

new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$API = API
    Vue.prototype.$bus = this
  },
  store,
}).$mount('#app')
