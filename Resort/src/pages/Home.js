import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';



function Home() {
    return (
        
       <div>
<>
<Hero childeren={
    <Banner title="Luxurious rooms" Subtitle="Delux rooms starting $200">
    <Link to="/rooms" className="btn-primary">
      our rooms
    </Link>
  </Banner> 
}>

</Hero>
  <Services/>
  <FeaturedRooms/>
</>
  


       </div>
        
    );
}

export default Home;