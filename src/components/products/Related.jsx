import React from "react";
import "./prod.css";
import data_product from "../Assets/data";
import Cardpop1 from "./Cardpop1";

const Related = () => {
  return (
    <div className="popular">
    <div className="w1">
        <div className="w">

      <p style={{ textAlign: "center" }}>RELATED ITEMS</p>
      <hr></hr>
        </div>
      <div></div>
    </div>
      <div className="popitems">

      {data_product.map((item) => (
        <Cardpop1
          key={item.id}
          name={item.name}
          image={item.image}
          new={item.new_price}
          old={item.old_price}
        />

      ))}
      </div>
    </div>
  )
}

export default Related
