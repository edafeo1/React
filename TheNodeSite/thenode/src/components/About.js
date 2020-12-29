import React from 'react';
import logo from '../images/Node-4.jpg';
import logo2 from '../images/Node-2.jpg';
import Title from './Title';
import Banner from './Banner';

function About() {



    return (
      <section class="section">
      <div class="title">
        <h2>About</h2>
      </div>

      <div class="about-center section-center">
        <article class="about-img">
          <img src={logo} alt="" />
          <img src={logo2} alt="" />
        </article>
        <article class="about">

          <div class="about-content">

            <div class="content active" id="history">
              <h4>About Us</h4>
              <p>The Node Innovation Centre Collingwood is a brand new serviced buisness center with Private office suites.</p>
                       
                       <p>The suites are fully furnished with desks and chairs. The Building is in the heart of Collingwood.</p>
                      
                       <p>Over 200 Sqm of Space! It flows over 2 floors with 4 private - & open office spaces with a 24/7 meeting room available.</p>
                       <p className="space3">Try out Collingwood's most talked-about business space. If your looking for a prestige fully serviced office The Node Innovation Centre Collingwood is the space for you. Depending on your office requirements our suites range between $800-$1200 per Week. </p>
            </div>

            <div class="content active" id="vision">
              <h4>Our Features</h4>
              <p>UNLIMITED Free WIFI</p>
           <p>UNLIMITED Free printing and scanning</p>
           <p>UNLIMITED 24/7 access to the space</p>
           <p>50 metres from Smith Street, 10 minute walk from Collingwood station</p>
           <p>Kitchen/shower facilities</p>
           <p>Secure access via Key-card or mobile</p>
           <p>Flexible terms: pay per month</p>
           <p>professional meeting room</p>
           <p>Day beds to chill and play </p>
            </div>
           
          </div>
        </article>
      </div>
    </section>
    )
}



export default About;

