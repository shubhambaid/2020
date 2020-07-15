import React, {Component} from "react";
import { render } from "@testing-library/react";
import Header from "./HeaderComp";
import Footer from "./FooterComp";
import Prizes from "./Prizes";
import Schedule from "./Schedule";

class Home extends Component{
    render(){
        return(
            <div className="top-top">
                <Schedule />
                <Prizes />
            </div>
        );
    }
}

export default Home;
