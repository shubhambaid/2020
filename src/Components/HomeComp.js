import React, {Component} from "react";
// import "./components.css";

import Header from "./HOC/Header"; 
import About from "./HOC/About";

class Home extends Component{
    render(){
        return(
            <div>
                <Header
                    pmain = "Reva Hack"
                    psec = "<2020>"
                    pri_btn_text = "Register Now!"
                    sec_btn_text = "Call For Speaker"
                />
                <About title="About reva hack">hello</About>
                
            </div>
        );
    }
}

export default Home;