import React from "react";
import { createContext, useState } from "react";
import all_product from "../Assets/all_product";

export const Shopcontext = createContext(null);

const getdefaultcart = () => {
  const cart = [];
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export default function Contextprovider(props) {
  const [Id, setId] = useState("");
  const [cart1, setcart] = useState(getdefaultcart());
  function addcart(id) {
    setcart((prev) => ({ ...prev,[id]:(prev[id]+1) }));
  }
  function delcart(id) {
    setcart((prev) => ({ ...prev, [id]:prev[id] - 1 }));
  }
  function Gettotal(){
    let total = 0;
    for(const i in cart1){
      if(cart1[i]>0){
        total += cart1[i];
      }

    }
    return total;
  }
  return (
    <Shopcontext.Provider value={{ all_product, Id, setId, cart1, addcart, delcart,Gettotal }}>
      {props.children}
    </Shopcontext.Provider>
  );
}
