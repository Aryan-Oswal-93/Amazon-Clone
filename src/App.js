import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useEffect, useState } from 'react';
import db, { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Wishlist from './Wishlist';
import Profile from './Profile'
function App() {
  const [{},dispatch] = useStateValue()
  const promise = loadStripe('pk_test_51HsVSDFxkVNq4Evd8Me3aDBFhLc9JoNhJqKDvdSK8kwk11KaHQwEqFHrIW88qNS6fY7Ub76Im8NwItnUyEedkwvz00u7hMsI3c')




const addToDb = () => {
}
 
  useEffect(() => {
    auth.onAuthStateChanged(authUser =>  { 
      console.log('THE USER LOGGED IN IS >>>' , authUser)

      if(authUser){
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  } , [])

  return (
    <Router >
    <div className="App">
      

    
       <Switch>
          <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>

          <Route path="/login" >
            <Login />
          </Route>
          <Route path="/payment" >
          <Elements stripe={promise}>
          <Header />
            <Payment />
            </Elements>
          </Route>
    <Route path='/wishlist' >
     <Header />
      <Wishlist />
    </Route> 
    <Route path='/profile'>
    <Header />
    <Profile />
    </Route>
       <Route path="/">

       <Header />
          <Home />

          </Route>

        </Switch>

    </div>
    
    
    </Router>
  );
}

export default App;
