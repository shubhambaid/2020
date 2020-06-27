import React, {Component} from "react";
import "./components.css";
import { NavLink } from "react-router-dom";

class Topnav extends Component{
    render(){
        return(
            <div className="pivot_container large12 medium12 small12">
                <NavLink to="/timer" className="right pivot_button">Coming Soon</NavLink>
            </div>
        );
    }
}

export default Topnav;