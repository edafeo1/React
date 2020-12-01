import React from 'react';
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Errors from "./pages/Errors";
import {Route, BrowserRouter as Router,Switch} from 'react-router-dom';
import Navbar from "./components/Navbar"; 



function App() {
  return (

    <Router> 
    <div>
      <Navbar/>   
      <Switch> 
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRooms}/>
      <Route component={Errors}/>
      </Switch>
      
      
    </div>
    </Router> 
    
  );
} 

export default App;
