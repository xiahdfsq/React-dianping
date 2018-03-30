//描述我要干什么，操作reducer
import * as actionTypes from '../constants/store'

//'USERINFO_UPDATE' 可以接受dsipatch过来的数据，并传给reducers对象，有type和到data
export function rm(item) {
    return {
        type: actionTypes.STORE_RM,
        data: item
    }
}

export function add(item) {
    return {
        type: actionTypes.STORE_ADD,
        data: item
    }
}

export function update(data) {
    return {
        type: actionTypes.STORE_UPDATE,
        data
    }
}