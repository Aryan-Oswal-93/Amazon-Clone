import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';



function Subtotal() {
    const history = useHistory()

    const [{basket} ] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({basket.length}):

                            <strong>{value}</strong>
                           

                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        </div> 
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator = {true}
                        thousandSpacing = {'2s'}
                        prefix={"₹"}
               

            />
            <button onClick={e => history.push('/payment')}  className="but">Proceed to checkout</button>
            <button onClick={e => history.push('/wishlist')}  className="but">Wish List</button>

        </div>
    )
}

export default Subtotal
