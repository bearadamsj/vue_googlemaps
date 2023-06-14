import { reqTimeZone } from "@/api";

const actions = {
    async getTimeZone({commit}, keys){
        let result = await reqTimeZone(keys.lat, keys.lng, keys.key)
        console.log('dispatched', result);
        if(result.status=='200'){
            console.log('result is 200');
            commit('GETTIMEZONE', result.data)
        }
    }
}
const state = {
    timezone: {}
}
const getters = {

}

const mutations = {
    GETTIMEZONE(state, data){
        state.timezone = data
    }
}

export default {
    actions,
    state,
    getters,
    mutations
}