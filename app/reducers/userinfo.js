import * as actionTypes from '../constants/userinfo'

const initialState = {}

//'USERINFO_UPDATE' userinfo函数接收action，action为传过来的参数
//操作state 函数userinfo就相当与vuex 里面的state属性，试图中可以在mapStateToProps里面用state.props调用
//state {cityName: "重庆"}
export default function userinfo (state = initialState, action) { 
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}