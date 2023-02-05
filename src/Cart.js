import React, { Component } from 'react';
import CartItem from "./CartItem";


export class Cart extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    img: '',
                    id: 1
                },
                {
                    price: 21999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'gun',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]

        }
    }
    handleIncreaseQuantity =(product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);

        products[index].qty += 1;

        this.setState({
            products:products
        })
    }

    handleDecreaseQuantity =(product) =>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0 ){
            return;
        }

        products[index].qty -= 1;

        this.setState({
            products:products
        })
    }
    handleDeleteProduct = (id) => {
        const {products} = this.state;

        const items  =products.filter((items) => items.id !== id);

        this.setState ({
            products: items
        }
            
        )
    }
    render() {
        const { products } = this.state;
        return (
            <div className='cart'>
                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.id} 
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity ={this.handleDecreaseQuantity}
                            onDeleteProduct ={this.handleDeleteProduct}
                            />
                    )
                })}
            </div>
        )
    }
}

export default Cart;
