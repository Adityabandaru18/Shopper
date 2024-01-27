import React from 'react';
import { useContext } from 'react';
import { Shopcontext } from '../context/Shopcontext.js';
import Footer from '../footer/Footer.jsx';
import './shopcategory.css'; 
import Items from './Items.jsx';
import drop from "../Assets/dropdown_icon.png"

const Shopcategory = (props) => {
  const all_product = useContext(Shopcontext);

  return (
    <div className='shopcat'>
      <div className='image-container'>
        <img src={props.banner} alt='' className='image' />
      </div>
      <div className='Show_results'>
        <p className='show1'>
          <span>Showing 1 - 12</span> out of 54 products
        </p>
        <button>Sort by <img src={drop} alt=''/></button>
      </div>
      <div className='popitems'>
     {
      all_product.all_product.map((item)=>{
        if(props.category === item.category){
          return (<Items id={item.id}
          name={item.name}
          image={item.image}
          new={item.new_price}
          old={item.old_price}
          />
          )

        }
     })
     }

      </div>
      <button class="button-7" onClick={() => window.scrollTo(0, 0)}>Explore more</button>
      <Footer className="last_foot"/>
    </div>
  );
};

export default Shopcategory;
