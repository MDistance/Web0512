import React from 'react'
import ReactDOM from 'react-dom'

class App extends  React.Component {
  state = {
    num: 1
  }
  constructor(props){
    super(props)
  }
  
  componentWillMount(){
    console.log('----------- componentWillMount ---------');
  }
  
  componentDidMount() {
    console.log('----------- componentDidMount ---------');
    // 通常用于发送ajax请求
    // setState在自身的钩子函数中修改状态，异步修改
    // this.setState({
    //   num: 2
    // }, () => {
    //   console.log(this.state.num); // 2    修改状态成功，页面更新以后执行
    // })
    // console.log(this.state.num); // 1
    // setState在非React自身的钩子函数中修改状态就是同步的
    // setTimeout(() => {
    //   this.setState({
    //     num: 2
    //   })
    //   console.log(this.state.num); // 2
    // }, 2000)
    
    
    
    // 测试
    this.intervalId = setInterval(() => {
      console.log('----- setInterval ------');
      this.setState({
        num: ++this.state.num
      })
    }, 1000)
    
    // 销毁组件
    setTimeout(() => {
      // Vue渲染： 将编译完的虚拟DOM对象 “替换” 到掉原来页面的容器
      // Vue销毁组件： 销毁组件的实例，页面保留组件销毁之前的状态，使用的是组件销毁之前的数据
      // React渲染： 将编译完的虚拟DOM对象 “插入” 到掉原来页面的容器
      // React 销毁组件实例， 将之前插入到页面的内容从页面移除
      ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }, 4000)
  }
  componentWillUpdate(){
    console.log('----------- componentWillUpdate ---------');
  }
  
  componentDidUpdate() {
    console.log('----------- componentDidUpdate ---------');
  }
  
  componentWillUnmount() {
    console.log('----------- componentWillUnmount ---------');
    
    clearInterval(this.intervalId)
  }
  
  
  render(){
    return (
      <div id='app'>
        <h1>App 组件</h1>
        <p>{this.state.num}</p>
      </div>
    )
  }
}


export default App;
