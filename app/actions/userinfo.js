//描述我要干什么，操作reducer
import * as actionTypes from '../constants/userinfo'

//'USERINFO_UPDATE' 可以接受dsipatch过来的数据，并传给reducers对象，有type和到data
export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}