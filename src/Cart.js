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
    render() {
        const { products } = this.state;
        return (
            <div className='cart'>
                {products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.id} />
                    )
                })}
            </div>
        )
    }
}

export default Cart;
