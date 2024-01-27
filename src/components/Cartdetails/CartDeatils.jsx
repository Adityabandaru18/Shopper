import React from 'react'
import del from "../Assets/cart_cross_icon.png";
import { useContext } from 'react';
import { Shopcontext } from '../context/Shopcontext';

const CartDeatils = (props) => {
  
  const delcontext = useContext(Shopcontext);
  function Delete(){
    delcontext.delcart(props.id);
  }

  const FP = Number(props.quantity)*Number(props.new);
  return (
    <div className='final_cart'>
    <div className='FC1'>

    <img src={props.image}  alt=''/>
    <p>{props.name}</p>
    </div>
    <div className='FC2'>
        <p className='price1'>${props.new}</p>
        <p className='price2'>{props.quantity}</p>
        <p className='fprice'>{FP}</p>
        <p className='price_button' onClick={Delete}>
          <img src={del} alt='' />
        </p>
    </div>
  
  
    </div>
  )
}

export default CartDeatils;
