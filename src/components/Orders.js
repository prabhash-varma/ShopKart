import React,{useContext,useState} from 'react'

import MainNav from './MainNav'

import {store} from '../App.js'


const OrderComp = ({cartItems,address,amount})=>{

let date = new Date();

let dt = date.toDateString();

console.log(dt)

  return(

    <div className="od">
      <div className="orders">
      
      {cartItems.length === 0 ? (
        <h1>Cart is Empty</h1>
      ) : (
        <div>
        <div className="item-class">
          <h2>Delivery will arrive by {dt}</h2>
        <h2>Order Summary</h2>
          <div className="item-pic">
            {cartItems
              ? cartItems.map((item, key) => {
                 
                  return (
                    <div className="item-box1" key={key}>
                      <img src={item.image} alt="" />
                      <p>{item.title}</p>
                      
                    </div>
                  );
                })
              : ""}
              </div>
          </div>
        </div>
        
      )}

      <div>
      <h2> Delivery Address</h2>
        <p>Address: {address.address1}, {address.address2}</p>
        {/* <p>        </p> */}
        <p>City: {address.city}</p>
        <p>State: {address.state}</p>
        <p>PinCode: {address.pincode}</p>
        <p>Phone no: {address.phoneno}</p>
      
      </div>
      
      <h2>Amount:{amount}</h2>
    </div>
    </div>
    
  )
}



function Orders() {

  const { cartItems, setCartItems,orderItems,setOrderItems,amount,setAmount} = useContext(store);
  return (
    <div>
      <MainNav/>
      <OrderComp cartItems={cartItems} address={orderItems} amount={amount}/>
    </div>
  )
}

export default Orders
