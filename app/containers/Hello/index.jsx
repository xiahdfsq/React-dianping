import React from 'react'

import HomeHeader from '../../components/HomeHeader/index'

class Hello extends React.Component {
    // getInitialState周期 
	constructor(props, context) {
        //props 一般只作为父组件给子组件传递数据用，不要试图去修改自己的 props  
        super(props, context); 
        this.state = {  
            now: Date.now() 
        } 
    }
    // 最常用的hook，返回组件要渲染的模板。 
    render() {
        var obj = {a: 100 , b: true}
        return (
            <div>
            	<HomeHeader title='react pratice' aaa={{obj}}/>
                <p>this is content</p>
                <button onClick={this.clickHandler.bind(this)}>hello world {this.state.now}</button>
            </div>
        )
    }
    //comopentDidMount，组件第一次加载时渲染完成的事件，一般在此获取网络数据
    comopentDidMount() {
        console.log('comopentDidMount')
    }
    //shouldComponentUpdate 主要用于性能优化，React 的性能优化也是一个很重要的话题
    //主要做清除setTimeout,setInterval
    //每次组件更新会触发一次
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return false
    }
    //组件更新了之后触发的事件，一般用于清空并更新数据。
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    clickHandler() { 
        // 设置 state 的值的时候，一定要用 this.setState ，不能直接赋值修改 
        this.setState({ now: Date.now() }) 
    }
}

export default Hello