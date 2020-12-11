import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import a from './fsr.png'
import { Avatar } from '@material-ui/core';
function Header() {
    const [{basket ,user},disptach ] = useStateValue();

    const handleAuth = () => {
        if(user){
            auth.signOut()
        }
    }

    return (
        <div className="header" style={{width: window.innerWidth}}>
        <Link to="/">
            <img className="header_logo"  src={a} alt=""/>
            </Link>
            <div className="header_search">

            
            <input 
                className="header_input"
                type="text"
            />
            <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="header_nav">
            <Link to={!user && "/login"}>
                <div onClick={handleAuth} className="header_option">
                     <span className='header_optionLineOne'>
                         Hello {!user? 'Guest' : user.email}
                     </span>

                     <span className='header_optionLineTwo'>
                        { user? "Sign Out" : "Sign In"}
                     </span>
                </div>
</Link>
                
<Link to='/profile'>
                <div className="header_option">
                
                <span className='header_optionLineOne'>
                         Your
                     </span>

                     <span className='header_optionLineTwo'>
                        Account
                     </span>
                </div>
                </Link>
            <Link to='/checkout'>
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />


                    <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                </div>
</Link>
            </div>
        </div>
    )
}

export default Header
