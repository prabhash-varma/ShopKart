import React,{useContext} from 'react'
import MainNav from './MainNav'
import '../App.css'
import {store} from '../App.js'
function Profile() {

  const {username,setUsername,useremail,setUseremail,cartItems,setCartItems}=useContext(store);
  return (
    <div>
      <MainNav/>
      <div className="login-form">
        <label>Name</label>
        <input type="text" name="name" id="name" value={username} disabled={true}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={useremail} disabled={true}/>
        
      </div>
    </div>
  )
}

export default Profile
