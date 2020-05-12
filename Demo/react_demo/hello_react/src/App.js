import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import Test from './components/test'
import Home from './components/home'
import Cart from './components/cart'



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
  
  getHomeData(homeData){
    console.log('子组件传递给父组件的数据: ', homeData);
  }
  
  render(){
    let {num} = this.state;
    return (
      <div id='app'>
        <h1>App 组件</h1>
        <Home num={num} getHomeData={this.getHomeData}></Home>
        <Cart></Cart>
      </div>
    )
  }
}


export default App;
