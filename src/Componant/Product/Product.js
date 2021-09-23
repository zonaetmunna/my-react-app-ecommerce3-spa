import React from 'react';
import './Product.css'

const Product = (props) => {
     console.log(props.product)

     const { name, img, price, seller, stock } = props.product;

     return (
          <div className="product">

               <div>
                    <img src={img} alt="" />
               </div>
               <div className="product-details">
                    <h2>{name}</h2>
                    <p><small>by {seller}</small></p>
                    <h5>${price}</h5>
                    <h5>{stock}</h5>
                    <button
                         onClick={() => props.handleToAddCart(props.product)}>Add to cart</button>
               </div>
          </div>
     );
};

export default Product;