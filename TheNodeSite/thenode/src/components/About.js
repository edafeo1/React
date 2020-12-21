import React from 'react';
import logo from '../images/Node-4.jpg';
import Title from './Title';
import Banner from './Banner';

function About() {
    return (
       <section id="About">
           <Title title="About Us"/>

           

         <div className="about">
              <Banner 
               title=""
               Subtitle="About"
               classss="about__banner"
               >
                   
                       <p>The Node Innovation Centre Collingwood is a brand new serviced buisness center with Private office suites.</p>
                       <div className="space3"></div>
                       <p>The suites are fully furnished with desks and chairs. The Building is in the heart of Collingwood.</p>
                       <div className="space3"></div>
                       <p>Over 200 Sqm of Space! It flows over 2 floors with 4 private - & open office spaces with a 24/7 meeting room available.</p>
                       <p>Try out Collingwood's most talked-about business space. If your looking for a prestige fully serviced office The Node Innovation Centre Collingwood is the space for you. Depending on your office requirements our suites range between $800-$1200 per Week. </p>
                   

               </Banner>
           
              
              <div className="right__section">
               <img src={logo} alt="about us"/>
              </div>
         </div>
       </section>
    )
}

export default About;
