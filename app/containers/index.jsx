import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>正在加载...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        let cityName = LocalStore.getItem(CITYNAME)
        if(cityName == null){
            cityName = '北京'
        }
        this.props.userInfoAcions.update({
            cityName: cityName
        })
        setTimeout(()=>{
            this.setState({
               initDone: true
            })
        },1000)
        console.log(cityName)
         
    }
}


function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        userInfoAcions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
} 
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
