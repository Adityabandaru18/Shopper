import React, { useContext } from 'react';
import { Shopcontext } from '../context/Shopcontext';
import Showproduct from './Showproduct.jsx';
import Footer from "../footer/Footer.jsx";
import Description from './Description.jsx';
import Related from './Related.jsx';

const Products = () => {
  const idcontext = useContext(Shopcontext);

  return (
    <div>
      {idcontext.all_product.map((e) => {
        if (e.id === Number(idcontext.Id)) {
          return (
            <Showproduct
              id={e.id}
              name={e.name}
              image={e.image}
              category={e.category}
              new={e.new_price}
              old={e.old_price}
            />
          );
        }
      })}
      <Description />
       <Related />
    <Footer />
    </div>
  );
};

export default Products;
