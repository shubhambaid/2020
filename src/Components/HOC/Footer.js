import React, {Component} from "react";

import linkedin from "../../img/linkedin.png";
import twitter from "../../img/twitter.svg";
import instagram from "../../img/instagram.svg";
import telegram from "../../img/telegram.png";
import github from "../../img/github.jpg";
import heart from "../../img/heart.svg";

class Footer extends Component{
    render(){
        return(
            <footer>
            <div className="row">
                <div className="col-1-of-2">
                    <ul className="footer-nav">
                        <li><a href="#">Code of conduct</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">About Reva University</a></li>
                    </ul>
                </div>
                <div className="col-1-of-2">
                    <ul className="social-links">
                        <li><a href="#"><img src={linkedin}/></a></li>
                        <li><a href="#"><img src={twitter}/></a></li>
                        <li><a href="#"><img id="twitter" src={github}/></a></li>
                        <li><a href="#"><img id="logo" src={instagram} /></a></li>
                        <li><a href="#"><img src={telegram}/></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p>
                    Build with <img id="logo" src={heart} /> by <a href="https://www.linkedin.com/in/akashhadagali/">Akash Hadagali</a>.
                </p>
                <p>
                    Disign is taken from <a href="https://natours.netlify.app/">natours</a> which is made by jonas.
                </p>
            </div>
        </footer>
            
            
                
                
            
        );
    }
}

export default Footer;