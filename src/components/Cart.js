import React, { useContext, useState } from "react";
import MainNav from "./MainNav";
import { useNavigate } from "react-router-dom";
import { store } from "../App";
import "../App.css";
function Cart() {
  const { cartItems, setCartItems, orderItems, setOrderItems,amount,setAmount } =
    useContext(store);

  console.log(cartItems);

  const removeItems = (key) => {
    const newset = cartItems.filter((ob, id) => id !== key);
    setCartItems([...newset]);
  };

  const navigate = useNavigate();

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneno, setPhoneno] = useState("");

  var a = /(^\d{6}$)/; //pincode
  var pno = /^\d{10}$/;

  const order = async () => {
    if (address1 == "") {
      alert("Please Enter Valid Address");
    } else if (city == "") {
      alert("Please Enter Valid City");
    } else if (state == "") {
      alert("Please Enter Valid State");
    } else if (pincode == "") {
      alert("Please Enter Valid Pincode");
    } else if (!a.test(pincode)) {
      alert("Please Enter Valid Pincode");
    } else if (phoneno == "") {
      alert("Please Enter Valid Phone Number");
    } else if (!phoneno.match(pno)) {
      alert("Please Enter Valid Phone Number");
    } else {
      let obj = {
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        pincode: pincode,
        phoneno: phoneno,
      };
      cartItems.map((item,key)=>{
        setAmount(amount+item.price)
      })
      await setOrderItems(obj);
      console.log(orderItems);
      alert("Order Placed Successfully");
      navigate("/shopkart/orders");
    }
  };

  return (
    <div>
      <MainNav />

      {cartItems.length == 0 ? (
        <h1>Cart is Empty</h1>
      ) : (
        <div>
          <div className="item-class">
            {cartItems
              ? cartItems.map((item, key) => {
                  return (
                    <div className="item-box" key={key}>
                      <img src={item.image} alt="" />
                      <p>{item.title}</p>
                      <div className="addtocart">
                        <p>Rs.{item.price}</p>
                        <button
                          onClick={() => {
                            removeItems(key);
                          }}
                          className="btn btn-primary"
                        >
                          Remove{" "}
                        </button>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>

          <div className="address">
            <h2>Enter Delivery Address</h2>
            <input
              type="text"
              name="address1"
              onChange={(e) => {
                setAddress1(e.target.value);
              }}
              placeholder="Address line 1"
            />

            <input
              type="text"
              name="address2"
              onChange={(e) => {
                setAddress2(e.target.value);
              }}
              placeholder="Address line 2"
            />

            <input
              type="text"
              name="city"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder="City"
            />

            <input
              type="text"
              name="state"
              onChange={(e) => {
                setState(e.target.value);
              }}
              placeholder="State"
            />

            <input
              type="text"
              name="pincode"
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              placeholder="Pincode"
            />

            <input
              type="text"
              name="phone"
              onChange={(e) => {
                setPhoneno(e.target.value);
              }}
              placeholder="Phone no"
            />

            <input type="text" placeholder="India" disabled={true} />

            <div id="order-btn">
              <button
                className="btn btn-primary"
                onClick={() => {
                  order();
                }}
              >
                Order Cart Items{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
