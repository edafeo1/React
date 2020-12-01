import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
function Rooms() {
    return (
        <div>
            <Hero hero="roomsHero"/>
            <Banner title="Our rooms">

            <Link to="/" className="btn-primary">
                Return Home
            </Link>

            </Banner>
        </div>
    )
}

export default Rooms
