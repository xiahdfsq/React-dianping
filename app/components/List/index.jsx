import React from 'react'
//在每次更新之前判断props和state，如果有变化则返回true，无变化则返回false。
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Item from './Item'

import './style.less'

class List extends React.Component { 
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="list-container">
                {this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default List