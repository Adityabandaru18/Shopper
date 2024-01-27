import React from 'react';
import side from "../Assets/breadcrum_arrow.png";

const Bread = (props) => {

  return (
    <div className='breadmain'>

    <div className='bread1'>
    <p> Home <img src={side} alt=''/> Shop <img src={side} alt=''/> {props.category} <img src={side} alt=''/> {props.name}</p>

    </div>

      
    </div>
  )
}

export default Bread
