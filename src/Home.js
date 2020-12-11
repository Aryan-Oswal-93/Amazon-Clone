import React, {useState, useEffect} from 'react';
import db  from './firebase.js'
import './Home.css'
import Product from './Product'
import {Link, useHistory} from 'react-router-dom'
function Home() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
      db.collection("produts").onSnapshot((snapshot) =>
      setProduct(snapshot.docs.map((doc) => doc.data()))
      );
    }, []);
    return (
        <div className="home">
           <div className="home_container">
                <img  className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/under1499store/english/Gateway/updated/V242338866_IN_CEPC_Under-1499_store_Graphics_3000x1200._CB406499466_.jpg" alt="" />
           </div>
           {product.map((product) => (
               <div className="home_row" >
          <Product
            title={product.title}
            image={product.image}
            rating={product.rating}
            price={product.price}
            id={product.id}
        
            

          /></div>
           ))}
        </div>
    )
}

export default Home
