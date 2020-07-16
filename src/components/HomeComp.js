import React, { Component } from "react";
import { render } from "@testing-library/react";
import Header from "./HeaderComp";
import Footer from "./FooterComp";
import Navbar from "./Navbar";
import Sponsors from "./Sponsors";



class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Sponsors />


            </div>
        );
    }
}

export default Home;
