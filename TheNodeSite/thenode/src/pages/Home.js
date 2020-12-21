import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Features from '../components/Features';
import Location from '../components/Location';
import Amenities from '../components/Amenities';
import SuitesAvailable from '../components/SuitesAvailable';
import FeaturedSpace from '../components/FeaturedSpace';




function Home() {
    return (
        
       <div id="home">
<>
<Hero childeren={
    <Banner title="Welcome To The Node" Subtitle="Delux rooms starting $1600/Month" classss="banner">
    <Link to="/meetingrooms" className="btn-primary">
      our Office Space
    </Link>
  </Banner> 
}>
</Hero>
<section className="about__section">
<About/>
</section>

<Features/>


<Amenities/>
<SuitesAvailable/>
<FeaturedSpace/>
<div className="space"></div>
<Location/>
</>
  


       </div>
        
    );
}

export default Home;