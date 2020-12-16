import React from 'react'
import { Link } from "react-router-dom";
import defaultImage from'../images/room-1.jpeg';

function Room({room}) {
  console.log(room);
  const {name, slug, image, price } = room;
  return (
   <article className="room">
     <div className="img-container">  
       <img src={image || defaultImage } alt="featured room" />
       <div className="price-top ">
         <h6>${price}</h6>
         <p>per nigth</p>
       </div>
       <Link to={`/rooms/${slug}`}
       className="btn-primary room-link">Features</Link>
     </div>
   </article>
  );
}

export default Room;
