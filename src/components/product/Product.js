import React from 'react';
import './Product.css';
const Product = (props) => {
    const {addToCart, product}=props;
    const {name, img, price, shipping, seller,ratings} = props.product;
    return (
        <div className='products'>
            <div className="product">
                <img src={img} alt="images" />
                <h2>Title: {props.product.name} </h2>
                <h2>Price: ${price} </h2>
                <p>Ratings: {ratings} </p>
                <p>Shipping : ${shipping} </p>
                <p>Seller Name: {seller} </p>
                <button onClick={()=>addToCart(product)} className='btn'> Add To Cart </button>
            </div>
        </div>
    );
};

export default Product;