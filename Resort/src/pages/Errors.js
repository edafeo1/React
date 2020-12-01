import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';


function Errors() {
    return (
        <div className="">
            
        <Hero/>
        <Banner title="404" Subtitle="Page not Found" >

          <Link to="/" className="btn-primary">
             return Home
          </Link>
        </Banner>
        
        </div>
    )
}

export default Errors