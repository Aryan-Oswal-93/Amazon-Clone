import React from 'react'
import { useHistory } from 'react-router-dom';
import './Product.css'
import { useStateValue } from './StateProvider'
function Product({title,image ,price,rating,id}) {
    const [{basket} ,disptach] = useStateValue();
    console.log("this is in basket >>>" , basket)
    function addToBasket(){
        disptach({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating:rating ,
            },
        })
    } 
    const history = useHistory()

    return (
        <div className="product">
        <img className="product_img" src={image} alt="" />
        <div className="product_info">
            <p>{title}</p>
            
            <p className="product_price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
            </div>
            </div>
            
        <button onClick={addToBasket}> Add to Basket</button>
        </div>
    )
}

export default Product
