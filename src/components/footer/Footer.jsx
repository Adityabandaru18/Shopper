import React from 'react'
import "./foot.css";
import shop from "../Assets/logo.png"; 
import ins from "../Assets/instagram_icon.png";
import wa from "../Assets/whatsapp_icon.png";
import pin from "../Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className='footer'>
    <div className='f1'>
    <img src={shop} alt="Logo" />
          <h1>SHOPPER</h1>
    </div>
    <div className='f2'>
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
    <div className='f3'>
    <img src={ins} alt="instagram" />
    <img src={wa} alt="pin" />
    <img src={pin} alt="Whatsapp" />
        
    </div>
    <div className='f4'>
        <hr></hr>
        <p>Copyright @ 2023 - All Right Reserved.</p>
    </div>
      
    </div>
  )
}

export default Footer;
