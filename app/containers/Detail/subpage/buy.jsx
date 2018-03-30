import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as storeActionsFromFile from '../../../actions/store'

import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }
    render() {
        // 获取商户ID
        const id = this.props.id

        return (
            <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
        )
    }
    
    componentDidMount(){
        //验证是否已经收藏
        this.checkStoreState()
    }

    checkStoreState(){
        const id = this.props.id
        const store = this.props.getStore

        store.forEach( item =>{
            if(item.id === id){
                // 已经被收藏
                this.setState({
                    isStore: true
                })
                return false
            }
        })
    }
    // 检查登录状态
    loginFlag() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if(!userinfo){
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }
    // 购买事件
    buyHandle() {
        // 验证登录，未登录则retur
        const loginFlag = this.loginFlag()
        if (!loginFlag) {
            return
        }

        // 此过程为模拟购买，因此可省去复杂的购买过程

        // 跳转到用户主页
        hashHistory.push('/User')
    }
    // 收藏事件
    storeHandle() {
        // 验证登录，未登录则retur
        const loginFlag = this.loginFlag()
        if (!loginFlag) {
            return
        }

        const id = this.props.id
        const storeAction = this.props.updateStoreAction
        if(this.state.isStore){
            // 已经被收藏了，则取消收藏
            storeActions.rm({id: id})
        } else {
            // 未收藏，则添加到收藏中
            storeActions.add({id: id})
        }
        // 修改状态
        this.setState({
            isStore: !this.state.isStore
        })

    }
}
 
// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        getUserinfo: state.userinfo,
        getStore: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateStoreAction:bindActionCreators(storeActionsFromFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)
