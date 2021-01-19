import React, { Component } from 'react';
import logo from '../images/NodeLogo.jpg';

import {Link} from 'react-router-dom';

import DehazeIcon from '@material-ui/icons/Dehaze';

export default class Navbar extends Component {

    
state={
    isOpen: false
}

handleClick=()=>{
    this.setState({isOpen: !this.state.isOpen})
}

    render() {
        return (
            <nav className="navbar">
                
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="The Node Site" className="Logo"/>
                    </Link>

                    <button type="button" className="nav-btn" onClick={this.handleClick}>
                        
                        <DehazeIcon className="nav-icon"/>

                    </button>
                     
                </div>
                <ul className={this.state.isOpen? "nav-links show-nav":"nav-links"} >
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                    <Link to="/meetingrooms">Gallery</Link>
                    </li>

                    <li>
                        <Link to="/amenities">Amenities</Link>
                    </li>

                    <li>
                        <Link to="/location">Location</Link>
                    </li>

                    <li>
                        <Link to="/events">Events</Link>
                    </li>

                    <li>
                        <Link to="/contact">Get in Contact</Link>
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>
            
        </nav>

         
    )
}
}