import { Link, useHistory } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider';
import {CardElement,  useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer'
import axios from 'axios'
function Payment() {
   


    const [{user, basket} , dispatch] = useStateValue()
    const history = useHistory()
    const [street ,setStreet] = useState("")
    const [city ,setCity] = useState("")
    const [pin ,setPin] =useState()
    const [country ,setCountry] = useState()
    const [state2 ,setState2] = useState();

    const stripe= useStripe()
    const elements = useElements()

    const [error , setError] = useState(null);
    const [disabled ,setDisabled] = useState(true)

    const [processing , setProcessing] = useState("")
    const [succeeded , setSucceeded] = useState(false)

    const [clientSecret ,setClientSecret] = useState(true)

    useEffect(() => {
        const getClientSecret = async () => {
            const respose = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(respose.data.clientSecret)
        }

        getClientSecret()
    },[basket])

    const handleSubmit = async (event) => {
        //setDisabled(event.empty);
        //setError(event.error ? event.error.message : "")
        event.preventDefault()
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            //paymentIntent = payment confirmation

            setSucceeded(true)
            setError(null)
            setProcessing(false)
            history.replace('/orders')
        })

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    }
    return (
        <div className="payment" >
            <div className="payment_container">
            <h1>
                Checkout (<Link to='/checkout'>{basket?.length} Items </Link>)
            </h1>
                {/* delivery Adress */}
                <div className='payment_section'>
                    <div className='payment_title' >
                        
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        
                            <input placeholder="Street/Landmark"  onChange={e => setStreet(e.target.value)} type="text" />
                            <input placeholder="City" onChange={e => setCity(e.target.value)} type="text"  />

                            <input placeholder="Pin Code"  onChange={e => setPin(e.target.value)} type="number"  />
                            <input placeholder="State"  onChange={e => setState2(e.target.value)} type="text" />
                            <input placeholder="Country"  onChange={e => setCountry(e.target.value)} type="text" />

                            <h3>Delivery Address -:</h3>
                        <p>{street}</p>
                        <p>{city} , {pin}</p>
                        <p>{state2}</p>
                        <p>{country}</p>
                    </div>
                </div>
                    
                {/* Payment section review */}
                <div className='payment_section'>
                    <h3>Review Items For Delivery</h3>

                    <div className="payment_items">
                        {basket.map(item => ( 
                        <CheckoutProduct
                            image={item.image}
                            title={item.title}
                            id={item.id}
                            rating={item.rating}
                            price={item.price}
                        /> 
                        ))}
                    </div>
                </div>

                {/* method */}
                <div className='payment_section'>
                        <div className='payment_title'>
                            <h3>Payment Method</h3>
                        </div>
                        <div className='payment_details'>
                            <form onSubmit={handleSubmit} >
                                <CardElement onChange={handleChange} />
                           

                            
                            <p><strong className="Warn" >Note-: please Don't Enter User Data This is Just For Educational Purpose </strong> ⚠️</p>

                            <div className="payment_price">
                            <CurrencyFormat 
                renderText={(value) => (
                    <div>
                        <p>
                            Order Total: ({basket.length}):

                            <strong>{value}</strong>
                           

                        </p>
                        
                        </div> 
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator = {true}
                        thousandSpacing = {'2s'}
                        prefix={"₹"}
               
            />
                            <button onClick={processing || disabled || succeeded} ></button>
                            </div>
                           

                            {error && <div>{error}</div>}                         </form>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
