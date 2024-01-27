import React from "react";
import cart from "./Assets/cart_icon.png";
import logo from "./Assets/logo.png";
import { useState } from "react";
import { useContext } from "react";
import { Shopcontext } from "./context/Shopcontext";
import { Link } from "react-router-dom";

const Navbar = () => {

  const count = useContext(Shopcontext);
  const [menu,setmenu] = useState("shop");
 

  return (
    <div className="sticky">
      <div className="navbar">
        <div className="logo">
          <Link to="/">        <img src={logo} alt="Logo" /> </Link>
          <h1>SHOPPER</h1>
        
        </div>
        <div className="items">
          <ul>
            <li onClick={()=> {setmenu("shop")}}>
            <Link to="/" style={{textDecoration: "none",color: "black" }}> Shop { menu === "shop" ? <hr /> : <></>} </Link></li>
            <li onClick={()=>{setmenu("men")}}>
            <Link to="/mens" style={{textDecoration: "none",color: "black"}}> Men { menu === "men" ? <hr /> : <></>}</Link></li>
            <li onClick={()=>setmenu("women")}>
            <Link to="/womens" style={{textDecoration: "none",color: "black"}}> Women { menu === "women" ? <hr /> : <></>}</Link>
            </li>
            <li onClick={()=>setmenu("kids")}>
            <Link to="/kids" style={{textDecoration: "none",color: "black"}}> Kids { menu === "kids" ? <hr /> : <></>}</Link>
            </li>
          </ul>
        </div>
        <div className="login_nav">
         
{localStorage.getItem("auth-token") ?  <button> <Link to="/" style={{ textDecoration: "none", color: "white", background: "transparent" }} onClick={()=>{
   localStorage.removeItem("auth-token");window.location.replace("/");
   }}>Logout</Link>          </button>: <button> <Link to="/login" style={{ textDecoration: "none", color: "white" }}>Login</Link> </button>}

          

 
          <Link to="/cart">

          <img src={cart} alt="Cart" />
          </Link>
        {count.Gettotal() > 0 && <div className="dummy">{count.Gettotal()}</div>}
  
          </div>
        </div>
    </div>
  );
};

export default Navbar;
