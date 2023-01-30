import React, { Component } from 'react'

export default class CartItem extends Component {
    constructor (){
        super();
        this.state ={
            price:999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render() {
        const {price , title, qty} = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>

                    <img style={styles.image}/>

                </div>
                <div className='right-block'>

                    <div style={{fontSize : 25}}>{title}</div>
                    <div style={{color : '#777'}}>Rs {price}</div>
                    <div style={{color :'#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/* button */}
                        <img alt = "increase"  className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992651.png' />
                        <img alt = "decerase"  className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992683.png' />
                        <img alt = "delete"  className='action-icons' src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' />
                    </div>


                </div>

            </div>
        )
    }
}
const styles ={
    image:{
        height:110,
        width :110,
        borderRadius :4,
        background:'#ccc',
        backgroundImage: "url('https://img.freepik.com/free-photo/top-view-indian-food-assortment_23-2148747714.jpg?w=1380&t=st=1675095396~exp=1675095996~hmac=bea9ba5cb3d48299f4eca03434758ec9b6a70b2fb8b9681542bcc60439a0ee1a')"
    }
}
