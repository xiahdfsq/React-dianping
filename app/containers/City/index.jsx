import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import CityList from '../../components/CityList'
import CurrentCity from '../../components/CurrentCity'
import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'
class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="city"/>
                <CurrentCity cityName={this.props.getUserInfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        // 修改 redux
        const userinfoProp = this.props.getUserInfo
        userinfoProp.cityName = newCity
        this.props.updateUserInfo.update(userinfoProp)

        // 修改 cookie
        localStore.setItem(CITYNAME, newCity)

        // 跳转页面
        hashHistory.push('/')
    }
}


// -------------------redux react 绑定--------------------

//userinforFromReducx是对state.userinfo的一个重命名
function mapStateToProps(state) {
    return {
        getUserInfo: state.userinfo
    }
}

//userInfoActionsObj从action文件里面接收的一个模块集合，自己定义
function mapDispatchToProps(dispatch) {
    return {
        updateUserInfo: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
