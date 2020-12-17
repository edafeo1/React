import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Amenities from '../components/Amenities';
import SuitesAvailable from '../components/SuitesAvailable';




function Home() {
    return (
        
       <div>
<>
<Hero childeren={
    <Banner title="Welcome To The Node" Subtitle="Delux rooms starting $1600/Month" classss="banner">
    <Link to="/meetingrooms" className="btn-primary">
      our Office Space
    </Link>
  </Banner> 
}>
</Hero>

<About/>
<Amenities/>
<SuitesAvailable/>
</>
  


       </div>
        
    );
}

export default Home;