
import './App.css';
import React from 'react';
import "./App.css";
import Home from "./pages/Home";
import MeetingRooms from "./pages/MeetingRooms";

import Error from "./pages/Error";
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import Navbar from "./components/Navbar"; 
import FeaturedSpace from './components/FeaturedSpace';
import Footer from './components/Footer';
import Amenities from './components/Amenities';
import Location from './components/Location';
import Contact from './components/Contact';
import UpcomingEvents from './components/UpcomingEvents';


function App() {
  return (

      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/meetingrooms" component={MeetingRooms}/>
            <Route exact path="/amenities" component={Amenities}/>
            <Route exact path="/location" component={Location}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/events" component={UpcomingEvents}/>
            <Route component={Error}/>

          </Switch>
          <Footer/>
        </div>
      </Router>

  );
}

export default App;

