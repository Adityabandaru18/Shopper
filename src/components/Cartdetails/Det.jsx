import React from 'react'

const Det = (props) => {
  return (
    <div className='Bill'>
    <div className='bil1'>
        <h1>Cart Totals</h1>
        <br></br>
        <div className='o1'>
            <p>Subtotal</p>
            <p>${props.price}</p>
        </div>
        <hr></hr>
        <div className='o1'>
            <p>Shipping Fee</p>
            <p>Free</p>
        </div>
        <hr></hr>
        <div className='o2'>
            <p>Total</p>
            <p>${props.price}</p>
        </div>
        <br></br>
        <br></br>
        <button class="button-6">Proceed to checkout</button>
    </div>
    <div className='promo'>
        <p>If you have a promo code, Enter it here</p>
        <div class="subscribe-container1">
  <input type="email" class="promo-input" placeholder="Promo code" />
  <button class="subscribe-button1" onClick={()=>{
    alert("promo codes unavailable");
  }}>Submit</button>
</div>
    </div>
      
    </div>
  )
}

export default Det
