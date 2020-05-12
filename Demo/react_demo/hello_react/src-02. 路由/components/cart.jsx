import React from 'react'

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <div>
        <h2>Cart 组件</h2>
        {/*<p>路由组件params参数： {this.props.match.params.id}</p>*/}
      </div>
    );
  }
}

export default Cart;
