import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'
import { hashHistory } from 'react-router' 

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo =  this.props.getUserInfo
        return (
            <div>
                <Header title="用户主页" backRouter="/home"/>
                <UserInfo username={userinfo.username} city={userinfo.cityName}/>
                <OrderList username={userinfo.username}/>
            </div>
        )
    }
    componentDidMount() {
        if(!this.props.getUserInfo.username){
            hashHistory.push('/Login')
        }
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default User
function mapStateToProps(state) {
    return {
        getUserInfo: state.userinfo
    }
}


export default connect(
    mapStateToProps 
)(User)