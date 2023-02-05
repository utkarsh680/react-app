import React, { Component } from 'react';
import CartItem from "./CartItem";


export class Cart extends Component {
  render() {
    return (
      <div className='cart'>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
    )
  }
}

export default Cart;
