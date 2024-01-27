import React from "react";
import Main from "./Main.jsx";
import Popular from "./popular/Popular.jsx";
import Collection from "./collection/Collection.jsx";
import Exclusive from "./exclusive/Exclusive.jsx";
import Newslet from "./newsletter/Newslet.jsx";
import Footer from "./footer/Footer.jsx";

const Shop = () => {
  return (
    <div>
      <Main />
      <Popular />
      <Exclusive />
      <Collection />
      <Newslet />
      <Footer />
    </div>
  );
};

export default Shop;
