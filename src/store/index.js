import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)
import timezone from './timezone'

export default new Vuex.Store({
    modules:{
        timezone
    }
})