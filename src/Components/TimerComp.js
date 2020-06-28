import React, {Component} from "react";
import "./components.css";
// import "fdweb/fluent-icons.css"
import { NavLink } from "react-router-dom";

class Timer extends Component{
    render(){
        return(
            <div className="full_screen">
                <div className="middle">
                    <div className="column offset-large2 offset-medium2 large2 medium2 small3">
                        <h1 className="ta_center">1</h1>
                        <p className="ta_center">Days</p>
                    </div>
                    <div className="column large2 medium2 small3">
                        <h1 className="ta_center">1</h1>
                        <p className="ta_center">Hours</p>
                    </div>
                    <div className="column large2 medium2 small3">
                        <h1 className="ta_center">1</h1>
                        <p className="ta_center">Minutes</p>
                    </div>
                    <div className="column large2 medium2 small3">
                        <h1 className="ta_center">1</h1>
                        <p className="ta_center">Seconds</p>
                    </div>
                    <div className="column large3 medium6 small12 center"><br /><br /><br /><br />
                        <NavLink className="backlink ta_center" to="/">Head Back In</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Timer;