import React,{useState} from 'react'
import HomeNav from './HomeNav';
import '../App.css'
import Axios from 'axios';
import {Navigate} from 'react-router-dom';
function Register() {

  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const registeruser = ()=>{

    if(name==''){
      alert('Enter valid Name');
    }
    else if(email=='' || email.includes('@')===false){
      alert('Enter valid Email');
    }
    else if(password==''){
      alert('Enter valid Password');
    }

    else{
      Axios.post("https://shopkart-mern-app.herokuapp.com/addUser",{name,email,password}).then((res)=>{
        console.log(res);

        if(res.data==null){
          alert('User already exists with this Email');
        }
        else{
          alert('User registered successfully');
          window.location.href = '/login';
        }
       
         
       // <Navigate to="/login" replace={true} />
      }).catch((err)=>{
        console.log(err);
      }).finally(()=>{
        
      })
      
    }
  }

  return (

    <div>
      <HomeNav/>
      <div className="login">

      <div className="login-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="john" onChange={(e)=>{
          setName(e.target.value);
        }}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="john@gmail.com" onChange={(e)=>{
          setEmail(e.target.value);
        }} />
        <label htmlFor="pwd">Password</label>
        <input type="password" name= "pwd" id="pwd" placeholder="********" onChange={(e)=>{
          setPassword(e.target.value);
        }}/>
        <button type="submit" class="btn btn-primary" onClick={registeruser}>Register</button>
      </div>

      </div>
    </div>
  )
}

export default Register
