import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';
function Rooms() {
    return (
        <>
            <Hero hero="roomsHero"/>
            <Banner title="Our rooms">

            <Link to="/" className="btn-primary">
                Return Home
            </Link>

            </Banner>
            <RoomsContainer/>
        </>
    )
}

export default Rooms
