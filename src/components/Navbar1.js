import React, { Component } from 'react';
import "../Navbar1.css";

class Navbar1 extends Component {
    render() {
        return (
            <div className="">

                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="link-text">Speakers</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="link-text">Schedule</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="link-text">Pricing</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <span className="link-text">FAQ</span>
                            </a>
                        </li>


                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar1;