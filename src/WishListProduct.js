import React from 'react'
import './Product.css'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move'
import './Wishlist'
function WishListProduct({title,image ,price,rating,id}) {
    const [ ,disptach] = useStateValue();
  
const removeFromWishlist = () => {
    disptach({
        type: 'REMOVE_FROM_WISHLIST',
        id: id,
    })
}

const addToBasket = () => {
    disptach({
        type: 'ADD_TO_BASKET2',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating:rating ,
        },
    })
}
    

    

    return (
        <FlipMove>
        <div className="product">

        <img src={image} alt="" />
        <div className="info">
            <h3>{title}</h3>
            
            <p className="product_price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">{Array(rating)
            .fill()
            .map((_, i) => ( 
                <p>⭐️</p>
            ))}
            </div>
            </div>
            
            
        <button onClick={removeFromWishlist} >Remove From Wishlist</button>
        <button onClick={addToBasket} >Add To Basket</button>
        </div>
        </FlipMove>
    )
}

export default WishListProduct