dva/router:默认输出 react-router 接口， react-router-redux 的接口通过属性 routerRedux 输出。
比如：import { Router, Route, routerRedux } from 'dva/router';
dva/fetch:异步请求库，输出 isomorphic-fetch 的接口。不和 dva 强绑定，可以选择任意的请求库。
dva/saga:输出 redux-saga 的接口，主要用于用例的编写。（用例中需要用到 effects）
dva/dynamic:解决组件动态加载问题的 util 方法。

Ant Design
https://ant.design/components/form-cn/
React-Router
http://react-guide.github.io/react-router-cn/index.html
react中文
http://www.css88.com/react/tutorial/tutorial.html
类式组件
class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			content: null
		}
	}
	render() {
		return (
			<div className="title" style=""></div>
			<ChildComponent giveChildMsg="hello" getChildDispatchFn={this.handleFn.bind(this)}/>
		)
	}
	handleFn(){}
}
子组件用:{this.props.giveChildMsg}接收过来的值,this.props.getChildDispatchFn()发送事件给父组件
函数式组件：当一个模块只有render函数就可以用
function Square(props) {
	return(
		<button className="squre" onClick={props.onClick}>
			{props.value}
		</button>
	)
}
onClick={props.onClick}可以改为onClick={ ()=> props.onClick()}

es6写法
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});

// 或者如果你使用对象扩展语法，可以写成：
// var newPlayer = {...player, score: 2};

PropTypes:验证prop过来的值
组件名.propTypes = {
	name: React.PropTypes.string.isRequired
}
设置默认值
组件名.defaultProps = {
	name: 'zhangyatao'
}