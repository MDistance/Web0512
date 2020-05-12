import React from 'react'

class Home extends React.Component {
  state = {
    msg: 'home组件的数据'
  }
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    this.props.getHomeData(this.state.msg);
    // React脚手架中子组件不能直接修改父组件通过props传递的数据，会报错
    // this.props.num = 2;
  }
  
  render () {
    return (
      <div>
        <h2>Home 组件</h2>
        <p>props接收的数据: {this.props.num}</p>
      </div>
    );
  }
}
Home.propTypes = {

};

export default Home;
