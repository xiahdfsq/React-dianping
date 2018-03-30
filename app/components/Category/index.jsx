import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'
import './style.less'

class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 250000,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        const categorys = [{
                title: '景点',
                className: 'jingdian',
                url: '/search/jingdian'
            },{
                title: 'KTV',
                className: 'ktv',
                url: '/search/ktv'
            },{
                title: '购物',
                className: 'gouwu',
                url: '/search/gouwu'
            },{
                title: '生活服务',
                className: 'shenghuofuwu',
                url: '/search/shenghuofuwu'
            },{
                title: '健身运动',
                className: 'jianshenyundong',
                url: '/search/jianshenyundong'
            },{
                title: '美发',
                className: 'meifa',
                url: '/search/meifa'
            },{
                title: '亲子',
                className: 'qinzi',
                url: '/search/qinzi'
            },{
                title: '小吃快餐',
                className: 'xiaochikuaican',
                url: '/search/xiaochikuaican'
            },{
                title: '自助餐',
                className: 'zizhucan',
                url: '/search/zizhucan'
            },{
                title: '酒吧',
                className: 'jiuba',
                url: '/search/jingdian'
            }]
        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">                            
                            {
                                categorys.map((item,index)=>{
                                    return <Link to={item.url} key={index}><li className={`float-left ${item.className}`} onClick={this.handlerClick.bind(this,item)}>{item.title
                                    }</li></Link>
                                })
                            }
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">                            
                            {
                                categorys.map((item,index)=>{
                                    return <li className={`float-left ${item.className}`} key={index} onClick={this.handlerClick.bind(this,item)}>{item.title
                                    }</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">                            
                            {
                                categorys.map((item,index)=>{
                                    return <li className={`float-left ${item.className}`} key={index} onClick={this.handlerClick.bind(this,item)}>{item.title
                                    }</li>
                                })
                            }
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
    handlerClick(par){
        console.log(par)
    }
}

export default Category