
import './App.css';
import React from 'react';
import "./App.css";
import Home from "./pages/Home";
import MeetingRooms from "./pages/MeetingRooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import Navbar from "./components/Navbar"; 


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Home/>
        </div>
      </Router>
    </div>
  );
}

export default App;
