import React from 'react'
import "./news.css";
const Newslet = () => {
  return (
    <div className='news'>
      <p className='get1'>Get Exclusive Offers on Your Email</p>
      <br />
      <p className='get2'>Subbscribe to our newsletter and stay updated</p>
      <div className="subscribe-container">
  <input type="email" className="email-input" placeholder="Enter your email" />
  <button className="subscribe-button">Subscribe</button>
</div>
    </div>
  )
}

export default Newslet;

