import React from 'react';
import Banner from '../components/Banner';
import Title from '../components/Title';
import logo2 from '../images/Node-2.jpg';
import logo3 from '../images/MeetingRoom.jpg';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

function Amenities() {
    return (

        
<section class="section">
<Title title="Amenities" className="title"></Title>

      <div class="about-center section-center">
        <article class="about-img">
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
        </article>
        <article class="about">

          <div class="about-content">

            <div class="content active" id="history">
                <div className="space3"></div>
              <p className="space3">7 Person Meeting Room</p>
                         <p className="space3">Fast WIFI</p>
                         <p className="space3">Kitchen</p>
                         <p className="space3">24/7 access</p>
                         <p className="space3">Print</p>
                         <p className="space3">Scan</p>
                         <p className="space3">Copy</p>
                         <p className="space3">Wheelchair accessible</p>
                         <p className="space3">Shower</p>
                         <p className="space3">Security</p>
                         <p className="space3">Cleaning</p>

                         <div className="space3"></div>
            </div>

            
           
          </div>
        </article>
      </div>
    </section>
 
                         

       



   


   






    )
}

export default Amenities;

/*
<p>7 Person Meeting Room</p>
<p>Fast WIFI</p>
<p>Kitchen</p>
<p>24/7 access</p>
<p>Print</p>
<p>Scan</p>
<p>Copy</p>
<p>Wheelchair accessible</p>
<p>Shower</p>
<p>Security</p>
<p className="space3">Cleaning</p>
*/