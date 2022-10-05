import React, { useState,useContext } from "react";
import HomeNav from "./HomeNav";
import '../App.css'
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {store} from '../App';


function Login() {

  let navigate = useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  const {username,setUsername,useremail,setUseremail,cartItems,setCartItems}=useContext(store);

  const submit = ()=>{
    console.log(email,password);
    if(email===""){
      alert("Please enter email");

    }
    else if(password===""){
      alert("Please enter password");
    }
    else{
      Axios.post("https://shopkart-mern-app.herokuapp.com/getUserByEmail&Pwd",{email:email,password:password}).then((res)=>{
        if(res.data==null){
          console.log(res);
          console.log(res.data);
          alert("Invalid email or password");
        }else{
          alert("Login Successful");
          setUsername(res.data.name);
          setUseremail(res.data.email);
          console.log("Email"+useremail);
          console.log("Name"+username);
         // window.location.href = '/shopkart/main';
          navigate("/shopkart/main", {replace:true})
        }
      }).catch((err)=>{
        alert("Invalid email or password");
        console.log(err);
        
      }).finally(()=>{
        // setEmail('');
        // setPassword('');
    })
  }
  }

  return (
    <div>
      <HomeNav />
      <div className="login">

      <div className="login-form">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="john@gmail.com" onChange={(e)=>{
          setEmail(e.target.value);
        }} />
        <label htmlFor="pwd">Password</label>
        <input type="password" name="pwd" id="pwd" placeholder="********" onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
        <button type="submit" class="btn btn-primary"  onClick={submit}>Submit</button>
      </div>

      </div>
      
    </div>
  );
}

export default Login;
