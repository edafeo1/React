import React from 'react';
import logo from '../images/Node-4.jpg';
import Title from './Title';
import Banner from './Banner';

function About() {
    return (
       <section className="about__section">
           <Title title="About Us"/>

           

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

                   <div>
                       
                   </div>

               </Banner>
           
              
              <div className="right__section">
               <img src={logo} alt="about us"/>
              </div>
         </div>
           

           <line className="Line"></line>


       </section>
    )
}

export default About;
