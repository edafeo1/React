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
                        <a href="/">Home</a>
                    </li>

                    <li>
                    <Link to="/meetingrooms">Gallery</Link>
                    </li>
                    <li>
                        <a href="#amenities">Amenities</a>
                    </li>

                    <li>
                        <Link to="/">Location</Link>
                    </li>
                    <li>
                        <Link to="/">Events</Link>
                    </li>
                </ul>
            </div>
            
        </nav>

         
    )
}
}