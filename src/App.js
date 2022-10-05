import React, { useState, createContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Main from "./components/Main";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import Error404 from "./components/Error404";
import Login from "./components/login";
import Register from "./components/register";
// import Ran1 from './components/'
// import Ran2 from './components/'

export const store = createContext();

function App() {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [orderItems,setOrderItems] = useState({address1:"",address2:"",city:"",state:"",pincode:"",phoneno:""});
  const [amount,setAmount]= useState(0);
  return (
    <div className="App">
      <store.Provider value={{username,setUsername,useremail,setUseremail,cartItems,setCartItems,orderItems,setOrderItems,amount,setAmount}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shopkart/cart" element={<Cart />} />
            <Route path="/shopkart/main" element={<Main />} />
            <Route path="/shopkart/orders" element={<Orders />} />
            <Route path="/shopkart/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
