import React from 'react'
import { useHistory } from 'react-router-dom';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket ,user} ] = useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">

        
        <div>
        <h3>Hello,{user?.email}</h3>
            <h3 className="checkout_title">
                Your shopping basket
            {basket.map(item => (
                 <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}


                 />
            ))}
                
            {/* BasketItem*/}
            {/* BasketItem*/}
            {/* BasketItem*/}
            </h3>
        </div>
        </div>

        <div className="checkout_right">
            <h2>subtotal</h2>
            <Subtotal />
            {/* Subtotal */}
        </div>
        </div>
    )
}

export default Checkout
