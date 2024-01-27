import React from "react";
import "./popular.css";
import Cardpop from "./Cardpop";
import data_product from "../Assets/data";
const Popular = () => {
  return (
    <div className="popular">
    <div className="w">
        <div className="w1">

      <p style={{ textAlign: "center" }}>POPULAR IN WOMEN</p>
      <hr></hr>
        </div>
      <div></div>
    </div>
      <div className="popitems">

      {data_product.map((item) => (
        <Cardpop
          key={item.id}
          name={item.name}
          image={item.image}
          new={item.new_price}
          old={item.old_price}
        />

      ))}
      </div>
    </div>
  );
};

export default Popular;
