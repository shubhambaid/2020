import React, {Component} from "react";
import { render } from "@testing-library/react";
import Header from "./HeaderComp";
import Footer from "./FooterComp";


class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default Home;