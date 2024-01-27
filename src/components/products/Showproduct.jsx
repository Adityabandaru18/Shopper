import React from "react";
import Bread from "../breadcrum/Bread";
import "./prod.css";
import { useContext,useState } from "react";
import { Shopcontext } from "../context/Shopcontext";
import star from "../Assets/star_icon.png";
import starD from "../Assets/star_dull_icon.png";

const Showproduct = (props) => {

    const prodcontext = useContext(Shopcontext);
    const[count,setcount] = useState(prodcontext.cart1[props.id]);
    const ran = Math.floor(Math.random() * (5000 - 200 + 1)) + 200;


    function Add(){
        prodcontext.addcart(props.id);
        setcount(prodcontext.cart1[props.id])
    }
  return (
    <div className="Prod_main">
      <div className="prod_bread">
        <Bread category={props.category} name={props.name} />
      </div>
      <div className="prod_image">
        <div className="proimage1">
          <img src={props.image} alt="i1" />
          <img src={props.image} alt="i1" />
          <img src={props.image} alt="i1" />
          <img src={props.image} alt="i1" />
        </div>
        <div className="proimage2">
          <img src={props.image} alt="i1" />
        </div>
        <div className="prodescription">
          <div>
            <p className="Prodhead">{props.name}</p>
          </div>
          <div className="starI">
            <p>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={starD} alt="" /> <span>({ran})</span>
                          </p>
          </div>
          <br></br>
          <div>
            <p>
              <span className="OLDP">${props.old}</span>
              <span className="NEWP">${props.new}</span>
            </p>
          </div>
          <p className="prodsize">Select Size</p>
          <div className="sizes_prod">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
            <p>XXL</p>
          </div>
          <button className="button-9" onClick={Add}>Add to cart</button>

          <div>
            <p>
              <span className="tag1">Category :</span>
              {props.category} , T-shirt , crop,top
            </p>
          </div>
          <div>
            <p>
              <span className="tag1">Tags :</span>
              Modern , Latest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showproduct;
