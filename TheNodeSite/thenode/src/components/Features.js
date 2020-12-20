import React from 'react'
import Title from '../components/Title';
import logo2 from '../images/Node-2.jpg';
import Banner from '../components/Banner';

function Features() {
    return (
        
<section className="">
<Title title="Features"/>



<div className="features">
   <Banner 
    title=""
    Subtitle="Feature"
    classss="features__banner"
    >

           <p>UNLIMITED Free WIFI</p>
           <p>UNLIMITED Free printing and scanning</p>
           <p>UNLIMITED 24/7 access to the space</p>
           <p>50 metres from Smith Street, 10 minute walk from Collingwood station</p>
           <p>Kitchen/shower facilities</p>
           <p>Secure access via Key-card or mobile</p>
           <p>Flexible terms: pay per month</p>
           <p>professional meeting room</p>
           <p>Day beds to chill and play </p>


        <div>
            
        </div>

    </Banner>

   
   <div className="Right-section">
    <img src={logo2} alt="Features"/>
   </div>
</div>


<line className="Line"></line>


</section>
    )
}

export default Features;


