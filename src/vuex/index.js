import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    title: 'wthat are you long sha ne ?',
    groups:{name:'xiaoxiaoxiao'}
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})