import React from 'react';
import './Cart.css'

const Cart = (props) => {
     const { cart } = props;
     console.log(props.name)
     let totalQuantity = 0;
     let total = 0;
     for (const product of cart) {
          if (!product.quantity) {
               product.quantity = 1
          }
          total = total + product.price;
          totalQuantity = totalQuantity + product.quantity;

     }

     const shipping = total > 0 ? 15 : 0;
     const tax = (total + shipping) / 10;
     const grandTotal = total + shipping + tax;

     return (
          <div>
               <h3>Order summery</h3>
               <h4>item ordered {totalQuantity}</h4>
               <p>total: {total.toFixed(2)}</p>
               <p>Shipping {shipping}</p>
               <p>tax {tax.toFixed(2)}</p>
               <h3>Grand total {grandTotal.toFixed(2)}</h3>

          </div>
     );
};

export default Cart;