import React, { Component } from "react";
import "../Navbar.css";
import { NavLink } from "react-router-dom";


class Navbar extends Component {
    render() {
        return (
            <div>

                <div className="pivot_menu primary_white small0" style={{position: "fixed", top: "0px", bottom: "0px", width: "80px"}}>
                    <br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br />
                    <NavLink to="/speakers" className="pivot_button">
                        <i className="ms-Icon ms-Icon--FavoriteStarFill icon-large"></i>
                    </NavLink><br /><br />
                    <NavLink to="/team" className="pivot_button">
                        <i className="ms-Icon ms-Icon--TeamsLogo icon-large"></i>
                    </NavLink><br /><br />
                    <NavLink to="/faqs" className="pivot_button">
                        <i className="ms-Icon ms-Icon--Contact icon-large"></i>
                    </NavLink><br /><br />
                    <NavLink to="/coc" className="pivot_button">
                        <i className="ms-Icon ms-Icon--AirplaneSolid icon-large"></i>
                    </NavLink>
                </div>

                <div className="bottom_nav large0 medium0">
                    <NavLink to="/speakers" className="primary_white">
                        <i className="ms-Icon ms-Icon--FavoriteStarFill icon-large"></i>
                    </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <NavLink to="/team" className="primary_white">
                        <i className="ms-Icon ms-Icon--TeamsLogo icon-large"></i>
                    </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <NavLink to="/faqs" className="primary_white">
                        <i className="ms-Icon ms-Icon--Contact icon-large"></i>
                    </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <NavLink to="/coc" className="primary_white">
                        <i className="ms-Icon ms-Icon--AirplaneSolid icon-large"></i>
                    </NavLink>
                </div>

            </div>
        );
    }
}

export default Navbar;