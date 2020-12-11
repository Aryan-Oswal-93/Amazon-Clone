import React, { useState } from 'react'
import { useStateValue } from './StateProvider'
import './Profile.css'
import { Avatar } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
function Profile() {
    const [{user}] = useStateValue();


    const histort  = useHistory()
    return (
        <div className="profile">
           <h3 className="wel" >Welcome to E-Commerce</h3>
            <div className="profile_container">
                <Avatar className="Avatar"  src={user?.photoURL}/>
                <h3>Email-:{user?.email} </h3>
                <h3>
                {user.displayName}</h3>
                
            </div>
        </div>
    )
}

export default Profile
