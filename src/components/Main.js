import React,{useState,useContext} from "react";
import MainNav from "./MainNav";
import JsonData from "./data.json";
import { Link ,useNavigate} from "react-router-dom";
import "../App.css";
import {store} from "../App"


function Main() {

  
  const navigate = useNavigate();
   const {cartItems,setCartItems}=useContext(store);

  
  return (
    <div className="Mainclass">
      <MainNav />
      {/* <button onClick={()=>{
        console.log(cartItems);
      }}>Cart Items</button> */}
      <div className="item-class">
        {JsonData.map((item,key) => {
          return (
            <div className="item-box" key={key}>
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <div className="addtocart">
                <p>Rs.{item.price}</p>
                <button onClick={()=>{
                  if(!cartItems.includes(item)){
                 
                  setCartItems([...cartItems,item]);
                  console.log(cartItems);
                  //alert("Item Added to cart");
                  navigate("/shopkart/cart");
                  
                  
                   }//else if(cartItems.includes(item)){
                  //   setCartItems(cartItems.filter((ob)=> ob.id!==item.id))
                   
                 
                  //  } 
                 
                  
                }}className="btn btn-primary" >{item.btn} </button>
                </div>

               

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
