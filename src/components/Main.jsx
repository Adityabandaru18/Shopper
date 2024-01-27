import React from 'react';
import hero from "./Assets/hero_image.png";
import hand from "./Assets/hand_icon.png";


const Main = () => {
  return (
    <div className='mainpage'>
      <div className='main1'>
        <h2>NEW ARRIVALS ONLY</h2>
        <br />
        <br />
        <p>
          new  
          <img src={hand} alt='hand' className='handimage'/>
          <br />
          collections 
          <br />
          for everyone
        </p>
        <button className="button-5">Latest collection</button>
      </div>
      <div className='main2'>
        <img src={hero} alt='hero' />
      </div>
    </div>
  );
}

export default Main;
