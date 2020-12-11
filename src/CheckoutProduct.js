import React from 'react'
import './Product.css'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move'
import './Wishlist'
function CheckoutProduct({title,image ,price,rating,id}) {
    const [ ,disptach] = useStateValue();
    const removeFromBasket = () => {
        disptach({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
const addToWishlist = () => {
    disptach({
        type: 'ADD_TO_WISHLIST',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating:rating
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
            
            
        <button onClick={removeFromBasket}> Remove from Basket</button>
        <button onClick={addToWishlist} >Add to Wishlist</button>
        </div>
        </FlipMove>
    )
}

export default CheckoutProduct
