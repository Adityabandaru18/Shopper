import React from 'react';
import "./exc.css";
import exclusive from "../Assets/exclusive_image.png";

const Exclusive = () => {
  return (
    <div className='exclusive'>
    <div className='m1'>
        <p className='exclusive1'>Exclusive <br></br> Offers For You</p>
        <br></br>
        <p className='exclusive2'>ONLY ON BEST SELLER PRODUCTS</p>
        <button className="button-6">Check now</button>
    </div>
    <div className='m2'>
      <img src={exclusive} alt=''/> 
    </div>
      
    </div>
  )
}

export default Exclusive
