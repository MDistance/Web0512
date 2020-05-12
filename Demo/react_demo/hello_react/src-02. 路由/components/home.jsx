import React from 'react'
import {Link, Route} from 'react-router-dom'
import HomeChild from "./homeChild";


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h2>Home 组件</h2>
        <p>{this.props.match.path}</p>
        <Link to='/home/homeChild'>HomeChild 导航</Link>
        <br/>
        <Route path='/home/homeChild' component={HomeChild}></Route>
      </div>
    );
  }
}
Home.propTypes = {

};

export default Home;
