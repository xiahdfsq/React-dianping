import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Header from '../../components/Header'
import Info from './subpage/Info'
import Comment from './subpage/comment'
import Buy from './subpage/buy'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取商户ID
        console.log(this.props.params)
        const id = this.props.params.id

        return (
            <div>
                <Header title="商户详情" type="share"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}
 
export default Detail