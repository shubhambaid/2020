import React, { Component} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import "fdweb/fluent.css";
import "fdweb/fluent-icons.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import Speakers from "./components/Speakers";
import FAQ from "./components/FAQ";
import Home from "./components/HomeComp";
import FourZeroFour from "./components/404Comp";

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/speakers" component={Speakers} />
            <Route path="/teams" component={Teams} />
            <Route path="/coc" component={Home} />
            <Route path="/faqs" component={FAQ} />
            <Route component={FourZeroFour} />
          </Switch>
          <Navbar />
      </Router>
    );
  }
}

export default App;
