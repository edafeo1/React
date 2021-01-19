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
import IncludedAmenities from '../components/IncludedAmenities';
import Heartofcollingwood from '../components/Heartofcollingwood';
import UpcomingEvents from '../components/UpcomingEvents';
import Contact from '../components/Contact';





function Home() {
    return (
        
       <div id="home">
<>
<Hero childeren={
    <Banner title="Welcome To The Node" Subtitle="Delux rooms starting at $800/Month" classss="banner">
    <Link to="/meetingrooms" className="btn-primary">
      our Office Space
    </Link>
  </Banner> 
}>
</Hero>
<section className="about__section">
<About/>
</section>



<Amenities/>
<SuitesAvailable/>
<FeaturedSpace/>
<div className="space"></div>
<IncludedAmenities/>
<Location/>
<Heartofcollingwood/>
<UpcomingEvents/>
<Contact/>
</>
  


       </div>
        
    );
}

export default Home;