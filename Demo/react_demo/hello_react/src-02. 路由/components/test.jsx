import React from 'react'
import {withRouter} from 'react-router-dom'

class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h2>Test 组件</h2>
      </div>
    );
  }
}

export default withRouter(Test);
