import React from 'react'
import './Wishlist.css';
import FlipMove from 'react-flip-move';
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import WishListProduct from './WishListProduct'
function Wishlist() {
    const [{wishlist,basket,user} ,disptach] = useStateValue();
    
    return (
        <div>
        <h1></h1>
        <h3>Hi!{user?.email},
        Your Wishlist</h3>
        {wishlist.map(item => (
                 <WishListProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}


                 />
            ))}
        </div>
    )
}

export default Wishlist
