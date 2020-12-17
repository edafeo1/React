import React from 'react';
import logo from '../images/Node-4.jpg';
import logo2 from '../images/Node-2.jpg';
import Title from './Title';
import Banner from './Banner';

function About() {
    return (
       <section className="about__section">

           

         <div className="about">
              <Banner 
               title=""
               Subtitle="About"
               classss="about__banner"
               >
                   <p>
                       The Node Innovation Centre Collingwood is a brand new serviced buisnes center with Private office suites. The suites are fully furnished with desks and chairs. The Building is in the heart of Collingwood. Over 200 Sqm of Space! it flows over 2 floors with 4 private - & open office spaces with a 24/7 meeting room available.
                       Try out Collingwood's most talked-about business space. if your looking for a prestige fully serviced office The Node Innovation Centre Collingwood is the space for you. Depending on your office requirements our suites range between $800-$1200 per Week. 
                   </p>

               </Banner>
           
              
              <div className="right__section">
               <img src={logo} alt="about us"/>
              </div>
         </div>
           

           



           <article>
           <Title title="features"></Title>
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

                    <div className="feature__left">
                        <img src={logo2} alt="Kitchen"/>
                    </div>
                </article>

       </section>
    )
}

export default About;
