import React, { Component, Suspense, lazy } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import Speakers from "./components/Speakers";
import Loading from "./components/LoadComp";
import "fdweb/fluent.css";
import "fdweb/fluent-icons.css";
import "./App.css";
import FAQ from "./components/FAQ";

const Home = lazy(() =>import("./components/HomeComp"));

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={Loading}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/speakers" component={Speakers} />
            <Route path="/teams" component={Teams} />
            <Route path="/coc" component={Home} />
            <Route path="/FAQs" component={FAQ} />
          </Switch>
          <Navbar />
        </Suspense>
      </Router>
    );
  }
}

export default App;
