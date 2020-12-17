import React, { Component } from 'react';

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
                        <img src="" alt="The Node Site"/>
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
                        <Link to="/meetingrooms">Meetingrooms</Link>
                    </li>

                    <li>
                        <Link to="/">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/meetingrooms">Amenities</Link>
                    </li>

                    <li>
                        <Link to="/">Location</Link>
                    </li>
                    <li>
                        <Link to="/meetingrooms">Events</Link>
                    </li>
                </ul>
            </div>
            
        </nav>

         
    )
}
}