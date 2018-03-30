import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin' 
import Input from '../../components/Input'
import Item from '../../components/Item'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            todos: []
        }
    }
    render() {
        return (
            <div>
                <Input submitFn = {this.submitFn.bing(this)}/>
                <Item todos={this.state.todos} deleteFn = {this.deleteFn.bing(this)}/>
            </div>
        )
    }
    submitFn(value) {
        const id = this.state.todos.length
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        })
    }
    deleteFn(id) {
        let data = this.state.todos
        this.setState({
            todos: data.filter(item => {
                if (item.id !== id) {
                    return item
                }
            })
        })
    }
}


