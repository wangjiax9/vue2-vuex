import * as types from './mutation-types'
import axios from 'axios'

export const changeTitle = ({commit,state},title) => {
    // axios.get('xxx.json').then((response) => {
    //     console.log(response.data)
    // })
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('there is action changeTitle')
                commit(types.CHANGE_TITLE, title)
                resolve();
            }, 2000)
        });
}

export const getGroups = ({commit},groups) => {
    commit(types.GET_GROUPS)
}

