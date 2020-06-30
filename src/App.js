import React, {Component} from "react";
// import "fdweb/fluent.css";
// import "fdweb/fluent.js";

import {HashRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./Components/HomeComp";
import Topnav from "./Components/TopnavComp";
import Timer from "./Components/TimerComp";

import "./sass/App.scss"

class App extends Component{
  render(){
    return(
      <Router>
        {/* <Topnav /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/timer" component={Timer} />
          
        </Switch>
      </Router>
    );
  }
}

export default App;
