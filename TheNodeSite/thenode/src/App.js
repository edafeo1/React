
import './App.css';
import React from 'react';
import "./App.css";
import Home from "./pages/Home";
import MeetingRooms from "./pages/MeetingRooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import Navbar from "./components/Navbar"; 
import FeaturedSpace from './components/FeaturedSpace';
import Footer from './components/Footer';


function App() {
  return (

      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/meetingrooms" component={MeetingRooms}/>
            <Route component={Error}/>

          </Switch>
          <Footer/>
        </div>
      </Router>

  );
}

export default App;

