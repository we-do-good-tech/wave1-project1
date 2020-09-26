import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,HashRouter,Route,Switch,Link,Redirect} from 'react-router-dom';
import Home from './Home.js';
import WhatIsBoccia from './WhatIsBoccia';




class App extends Component {

  render() {

      return( 
       <HashRouter basename='/'>
        <Route exact path="/" component ={WhatIsBoccia}/> 
        <Route exact path="/WhatIsBoccia" component ={WhatIsBoccia}/> 
       </HashRouter>

      );
  }
}

export default App;
