

import React from "react";

const Cardpop1 = (props) => {
  return (
      <div class="card" onClick={() => window.scrollTo(0, 0)}      >
        <img src={props.image} alt="Avatar" style={{width: "100%"}} />
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

  );
};

export default Cardpop1;
