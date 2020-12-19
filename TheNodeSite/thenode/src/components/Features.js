import React from 'react'
import Title from '../components/Title';
import logo2 from '../images/Node-2.jpg';

function Features() {
    return (
        <div className="about-features">
        <Title title="features"></Title>
        <article className="features">
       

       <div className="features__left">
           <img src={logo2} alt="Kitchen"/>
       </div>

       <div>
       <ul className="feature__right'">
           <li>UNLIMITED Free WIFI</li>
           <li>UNLIMITED Free printing and scanning</li>
           <li>UNLIMITED 24/7 access to the space</li>
           <li>50 metres from Smith Street, 10 minute walk from Collingwood station</li>
           <li>Kitchen/shower facilities</li>
           <li>Secure access via Key-card or mobile</li>
           <li>Flexible terms: pay per month</li>
           <li>professional meeting room</li>
           <li>Day beds to chill and play </li>
       </ul>
       </div>
      

   
   </article>

        </div>
    )
}

export default Features;
