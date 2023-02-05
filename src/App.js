import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
          id: 1
        },
        {
          price: 21999,
          title: 'Phone',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          id: 2
        },
        {
          price: 999,
          title: 'gun',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          id: 3
        }
      ]

    }
  }
  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products
    })
  }

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products: products
    })
  }
  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((items) => items.id !== id);

    this.setState({
      products: items
    }

    )
  }
  getCartCount = () =>{
    const {products} = this.state;
    let count = 0;

    products.forEach((product) =>{
      count += product.qty;
    })
    return count;
  }

  getCartTotal =() =>{

    let cartTotal = 0;

    const {products} = this.state;
    
    products.map((product) => {

      cartTotal = cartTotal + product.qty * product.price

    });
    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{fontSize:20, padding:10} }>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
