import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,HashRouter,Route,Switch,Link,Redirect} from 'react-router-dom';
import Home from './pages/Home.js';
import WhatIsBoccia from './pages/WhatIsBoccia';
import BocciaClasses from './pages/BocciaClasses';
import MeetThePlayers from './pages/MeetThePlayers';
import Gear from './pages/Gear';
import HowToPlay from './pages/HowToPlay';
import Rules from './pages/Rules';
import Contact from './pages/Contact';



class App extends Component {

  render() {

      return( 
       <HashRouter basename='/'>
        <Route exact path="/" component ={WhatIsBoccia}/> 
        <Route path ="/BocciaClasses" component={BocciaClasses}/>
        <Route path="/WhatIsBoccia" component ={WhatIsBoccia}/> 
        <Route path="/MeetThePlayers" component ={MeetThePlayers}/>        
        <Route path="/HowToPlay" component ={HowToPlay}/> 
        <Route path="/Rules" component ={Rules}/>
        <Route path="/Contact" component ={Contact}/>
        <Route exact path="/Example" component ={Home}/> 
       </HashRouter>

      );
  }
}

export default App;
