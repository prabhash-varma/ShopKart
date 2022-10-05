import React from "react";
import HomeNav from "./HomeNav";
import Carousel from "react-bootstrap/Carousel";
import {Link} from 'react-router-dom';
import '../App.css'
function Home() {
  return (
    <div>
      <HomeNav />

      <div className="cnt">
        <h1 style={{fontSize:90}}>ShopKart</h1>
        <div className="btnn">
        <Link to="/login"><button type="button" class="btn btn-success">Login   </button></Link>
        <Link to="/register"><button type="button" class="btn btn-success">Register</button></Link> 
        </div>
      </div>
      
      
    </div>
  );
}

export default Home;
