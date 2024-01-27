import React from "react";
import "./cart.css";
import { useContext, useState, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontext";
import CartDeatils from "./CartDeatils.jsx";
import Det from "./Det.jsx";
import Footer from "../footer/Footer.jsx";
import empty from "../Assets/e2.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartcontext = useContext(Shopcontext);

  var Fp = 0;
  const [price, setprice] = useState(Fp);

  let totalPrice = 0;

  cartcontext.all_product.forEach((item) => {
    if (cartcontext.cart1[item.id] > 0) {
      totalPrice += Number(item.new_price) * Number(cartcontext.cart1[item.id]);
    }
  });

  useEffect(() => {
    setprice(totalPrice);
  }, [totalPrice]);

  return (
    <div>
      {price ? (
        <div className="maincart">
          <div className="mainU">
            <ul className="ul1">
              <li>Products</li>
              <li>Title</li>
            </ul>

            <ul className="ul2">
              <li>Price</li>
              <li>Quantity</li>
              <li>Total</li>
              <li>Remove</li>
            </ul>
          </div>
          <hr className="carthr"></hr>
          <div className="cartDet">
            {cartcontext.all_product.map((item, id) => {
              if (cartcontext.cart1[item.id] > 0) {
                return (
                  <CartDeatils
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    new={item.new_price}
                    image={item.image}
                    quantity={cartcontext.cart1[item.id]}
                  />
                );
              }
            })}
          </div>
          <Det price={price} />
          <Footer />
        </div>
      ) : (
        <div className="emptycart">
  
        <Link to="/">          <img src={empty} alt="" />    </Link>  
        </div>
      )}
    </div>
  );
};

export default Cart;

