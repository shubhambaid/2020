import React, {Component} from "react";
import { render } from "@testing-library/react";
import Header from "./HeaderComp";
import Footer from "./FooterComp";
import Prizes from "./Prizes";

class Home extends Component{
    render(){
        return(
            <div>
                <Prizes />
            </div>
        );
    }
}

export default Home;
