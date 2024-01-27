import React from 'react'

const Newcol = (props) => {
  return (
    <div>
          <div>
      <div className="card">
        <img src={props.image} alt="Avatar" style={{width: "100%"}} />
        <div className="container">
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
    </div>
    </div>
  )
}

export default Newcol
