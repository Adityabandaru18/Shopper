import React from 'react'
import "./collection.css";
import new_collections from '../Assets/new_collections';
import Newcol from './Newcol';


const Collection = () => {
  return (
    <div className="collection">
    <div className="w">
        
      <p className="newcollection">NEW COLLECTIONS</p>
      <hr></hr>
    </div>
      <div className="copitems">

      {new_collections.map((item) => (
        <Newcol
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

export default Collection
