import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total =0;
    let shipping = 0;
    let tax = 0;
    let grandTotal=0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        tax = parseFloat(Number(total *0.1).toFixed(2));
        grandTotal = total + shipping + tax;
    }
    return(
        <div className='cart'>
            <h2> Cart info </h2>
            <h5>Selected Items :{cart.length}  </h5>
            <h5> Price : {total} </h5>
            <p>Shipping :{shipping} </p>
            <p> Tax : ${tax}  </p>
            <h5>Grand Total : ${grandTotal} </h5>
        </div>
    );
};

export default Cart;