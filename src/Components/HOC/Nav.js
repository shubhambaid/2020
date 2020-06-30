import React, {Component} from "react";


class Nav extends Component{
    render(){
        return(
         <nav class="navbar" id="navbar">
        <span class="navbar-toggle" id="js-navbar-toggle">
            <i class="fas fa-bars"></i>
        </span>
        <a href="#" class="logo">Reva Hack</a>
        <ul class="main-nav" id="js-menu">
            <li>
                <a href=".section-faq" class="nav-links">About us</a>
            </li>
            <li>
                <a href="#" class="nav-links">Sponsors</a>
            </li>
            <li>
                <a href="#" class="nav-links">Speakers</a>
            </li>
            <li>
                <a href="#" class="nav-links">Team</a>
            </li>
        </ul>
    </nav>
            
            
                
                
            
        );
    }
}

export default Nav;