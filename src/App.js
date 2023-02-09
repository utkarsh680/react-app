import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/app'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading:true

    }
  }

  componentDidMount () {
    firebase
    .firestore()
    .collection('products')
    .get()
    .then((snapshot) => {
      console.log(snapshot);
      snapshot.docs.map((doc) =>{
        console.log(doc.data())
      })
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      this.setState({
        products,
        loading:false
      })
    })
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
    <h2>This is a Demo class component!</h2>;
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>loading Products...</h1>}
        <div style={{fontSize:20, padding:10} }>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
