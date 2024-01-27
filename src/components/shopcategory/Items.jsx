import React from 'react';
import { useContext } from 'react';
import { Shopcontext } from '../context/Shopcontext';
import { Link } from 'react-router-dom';

const Items = (props) => {
  const idcontext = useContext(Shopcontext);

  function Changeid(){
    window.scrollTo(0, 0);
    idcontext.setId(props.id);

  }

 return(
    <div class="card1" onClick={Changeid} >
    <Link to="/product"> <img src={props.image} alt="Avatar" style={{width: "100%"}} />   </Link>
    <div class="container">
      <p>{props.name}</p>
      <br></br>
      <p className="cardP">
      <span className="span1">

      ${props.new} 
      </span>
      <span className="span2">
      ${props.old}
      </span>
    </p>

    </div>
  </div>
 )
}

export default Items
