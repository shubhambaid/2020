import React, {Component} from "react";
import { render } from "@testing-library/react";

class Header extends Component{
    render(){
        return(
                <div>
                <h1>This is the Header</h1>
                <p>deep</p>
                </div>
        );
    }
}

export default Header;
