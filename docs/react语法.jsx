class Hello extends React.Component {
	/*
	   执行时间： 组件被加载前最先调用，并且仅调用一次
	   定义状态机变量
	 */
	constructor(props,text) {
		super(props);
		this.state = {
			content: null
		}
	}
	render() {
		var m = false 
		var style = {fontSize:'40px',display:'block'}
		var arr = ["aa","bb","cc"]
		return (
			<div className="title">
				<button onClick={this.clickHandler}>点击我</button>
				<button onClick={this.clickBindHandler.bind(this)}>点击我并加上绑定</button>
				<p style={{color:'red',display:'block'}}>reach他学习</p>
				{   //注释
					/*注释*/
					m ? 'yes' : 'no'
				}
				<p style={style}>reach他学习结束</p>
				<ul>
					{arr.map((item,index)=>{
						return <li key={index}>{item} is {index}</li>
					})}
				</ul>
			</div>
		)
	}

	/*
	   执行时间： 组件初始渲染（render()被调用前）前调用，并且仅调用一次
	   作用：如果在这个函数中调用setState改变某些状态机，react会等待setState完成后再渲染组件
		注意：子组件也有componentWillMount函数，在父组件的该函数调用后再被调用
	*/
	componentWillMount(){}
	//执行时间：render之后被调用，并且仅调用一次
	//作用：渲染挂载组件；可以使用refs（备注：React支持一个特殊的属性，你可以将这个属性加在任何通过render()返回的组件中。
	//这也就是说对render()返回的组件进行一个标记，可以方便的定位的这个组件实例。）
	//注意：子组件也有该函数，在父组件的该函数调用前被调用；如果在该函数中修改某些状态机state，会重新渲染render组件，
	//所以有些组件为减少渲染次数，可以将某些修改状态机的操作放在componentWillMount函数中；如果需要再程序启动显示初始化
	//页面后从网路获取数据，可以将网络请求代码放在该函数中
	componentDidMount(){}
	clickHandler(e) {
		// console.log(e.preventDefault())
		// this为null
		console.log(this)
	}
	clickBindHandler(){
		//this为Hello组件，而且方法是挂载在__proto__
		console.log(this)
	}
}

render(
	<Hello/>,
	document.getElementById('root')
)