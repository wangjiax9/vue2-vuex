import * as types from './mutation-types'

export default {
    [types.CHANGE_TITLE](state,title){
        state.title = title
    },
    [types.GET_GROUPS](state,{groups}){
        state.groups = groups
    }
}