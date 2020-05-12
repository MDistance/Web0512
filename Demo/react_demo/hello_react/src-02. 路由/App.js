import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import {Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'
import Test from './components/test'
//
// import Home from './components/home'
// import Cart from './components/cart'
// import HomeChild from './components/homeChild'


const Home = lazy(() => import('./components/home'));
const Cart = lazy(() => import('./components/cart'));
const HomeChild = lazy(() => import('./components/homeChild'));

class App extends  React.Component {
  state = {
    num: 1
  }
  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    console.log('----------- componentDidMount ---------');
    
  }
  
  render(){
    return (
      <div id='app'>
        <h1>App 组件</h1>
        <p>{this.state.num}</p>
        <NavLink to='/home' activeClassName='myActive'>Home 导航</NavLink>&nbsp;
        {/*<Link to='/cart?a=123&b=234'>Cart 导航</Link>&nbsp;*/}
        <Link to='/cart'>Cart 导航</Link>&nbsp;
        
        <br/>
        <br/>
        <br/>
        {/* Route放置的位置就是请求到路由组件后加载组件的位置 */}
        
        {/* React-router默认是模糊匹配 想要精准匹配的话需要加exact*/}
        {/*<Route path='/' component={Test} exact></Route>*/}
        <Test></Test>
        {/* 代码分割， 路由组件懒加载*/}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {/*<Route path='/' component={Test} ></Route>*/}
            <Route path='/home' component={Home} ></Route>
            {/*<Route path='/home/homeChild' component={HomeChild}></Route>*/}
            {/* params传参比较推荐 */}
            {/*<Route path='/cart/:id' component={Cart}></Route>*/}
            
            {/* query传参获取不方便 不建议使用*/}
            {/*<Route path='/cart' component={Cart}></Route>*/}
            
            {/* props传参 需要配合render使用*/}
            <Route path='/cart' render={() => <Cart num={123}/>}></Route>
            <Redirect to='/home'></Redirect>
          </Switch>
        </Suspense>
      </div>
    )
  }
}


export default App;
